export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  category: string;
  content: string;
  readingMinutes: number;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}