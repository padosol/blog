import PostHeader from "@/components/post/post-header";
import { MDXRemote } from "next-mdx-remote/rsc";

// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';

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
              remarkGfm,        // github flavored markdown
              remarkA11yEmoji,  // emoji
              remarkBreaks     // 줄바꿈  
            ],
            rehypePlugins: [
              [
                rehypePrettyCode, // 코드 블록 스타일링
                {
                  theme: "github-dark-dimmed"
                },
              ],
              rehypeSlug,       // 제목에 앵커 링크 추가
              rehypeCodeTitles, // 코드 블록에 제목 추가
            ],
          },
        }}
      />
      <hr></hr>
      <Giscus />
    </div>
  )
}