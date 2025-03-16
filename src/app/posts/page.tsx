import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { getAllPosts, getAllCategories, getPostsByCategory } from "@/lib/mdx";

export default function PostsPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  
  // 카테고리 이름을 표시용으로 변환
  const categoryDisplayNames: Record<string, string> = {
    aws: 'AWS',
    springBoot: '스프링부트',
    springCloud: "스프링 클라우드",
    k8s: "쿠버네티스",
  };
  
  // 모든 카테고리 목록에 '전체' 추가
  const allCategories = [
    { name: '전체', path: 'all', count: allPosts.length },
    ...categories
  ];

  return (
    <div className="container py-8 md:py-12 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">블로그 글 목록</h1>
        <p className="text-muted-foreground">
          개발과 디자인에 관한 모든 글을 확인하세요.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex justify-center mb-4">
          <TabsList>
            {allCategories.map((category) => (
              <TabsTrigger key={category.path} value={category.path}>
                {categoryDisplayNames[category.path] || category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {/* 전체 카테고리 탭 */}
        <TabsContent value="all">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {allPosts.map((post) => (
              <Card key={post!.slug} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      {post!.metadata.category}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post!.metadata.date}
                    </p>
                  </div>
                  <CardTitle className="mt-2 line-clamp-2">
                    {post!.metadata.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post!.metadata.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex justify-between">
                  <p className="text-sm text-muted-foreground">
                    읽는 시간: {post!.metadata.readTime}
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/posts/${post!.metadata.slug}`}>자세히 보기</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* 각 카테고리별 탭 */}
        {categories.map((category) => {
          const categoryPosts = getPostsByCategory(category.path);
          
          return (
            <TabsContent key={category.path} value={category.path}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                {categoryPosts.map((post) => (
                  <Card key={post!.slug} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          {post!.metadata.category}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {post!.metadata.date}
                        </p>
                      </div>
                      <CardTitle className="mt-2 line-clamp-2">
                        {post!.metadata.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post!.metadata.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto flex justify-between">
                      <p className="text-sm text-muted-foreground">
                        읽는 시간: {post!.metadata.readTime}
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/posts/${post!.metadata.slug}`}>자세히 보기</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
} 