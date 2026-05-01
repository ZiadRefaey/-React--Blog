import Main from "../components/Main";
import AddImage from "../components/AddImage";
import ArchiveControl from "../components/ArchiveControl";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import useUploadImg from "../hooks/useUploadImg";
import useCreatePost from "../hooks/useCreatePost";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { UserAuth } from "../providers/AuthContext";
import usePost from "../hooks/usePost";
import useEditPost from "../hooks/useEditPost";
export interface IPostInputs {
  title: string;
  content: string;
  image: FileList;
}
export default function PostFormPage() {
  const navigate = useNavigate();
  const { session } = UserAuth();
  const { id } = useParams();
  const mode = id === "create-post" ? "ADD" : "EDIT";
  const enabled = mode === "EDIT" ? true : false;
  const { data: postData } = usePost(id, enabled);

  const {
    mutateAsync: uploadImage,
    isPending: isUploading,
    error: uploadError,
  } = useUploadImg();

  const {
    mutate: createPost,
    isPending: isCreating,
    error: createError,
  } = useCreatePost();
  const {
    mutateAsync: editPost,
    isPending: isEditing,
    error: editError,
  } = useEditPost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPostInputs>({
    defaultValues: { content: "", title: "" },
  });

  useEffect(() => {
    if (mode === "EDIT" && postData) {
      reset({
        content: postData.content,
        title: postData.title,
      });
    }
  }, [mode, postData, reset]);

  const onSubmit: SubmitHandler<IPostInputs> = async (data) => {
    const image = data.image?.[0];
    const imageUrl =
      mode === "EDIT" && !image
        ? postData?.image_url
        : (await uploadImage(image)).publicUrl;

    if (mode === "EDIT" && id) {
      await editPost({
        id,
        content: data.content,
        image_url: imageUrl,
        title: data.title,
        user_id: session?.user.id,
      });
      toast.success("Post Edited Successfully");
      navigate("/");
      return;
    }

    createPost({
      content: data.content,
      image_url: imageUrl,
      title: data.title,
      user_id: session?.user.id,
    });
    toast.success("Post Created Successfully");
    navigate("/");
  };

  return (
    <Main className="px-6 pb-24 lg:px-0 lg:pb-10">
      <form
        className="grid grid-cols-1 gap-10 items-start lg:grid-cols-[3fr_1fr]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full lg:col-span-2">
          <input
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters",
              },
            })}
            type="text"
            className="w-full text-4xl outline-none placeholder:text-slate-600 font-bold mb-4 md:text-5xl"
            placeholder="Post Title..."
          />
          {errors.title && (
            <p className="text-red-400">{errors.title.message}</p>
          )}
        </div>
        <div className="flex items-start justify-start flex-col">
          <div className="w-full">
            <AddImage
              register={register}
              name="image"
              previewImageUrl={
                mode === "EDIT" ? postData?.image_url : undefined
              }
              validation={{
                required: mode === "ADD" ? "Image is required" : false,
              }}
            />
            {errors.image && (
              <p className="text-red-400">{errors.image.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <textarea
              {...register("content", {
                required: "Content is required",
                minLength: {
                  value: 20,
                  message: "Must be at least 20 characters",
                },
              })}
              className="w-full bg-card-background p-4 outline-none rounded-xl mt-4 min-h-60 placeholder:text-slate-600"
              placeholder="Add your description"
            ></textarea>
            {errors.content && (
              <p className="text-sm text-red-400">{errors.content.message}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="w-full">
            <ArchiveControl
              mode={mode}
              isUploading={isUploading}
              isCreating={isCreating || isEditing}
            />
            {(uploadError || createError || editError) && (
              <p className="text-red-400">
                {uploadError?.message ||
                  createError?.message ||
                  editError?.message}
              </p>
            )}
          </div>
          د{" "}
        </div>
      </form>
    </Main>
  );
}
