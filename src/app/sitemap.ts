import { getPostList } from "@/lib/mdx";
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 블로그 목록 가져오기
  const posts = await getPostList();
  const sitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://padosol.com/blog/${post.category}/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
  }));  

  return sitemap;
}