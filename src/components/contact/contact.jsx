import React, { useRef } from "react";
import "./contact.css";
import profile from "../../assets/profilesm.jpg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8v5cv5e",
        "template_0msh94b",
        form.current,
        "FdISQTabxW7oid5bR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h1>Contact me</h1>

      <div className="container contact__container">
        <div className="contact__container--col">
          <img src={profile} className="col__img"></img>
        </div>

        <div className="contact__container--col">
          <form ref={form} onSubmit={sendEmail}>
            <h3>
              I'd love to hear from you! <br />
              Feel free to share your thoughts or just say hello
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
