import { useEffect, useState } from "react";
import { fetchEventOfID } from "../../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./EventParticipantsPage.module.css";

export default function EventParticipantsPage() {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [event, setEvent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getEventOfID = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEventOfID(eventId);
        setParticipants(data.participants);
        setEvent(data.event);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getEventOfID();
  }, [eventId]);

  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>"{event}" participants</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && participants.length > 0 && (
        <ParticipantsList participants={participants} />
      )}
    </div>
  );
}
