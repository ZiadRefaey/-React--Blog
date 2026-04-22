import Main from "../components/Main";
import AddImage from "../components/AddImage";
import AddTags from "../components/AddTags";
import ArchiveControl from "../components/ArchiveControl";

export default function CreatePostPage() {
  return (
    <Main className=" pb-10 ">
      <form className="grid grid-cols-[3fr_1fr] gap-10 items-start">
        <input
          type="text"
          className="col-span-2 w-full text-5xl outline-none placeholder:text-slate-600 font-bold mb-4"
          placeholder="Post Title..."
        />
        <div className="flex items-start justify-start flex-col">
          <AddImage />
          <textarea
            className="w-full bg-card-background p-4 outline-none rounded-xl mt-4 min-h-60 placeholder:text-slate-600"
            placeholder="Add your description"
          ></textarea>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <ArchiveControl />
          <AddTags />
        </div>
      </form>
    </Main>
  );
}
