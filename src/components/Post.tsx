import { Link } from "react-router";
import thumbnail from "/PostThumbnail.png";
export default function Post() {
  return (
    <div className="rounded-xl  grid-[1fr_1fr] object-cover overflow-hidden bg-card-background max-h-[600px]">
      <div className="w-full h-[60%] object-cover relative">
        <span className="px-4 py-1 text-xs text-background font-bold uppercase bg-secondary absolute top-4 left-4 rounded-lg">
          Ionia
        </span>
        <img
          src={thumbnail}
          alt="post thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full p-6 flex items-start justify-center gap-4 flex-col ">
        <p className="text-mute font-bold text-xl">
          The Unbreakable Guard: Hwei Strategy
        </p>
        <p className="text-mute text-sm ">
          Master the complexity of the Visionary with our comprehensive guide to
          his 10 unique abilities and combo
        </p>
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
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-xs">Posted 5 mminutes ago</p>
          </div>
          <Link
            to={"./posts/1"}
            className="text-secondary hover:text-primary font-bold cursor-pointer transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
