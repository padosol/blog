import PostHeader from "@/components/post/post-header";
import { MDXRemote } from "next-mdx-remote/rsc";

// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { Post } from "@/config/types";

import { MdxComponents } from "@/components/mdx";
import Giscus from "@/components/git/Giscus";

export default function PostContent({
  post
}: {
  post: Post
}) {
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
                {
                  theme: "github-dark-dimmed"
                },
              ],
              rehypeSlug,
            ],
          }
        }}
      />
      <hr></hr>
      <Giscus />
    </div>
  )
}