import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 0,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'guests' && value < 0) {
      setFormData((prevData) => ({
        ...prevData,
        guests: 0,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setIsSubmitted(true);


    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 0,
    });

    
  };

  return (
    <div className="reservation-container">
      <h2 className="reservation-title">Make a Reservation</h2>

      {isSubmitted && (
        <div className="reservation-success">
          You have successfully booked a reservation!
        </div>
      )}

      <form className="reservation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="reservation-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="reservation-input"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="reservation-input"
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className="reservation-input"
          required
        />
        <label htmlFor="guests" className="reservation-label">Number of Guests:</label>
        <input
          type="number"
          name="guests"
          min="0"
          value={formData.guests}
          onChange={handleInputChange}
          className="reservation-input"
          required
        />
        <button type="submit" className="reservation-button">Book Now</button>
      </form>
    </div>
  );
};

export default Reservation;
