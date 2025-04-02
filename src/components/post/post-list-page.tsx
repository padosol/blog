import { getCategories, getPostList, convertCategoryToDefault } from "@/lib/mdx";
import PostList from "@/components/post/post-list";
import { Post } from "@/config/types";
import CategoryList from "@/components/category/category-list";
import { CategoryToggle } from "./post-list-page.client";

export default async function PostListPage({
  category
}: {
  category?: string | ""
}) {
  const posts: Post[] = await getPostList(category);
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Desktop Category List */}
      <div className="hidden md:block md:col-span-1">
        <div className="sticky top-4">
          <CategoryList categories={categories} />
        </div>
      </div>
      <div className="md:col-span-3">
        <div className="sticky top-4 z-10 flex items-center gap-2 mb-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="md:hidden">
            <CategoryToggle categories={categories} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {convertCategoryToDefault(category)}
          </h2>
        </div>
        <PostList posts={posts}/>
      </div>
    </div>
  );
}
