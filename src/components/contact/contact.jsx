import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

export const Contact = () => {
  const form = useRef();
  const [show,setShow]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40xb8el', 'template_nuzcbeq', form.current, 'HisGcoHbzLrIOG6Wb')
      .then((result) => {
          //console.log(result.text);
          setShow(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='contact_details'>
      <h3>For any Questions, Requests or Problems, please contact us:</h3>
      <h3>Email: Quickshop@gmail.com</h3>
      <h3>Phone: 040 6542395</h3>
      <div></div>
      <div></div>
      <h1 className="form_title">Send me an Email and we´ll talk!</h1>
    {
    show?<h1 className="email_sent">Thank you, ill get back to you soon!</h1>:null
    }
    <form ref={form} onSubmit={sendEmail} id="form">
      <label>Name</label>
      <input type="text" name="user_name" required placeholder="Your Name"/>
      <label>Email</label>
      <input type="email" name="user_email" required placeholder="Your@Email.com"/>
      <label>Message</label>
      <textarea name="message" required placeholder="Your Message"/>
      <button classname="submit" type="submit" value="Send" >Send Message</button>

{/* Show message when show = true*/}
      
      
    </form>
    </div>
  );
};
