import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/SectionTitle';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    
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
        <SectionTitle text={t('header.contact')} />
        <input type="text" placeholder={t('contact.name')} name="name" required />
        <input type="email" placeholder={t('contact.email')} name="email" required />

        <input type="text" placeholder={t('contact.subject')} name="subject" required />
        <textarea name="message" placeholder={t('contact.message')} required />
        <input type="submit" value={t('contact.send')} className="send-button" />
      </form>
    </section>
  );
};

export default Contact;
