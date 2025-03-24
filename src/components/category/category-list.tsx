"use client"

import * as React from "react"
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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

  const isRootBlogPath = pathname === "/blog" || pathname === "/blog/";
  
  const isCategoryActive = (category: string) => {
    return pathname.startsWith(`/blog/${category}`);
  };

  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <div className="">
          <Link 
            href="/blog" 
            className={cn(
              "block transition-colors py-1 px-2 rounded",
              isRootBlogPath 
                ? "text-primary font-medium bg-slate-400" 
                : "hover:text-primary hover:bg-slate-400"
            )}
          >
            All <span className="text-muted-foreground">({totalCount})</span>
          </Link>
        </div>
        <Separator className="" />
        {categories.map((category) => (
          <React.Fragment key={category.category}>
            <div>
              <Link 
                href={`/blog/${category.category}`} 
                className={cn(
                  "block transition-colors py-1 px-2 rounded",
                  isCategoryActive(category.category) 
                    ? "text-primary font-medium bg-slate-400" 
                    : "hover:text-primary hover:bg-slate-400"
                )}
              >
                {category.categoryName} <span className="text-muted-foreground">({category.postCount})</span>
              </Link>
            </div>
            <Separator className="" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}