import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  onClose: () => void;
  onComplete: () => void;
  error: Error | null;
  isLoading: boolean;
}

export default function Modal({
  isOpen,
  title,
  content,
  onClose,
  onComplete,
  error,
  isLoading,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-xl bg-card-background p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-mute">{title}</h2>
        <p className="mt-3 text-sm text-mute-secondary">{content}</p>
        {error && <p className="text-red-400">{error.message}</p>}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            className="rounded-lg bg-background px-4 py-2 font-semibold text-mute transition hover:text-primary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-background transition hover:bg-secondary"
            onClick={onComplete}
          >
            {isLoading ? "Loading..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
