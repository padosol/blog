import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
  slug: string;
  categoryPath?: string;
};

export type Category = {
  name: string;
  path: string;
  count: number;
};

/**
 * 텍스트 내용을 기반으로 읽는 시간을 계산합니다.
 * @param content 포스트 내용
 * @param wordsPerMinute 분당 읽는 단어 수 (한국어는 분당 약 500자)
 * @returns 읽는 시간 (분 단위)
 */
export function calculateReadingTime(content: string, wordsPerMinute = 500): string {
  // 마크다운 문법 제거 (대략적인 방법)
  const cleanText = content
    .replace(/#+\s+/g, '') // 제목 태그 제거
    .replace(/!\[.*?\]\(.*?\)/g, '') // 이미지 태그 제거
    .replace(/\[.*?\]\(.*?\)/g, '') // 링크 태그 제거
    .replace(/`{1,3}.*?`{1,3}/g, '') // 코드 블록 제거
    .replace(/\*\*.*?\*\*/g, '') // 볼드체 제거
    .replace(/\*.*?\*/g, '') // 이탤릭체 제거
    .replace(/~~.*?~~/g, '') // 취소선 제거
    .replace(/>\s+.*/g, ''); // 인용구 제거

  // 한국어 텍스트의 경우 공백을 제외한 글자 수로 계산
  const charCount = cleanText.replace(/\s+/g, '').length;
  
  // 읽는 시간 계산 (분 단위)
  const minutes = Math.ceil(charCount / wordsPerMinute);
  
  // 최소 1분으로 설정
  return `${Math.max(1, minutes)}분`;
}

export function getAllCategories(): Category[] {
  const categoryFolders = fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  const categories: Category[] = categoryFolders.map(folder => {
    const categoryPath = path.join(postsDirectory, folder);
    const postCount = fs.readdirSync(categoryPath).filter(file => file.endsWith('.md')).length;
    
    return {
      name: folder,
      path: folder,
      count: postCount
    };
  });
  
  return categories;
}

export function getPostSlugsByCategory(category: string) {
  const categoryPath = path.join(postsDirectory, category);
  if (!fs.existsSync(categoryPath)) return [];
  
  return fs.readdirSync(categoryPath).filter(file => file.endsWith('.md'));
}

export function getPostSlugs() {
  const categories = getAllCategories();
  let allSlugs: { slug: string, category: string }[] = [];
  
  categories.forEach(category => {
    const slugs = getPostSlugsByCategory(category.path);
    const categorySlugPairs = slugs.map(slug => ({
      slug,
      category: category.path
    }));
    
    allSlugs = [...allSlugs, ...categorySlugPairs];
  });
  
  return allSlugs;
}

export function getPostBySlugAndCategory(slug: string, category: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, category, `${slug}`);
  
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // 읽는 시간 동적 계산
  const readTime = data.readTime || calculateReadingTime(content);
  
  return {
    slug: realSlug,
    metadata: { 
      ...data, 
      categoryPath: category,
      readTime
    } as PostMetadata,
    content,
  };
}

export function getPostBySlug(slug: string) {
  const categories = getAllCategories();
  
  for (const category of categories) {
    const slugs = getPostSlugsByCategory(category.path);
    const matchingSlug = slugs.find(s => s.includes(slug));
    
    if (matchingSlug) {
      return getPostBySlugAndCategory(matchingSlug, category.path);
    }
  }
  
  return null;
}

export function getAllPosts() {
  const slugPairs = getPostSlugs();
  const posts = slugPairs
    .map(({ slug, category }) => getPostBySlugAndCategory(slug, category))
    .filter(post => post !== null)
    .sort((post1, post2) => (post1!.metadata.date > post2!.metadata.date ? -1 : 1));
  
  return posts as ReturnType<typeof getPostBySlugAndCategory>[];
}

export function getPostsByCategory(category: string) {
  const slugs = getPostSlugsByCategory(category);
  const posts = slugs
    .map(slug => getPostBySlugAndCategory(slug, category))
    .filter(post => post !== null)
    .sort((post1, post2) => (post1!.metadata.date > post2!.metadata.date ? -1 : 1));
  
  return posts as ReturnType<typeof getPostBySlugAndCategory>[];
} 