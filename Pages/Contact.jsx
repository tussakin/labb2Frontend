import React from 'react';

function Contact() {
    return (
      <main>
        <h1>Contact me</h1>
        <h5>Want to contact me? Fun! Down here I have a form where you can send me a message with your contact info. If you want to contact me directly then you will find my email address, Instagram, LinkedIn, Behance, and GitHub at the bottom of the page! I'm looking forward to hearing from you!</h5>

        <div className="contact">
          <form className="contactme">
            <label htmlFor="name">My name is...</label>
            <input type="text" id="name" name="name" /><br />
            <label htmlFor="email">My email is...</label>
            <input type="email" id="email" name="email" /><br />
            <label htmlFor="phonenumber">My phone number is...</label>
            <input type="tel" id="phone" name="phone" /><br />
            <label htmlFor="message">I want to say...</label>
            <textarea id="message" name="message" defaultValue={""} /><br />
            <input type="submit" value="Send" /><br />
          </form>
        </div>
      </main>
    );
}

export default Contact;
