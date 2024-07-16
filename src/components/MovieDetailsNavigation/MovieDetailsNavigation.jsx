import { NavLink } from "react-router-dom";
import css from "./MovieDetailsNavigation.module.css";
export default function MovieDetailsNavigation() {
  return (
    <div className={css.nav}>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
    </div>
  );
}
