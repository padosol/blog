import { Callout } from './Callout';
import { Image } from './image';
import { ExternalLink } from './link';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
  blockquote: Callout,
  Callout,
};