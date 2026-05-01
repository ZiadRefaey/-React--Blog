import { useForm, type SubmitHandler } from "react-hook-form";
import useCreateComment from "../hooks/useCreateComment";
import toast from "react-hot-toast";

interface Inputs {
  comment: string;
}

export default function AddComment({
  userId,
  postId,
}: {
  userId: string | undefined;
  postId: string | undefined;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { isPending, mutate, error } = useCreateComment();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(
      {
        user_id: userId,
        content: data.comment,
        post_id: Number(postId),
      },
      {
        onSuccess: () => {
          reset();
          toast.success("Comment created successfully");
        },
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-background rounded-xl p-6 flex items-start justify-center flex-col mt-10"
    >
      <p className="text-mute font-bold text-lg">Join the archive descussion</p>
      <textarea
        {...register("comment", {
          required: "Comment is required",
          validate: (value) =>
            typeof value === "string" || "Comment must be a string",
        })}
        className="w-full min-h-30 mt-4 bg-background placeholder:text-slate-600 p-3 rounded-xl text-mute-secondary"
        placeholder="Add your insight..."
      ></textarea>
      {errors.comment && (
        <p className="text-sm text-red-400 mt-2">{errors.comment.message}</p>
      )}
      {error && <p className="text-sm text-red-400 mt-2">{error.message}</p>}
      <button className="bg-primary text-background font-bold px-6 py-2 self-end rounded-xl mt-4 cursor-pointer hover:shadow shadow-primary transition disabled:cursor-not-allowed disabled:opacity-70">
        {isPending ? "Posting comment..." : "Comment"}
      </button>
    </form>
  );
}
