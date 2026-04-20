import Avatar from "./Avatar";
import MoonIcon from "./MoonIcon";
import Navbar from "./Navbar";
import Logo from "/logo.svg";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 xl:px-0 grid grid-cols-3 max-w-7xl mx-auto">
      <img src={Logo} alt="logo" />
      <Navbar />
      <div className="flex items-center justify-center justify-self-end gap-3">
        <MoonIcon className="size-6 text-mute" />
        <Avatar />
      </div>
    </header>
  );
}
