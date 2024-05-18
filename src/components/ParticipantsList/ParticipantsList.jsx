import ParticipantEvent from "../ParticipantEvent/ParticipantEvent";
import css from "./ParticipantsList.module.css";

export default function ParticipantsList({ participants }) {
  return (
    <>
      <ul className={css.list}>
        {participants.map((participant) => (
          <li className={css.item} key={participant.id}>
            <ParticipantEvent participant={participant} />
          </li>
        ))}
      </ul>
    </>
  );
}
