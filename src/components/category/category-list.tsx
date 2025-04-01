"use client"

import * as React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CategoryDetail } from "@/config/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function CategoryList({
  categories,
}: {
  categories: CategoryDetail[];
}) {
  const pathname = usePathname();
  const totalCount = categories.reduce((acc, category) => acc + category.postCount, 0);

  const isRootBlogPath = pathname === "/blog" || pathname === "/blog/";
  
  const isCategoryActive = (category: string) => {
    return pathname.startsWith(`/blog/${category}`);
  };

  return (
    <div className="rounded-md border border-border p-2">
      <h3 className="px-3 py-2 text-lg font-semibold text-foreground">카테고리</h3>
      <ScrollArea className="h-[300px]">
        <div className="space-y-1">
          <Link
            href="/blog"
            className={cn(
              "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isRootBlogPath && "bg-accent text-accent-foreground"
            )}
          >
            All <span className="ml-auto text-muted-foreground">({totalCount})</span>
          </Link>
          
          {categories.map((category) => (
            <Link
              key={category.category}
              href={`/blog/${category.category}`}
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                isCategoryActive(category.category) && "bg-accent text-accent-foreground"
              )}
            >
              {category.categoryName}
              <span className="ml-auto text-muted-foreground">({category.postCount})</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}