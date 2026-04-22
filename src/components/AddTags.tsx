import FormTag from "./FormTag";

export default function AddTags() {
  return (
    <div className="bg-card-background p-4 rounded-xl w-full overflow-hidden border-l-4 border-l-tertiary">
      <p className="font-bold text-tertiary-text flex items-center justify-start gap-4">
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
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6h.008v.008H6V6Z"
          />
        </svg>
        Classifications
      </p>
      <div className="flex items-start justify-start flex-wrap gap-3 mt-4">
        <FormTag />
        <FormTag />
      </div>
    </div>
  );
}
