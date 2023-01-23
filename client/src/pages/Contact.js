import React from "react";
import PizzaLeft from "../assets/shop_online.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        // style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> צור קשר</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">שם מלא</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">אימייל</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">הודעה</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
