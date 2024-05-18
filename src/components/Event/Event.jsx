import { Link } from "react-router-dom";
import css from "./Event.module.css";

export default function Event({ event }) {
  return (
    <>
      <h2 className={css.title}>Title {event.id}</h2>
      <p className={css.discription}>Discription {event.discription}</p>
      <div className={css.wrappLink}>
        <Link className={css.link} to={`/registration/${event.id}`}>
          Register
        </Link>
        <Link className={css.link} to={`/${event.id}`}>
          View
        </Link>
      </div>
    </>
  );
}
