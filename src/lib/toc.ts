import { HeadingItem } from "@/config/types";

export const parseToc = (content: string): HeadingItem[] => { 
  const regex = /^(##|###) (.*$)/gim;
  const headingList = content.match(regex);

  console.log(headingList)

  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', '').replace('#', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
      indent: (heading.match(/#/g)?.length || 2) - 2,
    })) || []
  );
};