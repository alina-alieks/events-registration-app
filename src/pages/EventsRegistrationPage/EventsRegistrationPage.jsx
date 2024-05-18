import { useParams } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useEffect, useState } from "react";
import css from "./EventsRegistrationPage.module.css";
import { fetchAddParticipant, fetchEventOfID } from "../../../api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function EventsRegistrationPage() {
  const { eventId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [event, setEvent] = useState({
    description: "",
    event: "",
    eventDate: "",
    id: "",
    organizer: "",
    participants: [],
  });

  useEffect(() => {
    const getEventOfID = async () => {
      const data = await fetchEventOfID(eventId);
      setEvent(data);
    };
    getEventOfID();
  }, [eventId]);

  useEffect(() => {
    if (event.id === "") {
      return;
    }
    const addParticipant = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchAddParticipant(event.id, event);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    addParticipant();
  }, [event.id, event]);

  const handleOnAdd = (values) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      participants: [...prevEvent.participants, values],
    }));
  };

  useEffect(() => {
    console.log("Updated event:", event);
  }, [event]);

  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Event registration</h1>
      <RegistrationForm onAdd={handleOnAdd} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
