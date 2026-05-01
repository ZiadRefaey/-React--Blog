import useComments from "../hooks/useComments";
import { UserAuth } from "../providers/AuthContext";
import Comment from "./Comment";
import AddComment from "./AddComment";

export default function CommentsSection({
  postId,
}: {
  postId: string | undefined;
}) {
  const { session } = UserAuth();
  const userId = session?.user.id;
  const { data: comments, isPending, error } = useComments(Number(postId));
  if (isPending) return <p>Loading...</p>;
  if (error)
    return (
      <p className="text-red-500">Something went wrong: {error.message}</p>
    );
  return (
    <>
      <div className="flex items-center justify-start w-full mt-10">
        <p className="text-xl text-mute font-bold mb-6">
          The Discussion{" "}
          <span className="text-primary">({comments?.length})</span>
        </p>
      </div>
      <div className="flex items-center justify-center w-full gap-4 flex-col">
        {comments?.length === 0 ? (
          <p className="w-full rounded-xl bg-card-background p-4 text-center text-mute-secondary">
            No comments on this post. Be the first to comment
          </p>
        ) : (
          comments?.map((comment) => (
            <Comment
              content={comment.content}
              date={comment.created_at}
              userName={comment.user_id.full_name}
              key={comment.id}
            />
          ))
        )}
      </div>
      <AddComment postId={postId} userId={userId} />
    </>
  );
}
