import { Post } from "@/config/types";
import Link from "next/link";

export default function PostList({posts}: {posts: Post[]}) {
  return (
    <ul>
      {posts.map((post) => (
        <Link href={post.url} key={post.slug}>
          <li>{post.title}</li>
        </Link>
      ))}
    </ul>
  );
}
