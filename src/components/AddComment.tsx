export default function AddComment() {
  return (
    <div className="bg-card-background rounded-xl p-6 flex items-start justify-center flex-col mt-10">
      <p className="text-mute font-bold text-lg">Join the archive descussion</p>
      <textarea
        className="w-full min-h-30 mt-4 bg-background placeholder:text-slate-600 p-3 rounded-xl text-mute-secondary"
        placeholder="Add your insight..."
      ></textarea>
      <button className="text-tertiary px-6 py-2 self-end rounded-xl bg-primary mt-4 cursor-pointer hover:bg-secondary transition">
        Comment
      </button>
    </div>
  );
}
