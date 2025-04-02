"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CategoryDetail } from "@/config/types"
import CategoryList from "@/components/category/category-list"

export function CategoryToggle({ categories }: { categories: CategoryDetail[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 border cursor-pointer rounded-md">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle category menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[340px] p-0">
        <CategoryList categories={categories} />
      </SheetContent>
    </Sheet>
  )
} 