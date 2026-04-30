import Main from "../components/Main";
import AddImage from "../components/AddImage";
import AddTags from "../components/AddTags";
import ArchiveControl from "../components/ArchiveControl";
import { useForm, type SubmitHandler } from "react-hook-form";
import useUploadImg from "../hooks/useUploadImg";
import useCreatePost from "../hooks/useCreatePost";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
export interface IPostInputs {
  title: string;
  content: string;
  image: FileList;
}
export default function CreatePostPage() {
  const navigate = useNavigate();
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostInputs>();
  const onSubmit: SubmitHandler<IPostInputs> = async (data) => {
    const image = data.image[0];
    const uploadedImgURL = await uploadImage(image);
    createPost({
      content: data.content,
      image_url: uploadedImgURL.publicUrl,
      title: data.title,
    });
    toast.success("Post Created Successfully");
    navigate("/");
  };

  return (
    <Main className=" pb-10 ">
      <form
        className="grid grid-cols-[3fr_1fr] gap-10 items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" col-span-2 w-full">
          <input
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters",
              },
            })}
            type="text"
            className="col-span-2 w-full text-5xl outline-none placeholder:text-slate-600 font-bold mb-4"
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
              validation={{
                required: "Image is required",
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
            <ArchiveControl isUploading={isUploading} isCreating={isCreating} />
            {(uploadError || createError) && (
              <p className="text-red-400">
                {uploadError?.message || createError?.message}
              </p>
            )}
          </div>
          <AddTags />
        </div>
      </form>
    </Main>
  );
}
