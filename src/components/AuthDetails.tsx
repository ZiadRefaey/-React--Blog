export default function AuthDetails() {
  return (
    <div className="bg-slate-800 flex flex-col items-start justify-center p-12 gap-4">
      <img src="/logo.svg" />
      <div className="flex items-start justify-start gap-2 flex-col">
        <h1 className="text-5xl font-bold  leading-12">
          Master the
          <span className="text-primary"> Arcane</span>, Rewrite the Lore.
        </h1>
        <p className="text-mute-secondary max-w-95.75">
          Join the definitive repository for Summoners. Access high-end
          strategy, deep lore analysis, and professional-grade champion guides.
        </p>
      </div>
      <div className="w-[60%] rounded-xl overflow-hidden relative">
        <img src="/auth.png" className="w-full h-full object-cover" alt="" />
        <div className="absolute bottom-6 left-6 w-[100%-48px] flex items-start justify-center flex-col">
          <p className="flex items-center justify-center gap-2 text-tertiary-text">
            <div className="w-6 h-px bg-tertiary-text"></div>
            Featured Builds
          </p>
          <p>Hwei: The Visionary's Path</p>
        </div>
      </div>
    </div>
  );
}
