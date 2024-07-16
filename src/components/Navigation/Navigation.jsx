import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(isActive ? css.active : css.notActive)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            clsx(isActive ? css.active : css.notActive)
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
