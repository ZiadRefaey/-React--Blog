import { useLocation } from "react-router";
import Avatar from "./Avatar";
import MobileNavbar from "./MobileNavbar";
import MoonIcon from "./MoonIcon";
import Navbar from "./Navbar";
import SunIcon from "./Icons/SunIcon";
import Logo from "/logo.svg";

export default function Header({
  handleToggleTheme,
  theme,
}: {
  handleToggleTheme: () => void;
  theme: string | null;
}) {
  const { pathname } = useLocation();
  return (
    <>
      <header
        className={`${pathname === "/auth" ? "hidden" : ""} w-full py-4 px-6 xl:px-0 grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto`}
      >
        <img src={Logo} alt="logo" />
        <div className="hidden md:block">
          <Navbar />
        </div>
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
      {pathname !== "/auth" && <MobileNavbar />}
    </>
  );
}
