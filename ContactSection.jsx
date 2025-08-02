import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  background-color: #2c3e50;
  color: white;
  padding: 50px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: none;
  border-radius: 5px;
`;

const ContactTextarea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  height: 150px;
  border: none;
  border-radius: 5px;
`;

const ContactButton = styled.button`
  padding: 12px 30px;
  font-size: 1.2rem;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #e67e22;
  }
`;

const ContactText = styled.p`
  font-size: 1rem;
  margin-top: 20px;
`;

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3dkfzb', 'template_j99s21q', form.current, 'suYmSULpiYYkeuL9v')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          form.current.reset(); // Form reset after submission
      }, (error) => {
          console.log(error.text);
          alert("Failed to Send Message, Try Again!");
      });
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <ContactInput type="text" name="user_name" placeholder="Your Name" required />
        <ContactInput type="email" name="user_email" placeholder="Your Email" required />
        <ContactTextarea name="message" placeholder="Your Message" required />
        <ContactButton type="submit">Send Message</ContactButton>
      </ContactForm>
      <ContactText>or connect with me on <a href="https://www.linkedin.com/in/amit-baghel-5b7b33270" style={{color: '#f39c12'}}>LinkedIn</a></ContactText>
    </ContactContainer>
  );
};

export default ContactSection;
