import { Post } from "@/config/types";
import { convertCategoryToDefault } from "@/lib/mdx";
import { CalendarDays, Clock3 } from "lucide-react";
import Link from "next/link";

interface PostHeaderProps {
  post: Post
}

export default function PostHeader({post}: PostHeaderProps) {
  return (
    <header className='mt-14 text-center'>
      <h1 className='mb-8 text-3xl'>{post.title}</h1>
      <div className='flex justify-between items-center'>
        <div className='text-base flex items-center hover:underline cursor-pointer transition delay-100'>
          <Link
            href={`/blog/${post.category}`}
            className='ml-2 font-semibold no-underline'
          >
            {convertCategoryToDefault(post.category)}
          </Link>
        </div>
        <div className='flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
          <div className='flex items-center gap-1'>
            <CalendarDays className='w-3.5' />
            <span>{post.dateString}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock3 className='w-3.5' />
            <span>{post.readingMinutes}분</span>
          </div>
        </div>
      </div>
      <hr className='mt-5' />
    </header>
  )
}

