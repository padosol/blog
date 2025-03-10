import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <div className="container py-8 md:py-12 max-w-5xl mx-auto">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 text-center">
        <div className="flex max-w-[980px] flex-col items-center mx-auto gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            개발과 디자인에 관한 <br />
            모든 이야기
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            웹 개발, 프로그래밍, UI/UX 디자인에 관한 유용한 정보와 팁을 공유합니다.
          </p>
        </div>
      </section>
      
      <section className="py-8 md:py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">최근 게시물</h2>
          <Link href="/posts" className="text-sm font-medium text-primary hover:underline">
            모든 게시물 보기 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{post.metadata.category}</p>
                  <p className="text-sm text-muted-foreground">{post.metadata.date}</p>
                </div>
                <CardTitle className="mt-2 line-clamp-2">{post.metadata.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.metadata.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex justify-between">
                <p className="text-sm text-muted-foreground">읽는 시간: {post.metadata.readTime}</p>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/posts/${post.metadata.slug}`}>
                    자세히 보기
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
