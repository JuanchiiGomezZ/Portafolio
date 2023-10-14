import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/SectionTitle';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm('service_hip8aqo', 'template_4zudw8l', form.current, '5beH1GrfZrtEt17zi').then(
      (result) => {
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <form ref={form} onSubmit={sendEmail} className="form">
        <SectionTitle text="Contact" />
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />

        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send" className="send-button" />
      </form>
    </section>
  );
};

export default Contact;
