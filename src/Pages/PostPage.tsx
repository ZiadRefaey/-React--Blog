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
    <Main className="px-6 pb-24 lg:px-0 lg:pb-10">
      <h1 className="text-4xl font-bold text-mute max-w-xl leading-tight md:text-5xl md:leading-16">
        {post.title}
      </h1>
      <div>
        <div className="w-full h-64 object-cover mt-8 rounded-xl overflow-hidden md:h-100 md:mt-10">
          <img
            src={post.image_url}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <p className="text-mute-secondary mt-8 md:mt-10">{post.content}</p>
      <div className="w-full relative bg-card-background rounded-xl p-5 my-8 md:p-6 md:pr-18 md:my-10">
        <img src="/Quote.svg" className="absolute top-5 right-5 w-8 md:top-6 md:right-6 md:w-auto" />
        <p className="text-mute-secondary text-xl font-bold pr-10 md:text-2xl md:pr-0">
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
