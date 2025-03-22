import PostHeader from "@/components/post/post-header";
import { getPostByCategoryAndSlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { MdxComponents } from "@/components/mdx";
import Giscus from "@/components/git/Giscus";

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
    <div className='prose dark:prose-invert max-w-full'>
      <PostHeader post={post} />
      <MDXRemote 
        source={post.content} 
        components={MdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm, 
              remarkA11yEmoji, 
              remarkBreaks
            ],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {theme: {dark: 'github-dark-dimmed', light: 'github-light'}},
              ],
              rehypeSlug,
            ],
          }
        }}
      />

      <Giscus />
    </div>

  );
} 

