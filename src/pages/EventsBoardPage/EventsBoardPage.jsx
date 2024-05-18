import css from "./EventsBoardPage.module.css";
import EventsList from "../../components/EventsList/EventsList";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { fetchEvents } from "../../../api";
import Loader from "../../components/Loader/Loader";

export default function EventsBoardPage() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const n = 12;
  const onPageChange = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    const getEvents = async () => {
      try {
        setIsLoading(true);
        const data = await fetchEvents();
        setEvents(data);
        setItemPerPage(
          data.filter((item, index) => {
            return (index >= currentPage * n) & (index < (currentPage + 1) * n);
          })
        );
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getEvents();
  }, [currentPage]);

  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Events</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && itemPerPage && <EventsList events={itemPerPage} />}
      {!isLoading && (
        <Pagination events={events} onPageChange={onPageChange} n={n} />
      )}
    </div>
  );
}
