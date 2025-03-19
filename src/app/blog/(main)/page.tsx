import { getCategories, getPostList } from "@/lib/mdx";
import PostList from "@/components/post/post-list";
import { Post } from "@/config/types";

export default async function BlogMainPage() {
  const posts: Post[] = await getPostList();
  const categories = await getCategories();

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <PostList posts={posts} />
    </div>
  );
}
