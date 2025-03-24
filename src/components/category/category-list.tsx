"use client"

import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CategoryDetail } from "@/config/types";

export default function CategoryList({
  categories,
}: {
  categories: CategoryDetail[];
}) {
  const pathname = usePathname();
  const totalCount = categories.reduce((acc, category) => acc + category.postCount, 0);

  // Check if the current path is the root blog page
  const isRootBlogPath = pathname === "/blog" || pathname === "/blog/";
  
  // Function to check if a category is active in the current path
  const isCategoryActive = (category: string) => {
    return pathname.startsWith(`/blog/${category}`);
  };

  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <ScrollArea className="h-[240px]">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/blog" 
              className={cn(
                "block transition-colors py-1 px-2 rounded",
                isRootBlogPath 
                  ? "text-primary font-medium bg-gray-300" 
                  : "hover:text-primary hover:bg-gray-300"
              )}
            >
              All <span className="text-muted-foreground">({totalCount})</span>
            </Link>
          </li> 
          {categories.map((category) => (
            <li key={category.category}>
              <Link 
                href={`/blog/${category.category}`} 
                className={cn(
                  "block transition-colors py-1 px-2 rounded",
                  isCategoryActive(category.category) 
                    ? "text-primary font-medium bg-gray-300" 
                    : "hover:text-primary hover:bg-gray-300"
                )}
              >
                {category.categoryName} <span className="text-muted-foreground">({category.postCount})</span>
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

