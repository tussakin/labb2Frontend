import React from "react";
import "../index.js";

function contact() {
  return (
    <main>
      <h1>Contact me</h1>

      <h5>
        Want to contact me? Fun! Down here I have a form where you can send me a
        message with your contact info. If you want to contact me directly then
        you will find my email adress, instagram, linkedin, behance and github
        at the bottom of the page! I'm looking forward to hearing from you!
      </h5>

      <div class="contact">
        <form class="contactme">
          <label for="name">My name is...</label>
          <input type="text" id="name" name="name"></input>
          <br></br>

          <label for="email">My email is...</label>
          <input type="email" id="email" email="email"></input>
          <br></br>

          <label for="phonenumber">My phone number is...</label>
          <input type="phone" id="phone" phone="phonenumber"></input>
          <br></br>
          <label for="message">I want to say...</label>
          <textarea type="text" id="message" message="message"></textarea>
          <br></br>
          <input type="submit" submit="submit" value="Send"></input>
          <br></br>
        </form>
      </div>
    </main>
  );
}

export default contact;
