import PostListPage from "@/components/post/post-list-page";
import { getCategories } from "@/lib/mdx";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.category,
  }));
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

