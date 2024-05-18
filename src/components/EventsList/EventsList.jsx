import Event from "../Event/Event";
import css from "./EventsList.module.css";

export default function EventsList({ events }) {
  return (
    <>
      <ul className={css.eventsList}>
        {events.map((event) => (
          <li className={css.item} key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    </>
  );
}
