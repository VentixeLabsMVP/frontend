import { useNavigate } from "react-router-dom";

const BookingBtn = ({ eventId }) => {
  const navigate = useNavigate();

const handleBooking = async () => {
  const token = localStorage.getItem("token");
  if (!token) return navigate("/account/login");

  console.log("Booking eventId:", eventId);  // <-- kolla värdet här

  const res = await fetch("https://localhost:7116/api/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
body: JSON.stringify({ EventId: eventId.toString() })
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