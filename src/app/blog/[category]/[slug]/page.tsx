import PostContent from "@/components/post/post-content";
import TableOfContent from "@/components/toc/tableOfContentSidebar";
import { getPostByCategoryAndSlug, getPostPaths, parsePostAbstract } from "@/lib/mdx";
import { parseToc } from "@/lib/toc";
import { Metadata } from "next";

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

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostByCategoryAndSlug(category, slug);
  const title = `${post.title} | Padosol`;

  return {
    title,
  };
}

export default async function PostPage({ 
  params 
}: PostPageProps) {
  const { category, slug } = await params;
  const post = await getPostByCategoryAndSlug(category, slug);
  const toc = parseToc(post.content);

  return (
    <div className="relative">
      <PostContent post={post} />
      <TableOfContent toc={toc} />
    </div>
  );
} 

