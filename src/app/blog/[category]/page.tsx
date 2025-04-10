import PostListPage from "@/components/post/post-list-page";
import { convertCategoryToDefault, getCategories } from "@/lib/mdx";
import { Metadata } from "next";

type Props = {
  params: { category: string };
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.category,
  }));
}

export async function generateMetadata({ params: { category } }: Props): Promise<Metadata> {
  const cg = convertCategoryToDefault(category);
  const title = `${cg} | Padosol`;

  return {
    title,
  };
}

export default async function BlogMainPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <PostListPage category={category}/>
  );
}

