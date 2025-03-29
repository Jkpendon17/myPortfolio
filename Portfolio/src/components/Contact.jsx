import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-method">
              <i className="fas fa-phone-alt"></i>
              <span>0977 855 2335</span>
            </div>
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <span>pendonjulius17@email.com</span>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;