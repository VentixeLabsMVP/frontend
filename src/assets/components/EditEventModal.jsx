import {useEffect, useState } from "react";


const EditEventModal = ({ isOpen, onClose, onEventUpdated, eventData }) => {

  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");



  useEffect(() => {
  if (eventData) {
    setEventName(eventData.eventName || "");
    setDescription(eventData.description || "");
    setPrice(eventData.price || "");
    setStartDate(eventData.startDate?.split("T")[0] || "");// need this so form can show correct date
    setEndDate(eventData.endDate?.split("T")[0] || "");// need this so form can show correct date
    setStreetName(eventData.address?.streetName || "");
    setCity(eventData.address?.city || "");
  }
}, [eventData]);

const handleSubmit = async (e) => {
  e.preventDefault();

const updatedEvent = {
  id: eventData.id, // ⬅️ superviktig!
  eventName,
  description,
  price: parseFloat(price),
  startDate,
  endDate,
  addressId: eventData.address?.id, 
  address: {
    id: eventData.address?.id, 
    streetName,
    city
  }
};


  try {
    const response = await fetch(`https://eventprovider-win24-cvb2h4heesbxauaj.swedencentral-01.azurewebsites.net/api/event/${eventData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedEvent)
    });

    if (response.ok) {
      console.log("Event Was Updated!");
      onClose();
      onEventUpdated();

      setEventName("");
      setDescription("");
      setPrice("");
      setStartDate("");
      setEndDate("");
      setStreetName("");
      setCity("");
    }else {
      console.error("Soemthing went wrong:", response.status);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  return (
    <div
      className={`edit-event-modal ${isOpen ? "active" : ""}`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className={`edit-event-modal-card ${isOpen ? "active" : ""}`}>
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
              <span>Update Event</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;