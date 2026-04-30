import Main from "../components/Main";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const { data: posts, isPending, error, isError } = usePosts();
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(posts);
  return (
    <Main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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
