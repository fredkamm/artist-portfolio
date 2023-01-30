import React, {useRef} from "react";
import emailjs from "@emailjs/browser"

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input placeholder="Name" type="text" name="name" required />
          </li>
          <li className="half">
            <input placeholder="Email" type="email" name="email" required />
          </li>
          <li>
            <input placeholder="Subject" type="text" name="subject" required />
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" className="flat-button" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Contact;
