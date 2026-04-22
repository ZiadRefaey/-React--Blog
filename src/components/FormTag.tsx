export default function FormTag() {
  return (
    <span className="rounded-2xl bg-primary/20 border text-primary border-primary/40 flex items-center justify-center py-1 px-3 gap-2">
      Ionia
      <button className="text-primary/50 hover:text-primary transition cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 mt-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </span>
  );
}
