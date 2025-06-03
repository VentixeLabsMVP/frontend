import { useNavigate } from "react-router-dom";

const BookingBtn = ({ eventId }) => {
  const navigate = useNavigate();

const handleBooking = async () => {
  const token = localStorage.getItem("token");
  if (!token) return navigate("/account/login");

  console.log("Booking eventId:", eventId);

  const res = await fetch("https://bookingserviceproider.azurewebsites.net/api/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
body: JSON.stringify({ EventId: eventId.toString() })// this.......
  });

  res.ok ? alert("Reservation success!") : alert("Reservation failed");
};

  return (
    <button className="event-book-btn" onClick={handleBooking}>
      Book Event
    </button>
  );
};

export default BookingBtn;