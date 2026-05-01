import Main from "../components/Main";
import { useParams } from "react-router";
import usePost from "../hooks/usePost";
import CommentsSection from "../components/CommentsSection";

export default function PostPage() {
  const params = useParams();
  const { data: post, isPending, error } = usePost(params.id);

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
      <CommentsSection postId={params.id} />
    </Main>
  );
}
