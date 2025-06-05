import EventCard from '../components/EventCard.jsx'
import CreateEventModal from '../components/CreateEventModal.jsx'
import { useEffect, useState } from "react";
import axios from "axios";



const Events = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const fetchEvents = () => {
  axios.get("https://eventprovider-win24-cvb2h4heesbxauaj.swedencentral-01.azurewebsites.net/api/event")
    .then(res => setEvents(res.data))
    .catch(err => console.error(err));
};
// "https://eventprovider-win24-cvb2h4heesbxauaj.swedencentral-01.azurewebsites.net/api/event"
useEffect(() => {
  fetchEvents();
}, []);
    
console.log(events)

return (

<>
  <div className="event-header">
    <button className="add-event-btn primary-button"
    onClick={() => setIsModalOpen(true)}>
      <i className="fa-solid fa-plus"></i>
      <span>Create Event</span>
    </button>
  </div>
    <CreateEventModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onEventCreated={fetchEvents} 
    />

  <section className="event-section">

    {events.map(event => (
      <EventCard
        key={event.id}
        id={event.id}
        startDate={event.startDate}
        eventname={event.eventName}
        city={event.address.city}
        price={`$${event.price}`}
      />
    ))}
  </section>
  </>
)

}

export default Events