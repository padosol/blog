import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function CategoryList({
  categories,
}: {
  categories: { category: string; postCount: number }[];
}) {
  const totalCount = categories.reduce((acc, category) => acc + category.postCount, 0);

  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <ScrollArea className="h-[240px]">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/blog" 
              className="block hover:text-primary transition-colors"
            >
              All <span className="text-muted-foreground">({totalCount})</span>
            </Link>
          </li> 
          {categories.map((category) => (
            <li key={category.category}>
              <Link 
                href={`/blog/${category.category}`} 
                className="block hover:text-primary transition-colors"
              >
                {category.category} <span className="text-muted-foreground">({category.postCount})</span>
              </Link>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

