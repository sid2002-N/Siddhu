import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7cz5rip', // Your EmailJS Service ID
        'template_yq93naf', // Your EmailJS Template ID
        form.current,
        'GAgTkB6cQMA4FpEFI' // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
        </div>
        <input
          className="hover btn" 
          type="submit" 
          value="Submit" 
        />
      </form>
    </section>
  );
}

export default Contact;
