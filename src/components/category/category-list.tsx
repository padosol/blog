"use client"

import * as React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CategoryDetail } from "@/config/types";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider
} from "@/components/ui/sidebar";

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
    <SidebarProvider>
      <div className="rounded-md border border-input p-2">
        <h3 className="px-3 py-2 text-lg font-semibold">Categories</h3>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isRootBlogPath}
            >
              <Link href="/blog">
                All <span className="ml-auto text-muted-foreground">({totalCount})</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          {categories.map((category) => (
            <SidebarMenuItem key={category.category}>
              <SidebarMenuButton
                asChild
                isActive={isCategoryActive(category.category)}
              >
                <Link href={`/blog/${category.category}`}>
                  {category.categoryName}
                  <span className="ml-auto text-muted-foreground">({category.postCount})</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
    </SidebarProvider>
  );
}