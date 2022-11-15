/** @format */

import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export const Contact = () => {
  const sendEmail = (e) => {
    console.log(e.traget);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_npj7mqd",
        "template_tnlxsyk",
        e.target,
        "E6-k9HdGJ4hfOIC40"
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
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> me{" "}
            <p className="mail_number">prabhatbhardwajjuly18@gmail.com</p>
          <p className="mail_number">+91 7631766466</p>
          <div className="share">
            <a
              href="https://github.com/AWMprabhat"
              target="_blank"
              rel="noreferrer"
              className="fab fa-github"
            />
            <a
              target="_blank"
              href="https://www.instagram.com/in/iamprabhat18/"
              rel="noreferrer"
              className="fab fa-instagram"
            />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/prabhat-bhardwaj-598419233/"
              rel="noreferrer"
              className="fab fa-linkedin"
            />
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=7631766466"
              method="get"
              rel="noreferrer"
              className="fab fa-whatsapp"
            />
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100021868091522"
              rel="noreferrer"
              className="fab fa-facebook"
            />
            <a
              target="_blank"
              href="https://twitter.com/iamPrabhat18"
              rel="noreferrer"
              className="fab fa-twitter"
            />
            <a
              target="_blank"
              href="tel:+91 7631766466"
              rel="noreferrer"
              className="fa solid fa-phone"
            />
            <a
              target="_blank"
              href="mailto:prabhatbhardwajjuly18@gmail.com"
              rel="noreferrer"
              className="fa fa-envelope"
            />
          </div>
        
        </h1>

        <form action="" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            className="box"
            name="user_name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="box"
            name="user_email"
          />
          {/* <input
            type="text"
            placeholder="Subject"
            className="box"
            name="subject"
          /> */}
          <textarea
            name="message"
            className="box"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};
