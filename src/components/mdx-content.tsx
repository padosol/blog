"use client";

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ReactNode } from 'react';
import type { 
  HTMLAttributes, 
  DetailedHTMLProps, 
  AnchorHTMLAttributes
} from 'react';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

// 각 HTML 요소에 맞는 타입 정의
type H1Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type H2Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type H3Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type PProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
type ULProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type OLProps = DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>;
type LIProps = DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>;
type AProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  className?: string;
  children: ReactNode;
};

const components = {
  h1: (props: H1Props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: H2Props) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: H3Props) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
  p: (props: PProps) => <p className="my-4" {...props} />,
  ul: (props: ULProps) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props: OLProps) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props: LIProps) => <li className="my-1" {...props} />,
  a: (props: AProps) => (
    <a className="text-primary underline hover:text-primary/80" {...props} />
  ),
  code: ({ className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={vscDarkPlus}
        PreTag="div"
        className="rounded-md my-4"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },
};

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
} 