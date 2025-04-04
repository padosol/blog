import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/config/types";
import { convertCategoryToDefault } from "@/lib/mdx";
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
    <div className="">
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={post.url} 
              className="block transition-transform hover:scale-[1.01] focus:scale-[1.01]"
            >
              <Card className="hover:border-primary transition-colors border-border h-auto p-1">
                <div className="flex flex-col h-full">
                  <CardHeader className="flex-none">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-foreground">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-muted-foreground mt-2">{post.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between text-sm">
                    <time dateTime={post.dateString} className="text-muted-foreground">{post.dateString}</time>
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {convertCategoryToDefault(post.category)}
                    </Badge>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

