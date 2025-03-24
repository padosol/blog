import { Post } from "@/config/types";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { convertCategoryToDefault } from "@/lib/mdx";

export default function PostList({posts, category}: {posts: Post[], category?: string | null}) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No posts available</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-6">{convertCategoryToDefault(category)}</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={post.url} 
              className="block transition-transform hover:scale-[1.01] focus:scale-[1.01]"
            >
              <Card className="hover:border-primary transition-colors overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 flex flex-col">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      {post.desc && (
                        <CardDescription>{post.desc}</CardDescription>
                      )}
                    </CardHeader>
                    <CardFooter className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                      {post.category && (
                        <span className="bg-muted px-2 py-1 rounded-md">{convertCategoryToDefault(post.category)}</span>
                      )}
                      {post.dateString && <time dateTime={post.dateString}>{post.dateString}</time>}
                    </CardFooter>
                  </div>
                  <div className="w-full md:w-1/4 h-[140px] md:h-auto relative bg-muted flex items-center justify-center">
                    {post.thumbnail ? (
                      <Image 
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover p-2"
                      />
                    ) : (
                      <div className="text-muted-foreground text-sm flex items-center justify-center h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

