import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Little Lemon</h2>
      
      <p className="contact-description">
        We'd love to hear from you! Whether it's a question, feedback, or just to say hello, reach out to us below.
      </p>

      <div className="contact-details">
        <div className="contact-info">
          <h3>Address</h3>
          <p>123 Fresh Street, Lemon City</p>

          <h3>Phone</h3>
          <p>(123) 456-7890</p>

          <h3>Email</h3>
          <p>contact@littlelemon.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-input contact-textarea"
            required
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>

      <div className="contact-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
