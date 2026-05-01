import { NavLink } from "react-router";

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-input bg-card-background px-4 py-3 md:hidden">
      <ul className="flex items-center justify-around gap-3 text-sm font-bold">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
            to="/"
          >
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
            to="/post-form/create-post"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-secondary"
            }
            to="/auth"
          >
            Auth
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
