import EventCard from '../components/EventCard.jsx'
import { useEffect, useState } from "react";
import axios from "axios";



const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://eventprovider-win24-cvb2h4heesbxauaj.swedencentral-01.azurewebsites.net/api/event") // byt till din riktiga URL
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);
    
console.log(events)

return (
<section className="event-section">


    {events.map(event => (
    <EventCard
  key={event.id}
  eventname={event.eventName}
  description={event.description}
  price={`$${event.price}`}
    />
  ))}
      <EventCard
        title="new comggggggmit hello"
        date="September 13, 2026"
        location="Basketorp713"
        price="$30"
      />
            <EventCard
        title="Fruddeluxlaxen"
        date="September 13, 2026"
        location="Basketorp713"
        price="$30"
      />
            <EventCard
        title="Fruddeluxlaxen"
        date="September 13, 2026"
        location="Basketorp713"
        price="$30"
      />
                  <EventCard
        title="Fruddeluxlaxen"
        date="September 13, 2026"
        location="Basketorp713"
        price="$30"
      />
    </section>
)

}

export default Events