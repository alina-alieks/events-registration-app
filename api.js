import axios from "axios";

axios.defaults.baseURL = "https://66470ef751e227f23ab0e9f7.mockapi.io";

export const fetchEvents = async () => {
  const response = await axios.get("/events");
  console.log(response.data);
  return response.data;
};

export const fetchEventOfID = async (id) => {
  const response = await axios.get(`/events/${id}`);
  console.log(response.data);
  return response.data;
};

export const fetchAddParticipant = async (id, value) => {
  const response = await axios.put(`/events/${id}`, value);
  console.log(response.data);
  return response.data;
};
