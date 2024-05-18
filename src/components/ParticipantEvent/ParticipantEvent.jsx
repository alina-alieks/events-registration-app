import css from "./ParticipantEvent.module.css";

export default function ParticipantEvent({ participant }) {
  return (
    <>
      <p className={css.name}>{participant.name}</p>
      <p className={css.email}>{participant.email}</p>
    </>
  );
}
