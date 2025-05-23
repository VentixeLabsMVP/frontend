import { Link } from 'react-router-dom';

const EventCard = ({ title, date, location, price }) => {
  return(
    <Link to="/events/1" className="event-card">
      <div className="img-container">
        <img className="img-event-card"></img>
      </div>
      <div className="event-card-main">
        <p>{title}</p>
        <p>{date}</p>
        <p>{location}</p>
      </div>
      <div className="event-card-footer">
        <p>{price}</p>
      </div>
    </Link>
  )
}

export default EventCard