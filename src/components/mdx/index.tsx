import { Callout } from './Callout';
import { MdxImage } from './mdxImage';
import { ExternalLink } from './link';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: ExternalLink,
  img: MdxImage,
  blockquote: Callout,
  Callout,
};