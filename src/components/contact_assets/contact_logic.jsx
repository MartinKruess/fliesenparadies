import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xr87ofh', 'template_no537qy', form.current, 'dqBzxqXidkvWOzS-U')
      .then((result) => {
          console.log(result.text);
          props.setContactActive(false)
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} className="formContainer" onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder="Max Mustermann" required/>
      <input type="email" name="email_id" placeholder="Kontakt E-mail" required/>
      <textarea name="message" placeholder="Ihre Anfrage" required/>
      <input type="submit" value="Unverbindliche Anfrage Senden" />
    </form>
  );
};


