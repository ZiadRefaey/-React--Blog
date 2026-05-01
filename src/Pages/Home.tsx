import Main from "../components/Main";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const { data: posts, isPending, error, isError } = usePosts();
  if (isPending) {
    return <Main className="px-6 pb-24 lg:px-0 lg:pb-10">Loading...</Main>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (posts.length === 0) {
    return (
      <Main className="px-6 pb-24 lg:px-0 lg:pb-10">
        <p className="rounded-xl bg-card-background p-4 text-center text-mute-secondary">
          No blog posts yet. be the first to post a blog
        </p>
      </Main>
    );
  }
  return (
    <Main className="w-full pb-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          title={post.title}
          imageUrl={post.image_url}
          id={post.id}
          createdAt={post.created_at}
          userId={post.profiles.id}
        />
      ))}
    </Main>
  );
}
