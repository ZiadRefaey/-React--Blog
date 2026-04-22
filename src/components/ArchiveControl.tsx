export default function ArchiveControl() {
  return (
    <div className="bg-card-background p-4 rounded-xl w-full">
      <p className="flex items-center justify-start gap-4 text-tertiary-text font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
        Archive Control
      </p>
      <button className="p-4 mt-4 bg-primary font-semibold text-background flex items-center justify-center gap-2 w-full rounded-xl cursor-pointer hover:bg-secondary transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>
        Release To Public
      </button>
      <div className="bg-background h-px w-full rounded-xl m-3"></div>
      <div className="grid grid-cols-2 font-semibold">
        <p>Visibility</p>
        <p className="justify-self-end text-primary mb-2">Public Archive</p>
        <p>Publish Date</p>
        <p className="justify-self-end">Immediately</p>
      </div>
    </div>
  );
}
