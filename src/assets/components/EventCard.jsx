const EventCard = ({ title, date, location, price }) => {
  return(
    <div className="event-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
      <p>{price}</p>
    </div>
  )
}

export default EventCard