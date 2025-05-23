import {useParams} from 'react-router-dom'


const EventDetails = () => {
const { id } = useParams();//get the id from URL


return (
    <div className="event-details">
      <h2>React Meetup</h2>
      <p>Plats: Stockholm</p>
      <p>Datum: 2025-06-01</p>
      <p>Beskrivning: En träff för React-utvecklare</p>
    </div>
  );
};

export default EventDetails;