import { getPostByCategoryAndSlug } from "@/lib/mdx";

import PostContent from "@/components/post/post-content";

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

