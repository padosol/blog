import CategoryList from "@/components/category/category-list";
import PostList from "@/components/post/post-list";
import { Post } from "@/config/types";
import { getCategories, getPostList } from "@/lib/mdx";
import { CategoryToggle } from "./post-list-page.client";
export default async function PostListPage({
  category
}: {
  category?: string | ""
}) {
  const posts: Post[] = await getPostList(category);
  const categories = await getCategories();

  return (
    <div className="relative">
      {/* Desktop Category List - Absolutely Fixed */}
      <div className="hidden md:block fixed top-30 left-auto w-[200px]">
        <CategoryList categories={categories} />
      </div>

      {/* Posts Content with Margin */}
      <div className="md:ml-[230px] px-4">
        <div className="sticky z-10 flex items-center gap-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-5">
          <div className="md:hidden pt-4">
            <CategoryToggle categories={categories} />
          </div>
        </div>
        <PostList posts={posts}/>
      </div>
    </div>
  );
}
