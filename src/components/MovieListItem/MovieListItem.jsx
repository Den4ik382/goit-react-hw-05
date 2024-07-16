import { Link, useLocation } from "react-router-dom";
import css from "./MovieListItem.module.css";
export default function MovieListItem({
  movie: { id, poster_path, original_title, release_date, vote_average },
}) {
  const location = useLocation();

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (
    <li className={css.list}>
      <img
        className={css.img}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : defaultImg
        }
        alt={original_title}
      />
      <div>
        <h2>{original_title}</h2>
        <div>
          <p>
            Release: <span>{release_date}</span>
          </p>
          <p>
            Rating: <span>{Math.round(vote_average)}/10</span>
          </p>
        </div>
        <Link to={`/movies/${id}`} state={location}>
          Read More
        </Link>
      </div>
    </li>
  );
}
