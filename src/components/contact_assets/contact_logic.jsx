import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xr87ofh', 'template_no537qy', form.current, 'dqBzxqXidkvWOzS-U')
      .then((result) => {
          console.log(result.text);
          console.log(form)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} className="formContainer" onSubmit={sendEmail}>
      <input type="text" name="from_name" />
      <input type="email" name="email_id" />
      <textarea name="message" />
      <input type="file" name="my_file" accept="image/*" multiple />
      <input type="submit" value="Unverbindliche Anfrage Senden" />
    </form>
  );
};


