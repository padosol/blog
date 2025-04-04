import { MDXComponents } from 'mdx/types';
import { MdxImage } from './mdxImage';
import { Pre } from './pre';
export const MdxComponents: MDXComponents = {
  img: MdxImage,
  pre: (props) => <Pre {...props} />,
};