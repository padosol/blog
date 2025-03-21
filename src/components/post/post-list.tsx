import { Post } from "@/config/types";
import Link from "next/link";

export default function PostList({posts}: {posts: Post[]}) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No posts available</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">Posts</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="group">
            <Link 
              href={post.url} 
              className="block border rounded-lg p-5 hover:border-primary transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                {post.desc && (
                  <p className="text-muted-foreground">{post.desc}</p>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  {post.dateString && <time dateTime={post.dateString}>{post.dateString}</time>}
                  {post.category && (
                    <span className="bg-muted px-2 py-1 rounded-md">{post.category}</span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
