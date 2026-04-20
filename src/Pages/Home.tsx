import Main from "../components/Main";
import Post from "../components/Post";

export default function Home() {
  return (
    <Main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <Post />
      <Post />
      <Post />
      <Post />
    </Main>
  );
}
