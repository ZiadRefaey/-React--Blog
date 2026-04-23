import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <nav>
      <ul className="w-full items-center justify-center gap-4 flex">
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-primary underline" : " text-secondary hover:text-primary"}  transition`
            }
            to={"/"}
          >
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-primary underline" : " text-secondary hover:text-primary"}  transition`
            }
            to={"/create-post"}
          >
            Create a post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
