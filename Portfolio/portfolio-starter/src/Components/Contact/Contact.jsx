import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [emailDone, setEmailDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a63v06p",
        "template_qcr3txq",
        form.current,
        "BfCwdsmvdFIBhQ044"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="c-left">
        <span>Get in Touch</span>
        <span>Contact me</span>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="from_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button" />
        </form>
        <span>{emailDone ? "Your email has been sent" : ""}</span>
      </div>

      <div className="blur c-blur1"></div>
      <div className="blur c-blur2"></div>
    </div>
  );
};

export default Contact;
