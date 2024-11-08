import React from "react";
import { FaPhone, FaEnvelope, FaLine } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section text-center mt-5">
      <h2>Contact Me</h2>
      <div className="contact-info mt-4">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>Tel: 0954695161</span>
        </div>
        <div className="separator">|</div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>
            Email:{" "}
            <a className="pointerText" href="mailto:nwpscw79@gmail.com">
              nwpscw79@gmail.com
            </a>
          </span>
        </div>
        <div className="separator">|</div>
        <div className="contact-item">
          <FaLine className="contact-icon" />
          <span>Line: nssrii18</span>
        </div>
      </div>
      <div className="mt-2">50/118 M.1 Suwannasron Rd., Kokyae, Nongkae, Saraburi 18230</div>
    </div>
  );
};

export default Contact;
