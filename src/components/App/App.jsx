import { Route, Routes } from "react-router-dom";
import EventParticipantsPage from "../../pages/EventParticipantsPage/EventParticipantsPage";
import EventsBoardPage from "../../pages/EventsBoardPage/EventsBoardPage";
import EventsRegistrationPage from "../../pages/EventsRegistrationPage/EventsRegistrationPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventsBoardPage />} />
        <Route path="/:eventId" element={<EventParticipantsPage />} />
        <Route
          path="/registration/:eventId"
          element={<EventsRegistrationPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
