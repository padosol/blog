import { MdxImage } from './mdxImage';
import { MDXComponents } from 'mdx/types';
import { Pre } from './pre';
export const MdxComponents: MDXComponents = {
  img: MdxImage,
  pre: (props) => <Pre {...props} />,
};