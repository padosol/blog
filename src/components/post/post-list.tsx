import { Post } from "@/config/types";
import Link from "next/link";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <h2 className="text-2xl font-bold mb-6 text-foreground">{convertCategoryToDefault(category)}</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={post.url} 
              className="block transition-transform hover:scale-[1.01] focus:scale-[1.01]"
            >
              <Card className="hover:border-primary transition-colors overflow-hidden h-36 border-border">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="flex-1 flex flex-col">
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors text-foreground">{post.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex items-center text-sm text-muted-foreground">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        {convertCategoryToDefault(post.category)}
                      </Badge>
                      <time dateTime={post.dateString} className="ml-2">{post.dateString}</time>
                    </CardFooter>
                  </div>
                  <div className="relative w-full md:w-1/4 h-36">
                    <Image 
                      src={post.thumbnail}
                      alt={post.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={false}
                    />
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

