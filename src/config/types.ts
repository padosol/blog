export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  description: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  category: string;
  content: string;
  readingMinutes: number;
}

export interface CategoryDetail {
  category: string; 
  postCount: number, 
  categoryName: string
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}
