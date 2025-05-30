import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditEventModal from '../components/EditEventModal';




const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [event, setEvent] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

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
          navigate('/events'); // eller ladda om/visa meddelande
        }}
      />
      <div className="event-details-header">
      <button className="delete-button" onClick={handleDelete}>
        <span>Delete</span>
      </button>
      <button className="update-button" onClick={() => setIsEditOpen(true)}>
        <span>Update</span>
      </button>
      </div>
      <div className="event-details">
        <h2>{event.eventName}</h2>
        <p>Plats: {event.address.city}</p>
        <p>Gata: {event.address.streetName}</p>
        <p>Datum: {event.startDate} - {event.endDate}</p>
        <p>Beskrivning: {event.description}</p>
        <p>Pris: ${event.price}</p>
      </div>
    </div>

  );
};

export default EventDetails;
