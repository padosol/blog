import { getCategories, getPostList } from "@/lib/mdx";
import PostList from "@/components/post/post-list";
import { Post } from "@/config/types";
import CategoryList from "@/components/category/category-list";

export default async function BlogMainPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const posts: Post[] = await getPostList(category);
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-1">
        <CategoryList categories={categories} />
      </div>
      <div className="md:col-span-3">
        <PostList posts={posts} category={category} />
      </div>
    </div>
  );
}
