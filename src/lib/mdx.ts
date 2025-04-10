import { CategoryDetail, Post, PostMatter } from '@/config/types';
import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = 'content/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// MDX 파일 파싱 : abstract / detail 구분
const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);

  return { 
    ...postAbstract, 
    ...postDetail 
  };      
};

export const parsePostAbstract = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');
    
  const [category, slug] = filePath.split('/');
  
  const url = `/blog/${category}/${slug}`;

  return {
    url,
    category,
    slug,
  };
};

// MDX 상세정보
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
  return { 
    ...grayMatter, 
    dateString, 
    content, 
    readingMinutes 
  };
};

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/*.mdx`);
  return paths;
};
 
// 모든 포스트 목록 조회
export const getPostList = async (category?: string): Promise<Post[]> => {
  const paths: string[] = getPostPaths(category);
  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return posts.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
};

// 모든 카테고리 조회
export const getCategories = async (): Promise<CategoryDetail[]> => {
  const catePaths: string[] = sync(`${POSTS_PATH}/*`);
  
  const categories = catePaths.map((catePath) => {
    const category = catePath.split(path.sep).pop() as string;
    const postCount = sync(`${POSTS_PATH}/${category}/*.mdx`).length;
    return {
      category,
      postCount,
      categoryName: convertCategoryToDefault(category)
    }
  });

  return categories;
};

// slug 와 tag 로 포스트 조회
export const getPostByCategoryAndSlug = async (category: string, slug: string) => {
  const postPath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const post = await parsePost(postPath);
  return post;
};

// 스네이크 케이스로 작성된 카테고리명을 기본 문자로 변환
export const convertCategoryToDefault = (category?: string | null) => category ? category.split('_').map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(' ') : "All";

