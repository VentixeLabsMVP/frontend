import { useState } from "react";

const CreateEventModal = ({ isOpen, onClose, onEventCreated }) => {

  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

const eventData = {
  eventName,
  description,
  price: parseFloat(price),
  startDate,
  endDate,
  address: {
    streetName,
    city
  }
};


  try {
    const response = await fetch("https://eventprovider-win24-cvb2h4heesbxauaj.swedencentral-01.azurewebsites.net/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
    });

    if (response.ok) {
      console.log("Event skapades!");
      onClose();
      onEventCreated();

      setEventName("");
      setDescription("");
      setPrice("");
      setStartDate("");
      setEndDate("");
      setStreetName("");
      setCity("");
    }else {
      console.error("Något gick fel:", response.status);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  return (
    <div
      className={`create-event-modal ${isOpen ? "active" : ""}`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className={`create-event-modal-card ${isOpen ? "active" : ""}`}>
        <button className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark-large"></i>
        </button>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Street Name</label>
            <input
              type="text"
              value={streetName}
              onChange={(e) => setStreetName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

            <button type="submit" className="add-event-btn">
              <span>Create Event</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;