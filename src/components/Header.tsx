import Avatar from "./Avatar";
import MoonIcon from "./MoonIcon";
import Navbar from "./Navbar";
import SunIcon from "./SunIcon";
import Logo from "/logo.svg";

export default function Header({
  handleToggleTheme,
  theme,
}: {
  handleToggleTheme: () => void;
  theme: string | null;
}) {
  return (
    <header className="w-full py-4 px-6 xl:px-0 grid grid-cols-3 max-w-7xl mx-auto">
      <img src={Logo} alt="logo" />
      <Navbar />
      <div className="flex items-center justify-center justify-self-end gap-3">
        <button className="cursor-pointer" onClick={handleToggleTheme}>
          {theme === "dark" ? (
            <MoonIcon className="size-6 text-mute" />
          ) : (
            <SunIcon />
          )}
        </button>
        <Avatar />
      </div>
    </header>
  );
}
