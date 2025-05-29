import { Link } from 'react-router-dom';

const EventCard = ({ id, eventname, description, price, city }) => {
  return (
    <Link to={`/events/${id}`} className="event-card">
      <div className="img-container">
        <img className="img-event-card" />
      </div>
      <div className="event-card-main">
        <p>{eventname}</p>
        <p>{description}</p>
      </div>
      <div className="event-card-footer">
        <p>{price}</p>
        <p>{city}</p>
      </div>
    </Link>
  );
};

export default EventCard;