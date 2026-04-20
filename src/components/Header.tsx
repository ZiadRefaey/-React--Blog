import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Logo from "/logo.svg";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 xl:px-0 grid grid-cols-3 max-w-7xl mx-auto">
      <img src={Logo} alt="logo" />
      <Navbar />
      <Avatar />
    </header>
  );
}
