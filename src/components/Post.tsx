import { Link } from "react-router";
import TrashIcon from "./Icons/TrashIcon";
import PencilIcon from "./Icons/PencilIcon";
import { useEffect, useState } from "react";
import { UserAuth } from "../providers/AuthContext";
import { truncateString } from "../utils/utils";
import Modal from "./Modal";
import useDeletePost from "../hooks/useDeletePost";
import toast from "react-hot-toast";
interface IPostData {
  id: string;
  createdAt?: string;
  title: string;
  content: string;
  imageUrl: string;
  userId: string;
}

export default function Post({
  title,
  content,
  imageUrl,
  id,
  createdAt,
  userId,
}: IPostData) {
  const { session } = UserAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [postBelongsToUser, setPostBelongsToUser] = useState(false);
  const currentUserId = session?.user.id;
  useEffect(() => {
    if (currentUserId === userId) {
      setPostBelongsToUser(true);
    }
  }, [userId, currentUserId]);
  const { error, mutate: deletePost, isPending } = useDeletePost();

  return (
    <div className="rounded-xl relative grid-[1fr_1fr] object-cover overflow-hidden bg-card-background h-120">
      {postBelongsToUser && (
        <>
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Delete"
            content={"are you sure you want to delete the post"}
            onComplete={() => {
              deletePost(Number(id));
              toast.success("Post deleted successfully");
            }}
            error={error}
            isLoading={isPending}
          />
          <button
            className="flex items-center justify-center rounded-full  cursor-pointer absolute top-4 right-4 z-100 p-1 transition hover:text-red-500"
            onClick={() => setModalOpen(true)}
          >
            <TrashIcon />
          </button>
          <Link
            to={`/post-form/${id}`}
            className="flex items-center justify-center rounded-full  cursor-pointer absolute top-4 right-14 z-100 p-1 transition hover:text-primary"
          >
            <PencilIcon />
          </Link>
        </>
      )}

      <div className="w-full h-[60%] object-cover relative">
        <span className="px-4 py-1 text-xs text-background font-bold uppercase bg-secondary absolute top-4 left-4 rounded-lg">
          Ionia
        </span>
        <img
          src={imageUrl}
          alt={`${title}'s image`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-6 flex items-start justify-center gap-4 flex-col ">
        <p className="text-mute font-bold text-xl">{title}</p>
        <p className="text-mute text-sm ">{truncateString(content, 15)}</p>
        <div className="w-full h-[0.25px] border border-mute/10 "></div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 text-mute-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            <p className="text-xs">{createdAt}</p>
          </div>
          <Link
            to={`./posts/${id}`}
            className="text-secondary hover:text-primary font-bold cursor-pointer transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
