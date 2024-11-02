import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section text-center mt-5">
      <h2>Contact Me</h2>
      <div className="mt-4">
        <p>Tel : 0954695161</p>
        <p>
          Email :{" "}
          <a className="pointerText" href="mailto:nwpscw79@gmail.com">
            nwpscw79@gmail.com
          </a>
        </p>
        <p>Line : nssrii18</p>
      </div>
    </div>
  );
};

export default Contact;
