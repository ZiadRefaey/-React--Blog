import { Link, useLocation } from "react-router";
import Avatar from "./Avatar";
import MobileNavbar from "./MobileNavbar";
import MoonIcon from "./MoonIcon";
import Navbar from "./Navbar";
import SunIcon from "./Icons/SunIcon";
import Logo from "/logo.svg";
import { UserAuth } from "../providers/AuthContext";

export default function Header({
  handleToggleTheme,
  theme,
}: {
  handleToggleTheme: () => void;
  theme: string | null;
}) {
  const { pathname } = useLocation();
  const { session } = UserAuth();
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
          {session ? (
            <Avatar />
          ) : (
            <Link
              className="px-4 py-2 bg-primary text-background rounded-xl hover:bg-secondary transition"
              to={"/auth"}
            >
              Sign In
            </Link>
          )}
        </div>
      </header>
      {pathname !== "/auth" && <MobileNavbar />}
    </>
  );
}
