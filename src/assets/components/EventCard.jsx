import { Link } from 'react-router-dom';

const EventCard = ({ id, eventname, startDate, price, city }) => {
  return (
    <Link to={`/events/${id}`} className="event-card">
      <div className="img-container">
        <img className="img-event-card" />
      </div>
      <div className="event-card-main">
        <p className="event-card-main-startdate">{startDate}</p>
        <p className="event-card-main-eventname">{eventname}</p>
        <div className="icon-city">
        <i className="fa-light fa-location-dot"></i>
        <p className="event-card-main-city">{city}</p>
        </div>

      </div>
      <div className="event-card-footer">
        <p className="event-card-main-price">{price}</p>

      </div>
    </Link>
  );
};

export default EventCard;