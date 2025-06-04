import { useNavigate } from "react-router-dom";
import { useState } from "react";


const BookingBtn = ({ eventId }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

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

    if (res.ok) {
      setMessage("Reservation success!");
      setIsError(false);
    } else if (res.status === 401) {
      navigate("/account/login");
    } else {
      setMessage("Reservation failed");
      setIsError(true);
    }
  };

  return (
    <>
      <button className="btn-big-boy" onClick={handleBooking}>
        Book Event
      </button>
      {message && (
        <span className={isError ? "error-message" : "success-message"}>
          {message}
        </span>
      )}
    </>
  );
};

export default BookingBtn;