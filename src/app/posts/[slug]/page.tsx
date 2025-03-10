import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import { MarkdownContent } from "@/components/markdown-content";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
      description: '요청하신 포스트가 존재하지 않습니다.',
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    
    if (!post) {
      notFound();
    }

    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    });

    return (
      <div className="container py-8 md:py-12 max-w-5xl mx-auto">
        <div className="mx-auto max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/posts" className="flex items-center">
              ← 글 목록으로 돌아가기
            </Link>
          </Button>

          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>{post.metadata.category}</span>
              <span>•</span>
              <span>{post.metadata.date}</span>
              <span>•</span>
              <span>읽는 시간: {post.metadata.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {post.metadata.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.metadata.description}</p>
          </div>

          <Separator className="my-8" />

          <MarkdownContent source={mdxSource} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }
} 