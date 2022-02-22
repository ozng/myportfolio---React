import "./contact.scss";
import { useState } from "react";
import { Person, Mail } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div id="contact" className="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <div className="emailPhoneContainer">
          <a
            href="mailto:ozangurer12@gmail.com?subject=Merhaba"
            className="email"
          >
            <Mail className="mailIcon" />
            <span>ozangurer12@gmail.com</span>
          </a>
          <div className="phone">
            <Person className="phoneIcon" />
            <span>+90 (530) 551 43 20</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP.</span>}
        </form>
      </div>
    </div>
  );
}
