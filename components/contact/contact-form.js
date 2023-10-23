import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

const initialContact = {
  name: "",
  email: "",
  message: "",
};

async function sendContactData(contact) {
  const requestBody = JSON.stringify(contact);

  const response = await fetch("/api/contact", {
    method: "POST",
    body: requestBody,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went Wrong");
  }
}

function ContactForm() {
  const [contact, setContact] = useState(initialContact);
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (["success", "error"].includes(requestStatus)) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  function onChangeHandler(event) {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.id]: event.target.value,
    }));
  }

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData(contact);
      setContact(initialContact);
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }

    setRequestStatus("success");
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message...",
      message: "Your message on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
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
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
