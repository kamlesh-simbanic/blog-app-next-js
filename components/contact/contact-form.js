import { useState } from "react";
import classes from "./contact-form.module.css";

const initialContact = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  const [contact, setContact] = useState(initialContact);

  function onChangeHandler(event) {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.id]: event.target.value,
    }));
  }

  function sendMessageHandler(event) {
    event.preventDefault();

    const requestBody = JSON.stringify(contact);

    fetch("/api/contact", {
      method: "POST",
      body: requestBody,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you ?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={contact.email}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={contact.name}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={contact.message}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
