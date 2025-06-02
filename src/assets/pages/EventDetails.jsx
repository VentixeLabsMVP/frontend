import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditEventModal from '../components/EditEventModal';




const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [event, setEvent] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  useEffect(() => {
    fetch(`https://localhost:7260/api/event/${id}`)
    .then(res => res.json())
    .then(data => setEvent(data))
    .catch(err => console.error(err));
  }, [id]);
  
  // "https://localhost:7260/api/event"
  // `https://eventprovider-win24-cvb2h4heesbxauaj.swedencentral-01.azurewebsites.net/api/event/${id}`
  const handleDelete = async () => {
    try {
      const res = await fetch(`https://localhost:7260/api/event/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setDeleted(true);
        setTimeout(() => navigate('/events'), 1500); // navigera efter 1.5s
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error("Error deleting event", err);
    }
  };



  if (deleted) return <p>Event was removed, you will be redirected...</p>;
  if (!event) return <p>Loading...</p>;
  
  return (
    <div className="event-details-card">
      <EditEventModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        eventData={event}
        onEventUpdated={() => {
          setIsEditOpen(false);
          navigate('/events');
        }}
      />
      <div className="event-details-header">
      <button className="event-delete-btn" onClick={handleDelete}>
        <span>Delete</span>
      </button>
      <button className="event-update-btn" onClick={() => setIsEditOpen(true)}>
        <span>Update</span>
      </button>
      </div>
      <div className="section-divider"></div> 
      <div className="image-area"></div>
      <div className="event-details">
        <h2>{event.eventName}</h2>
        
        <div className="event-date">
          <i className="fa-light fa-calendar-plus"></i>
          <p>Date: {formatDate(event.startDate)} – {formatDate(event.endDate)}</p>
        </div>
        <div className="event-location">
          <i className="fa-light fa-location-dot"></i>
          <p>Plats: {event.address.city}</p>
          <p>Gata: {event.address.streetName}</p>
        </div>
        <div className="section-divider"></div>

        
        <div className="event-ticket-info">
          <span>${event.price}</span>
        </div>
        <div className="section-divider"></div> 

        <div className="about-event">
          <span>About Event</span>
          <p> {event.description}</p>
        </div>

      </div>
    </div>

  );
};

export default EventDetails;
