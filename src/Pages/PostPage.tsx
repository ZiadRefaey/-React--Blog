import Main from "../components/Main";
import Comment from "../components/Comment";
import AddComment from "../components/AddComment";
import { useParams } from "react-router";
import usePost from "../hooks/usePost";

export default function PostPage() {
  const params = useParams();
  const { data: post, isPending, error } = usePost(params.id);
  console.log(post);
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <Main className="pb-10">
      <h1 className="text-5xl font-bold text-mute max-w-xl leading-16">
        {post.title}
      </h1>
      <div>
        <div className="w-full h-100 object-cover mt-10 rounded-xl overflow-hidden">
          <img
            src={post.image_url}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <p className="text-mute-secondary mt-10">{post.content}</p>
      <div className="w-full relative  bg-card-background rounded-xl p-6 pr-18 my-10">
        <img src="/Quote.svg" className="absolute top-6 right-6" />
        <p className="text-mute-secondary text-2xl font-bold">
          "His power is not in what he possesses, but in how he discards what he
          no longer needs. It is the ultimate expression of predatory
          evolution."
        </p>
        <p className="text-tertiary-text font-bold mt-4">
          — Lead Designer Insight
        </p>
      </div>
      <div className="flex items-center justify-start w-full">
        <p className="text-xl text-mute font-bold mb-6">
          The Discussion <span className="text-primary">(14)</span>
        </p>
      </div>
      <Comment />
      <AddComment />
    </Main>
  );
}
