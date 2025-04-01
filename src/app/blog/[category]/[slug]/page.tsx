import { getPostByCategoryAndSlug } from "@/lib/mdx";
import type { Metadata } from "next";
import { getPostPaths, parsePostAbstract } from "@/lib/mdx";

import PostContent from "@/components/post/post-content";



export async function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((item) => ({ category: item.category, slug: item.slug }));
  return paramList;
}

interface PostPageProps {
  params: Promise<{ 
    category: string, 
    slug: string 
  }>;
}

export default async function PostPage({ 
  params 
}: PostPageProps) {
  const { category, slug } = await params;
  const post = await getPostByCategoryAndSlug(category, slug);

  return (
    <PostContent post={post} />
  );
} 

