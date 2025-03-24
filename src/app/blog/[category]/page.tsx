import PostListPage from "@/components/post/post-list-page";

export default async function BlogMainPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <PostListPage category={category}/>
  );
}

