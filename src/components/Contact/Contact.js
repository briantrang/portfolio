import React, { useState } from "react";
import "./Contact.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Contact = (props) => {
  //States for all input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(false);

  //Input Value Handlers
  var handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  var handleLastName = (event) => {
    setLastName(event.target.value);
  };

  var handleEmail = (event) => {
    setEmail(event.target.value);
  };

  var handleMessage = (event) => {
    setMessage(event.target.value);
  };

  var handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    axios
      .post("https://porfoliocontactserver.firebaseio.com/message.json", data)
      .then((res) => console.log("MESSAGE SENT! Response: " + res))
      .catch((err) => console.log("MESSAGE FAILED! " + err));
    resetForm();
  };

  //Form Reset after submitted message
  var resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setMessageSuccess(true);

    setTimeout(() => {
      console.log("Form has been reset and sent message turned off!");
      setMessageSuccess(false);
    }, 4000);
  };

  return (
    //Contact Form SVG Waves
    <div className="contactContainer">
      <div className="backgroundWave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#83ddf1"
            fillOpacity="0.6"
            d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,149.3C672,117,768,75,864,69.3C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="backgroundWave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#83f1c5"
            fillOpacity="0.6"
            d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,261.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Contact Form Content */}
      <h1 className="contactTitle text-center">Want to get in touch?</h1>
      <p className="contactDescription text-center p-3">
        Feel free to contact me so we can get a conversation going.
      </p>
      <div className="row formLayout">
        <div className="col-12 d-sm-none">
          <i className="far fa-envelope-open icon"></i>
        </div>
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <input
                  className="inputStyling"
                  type="text"
                  name="firstName"
                  value={firstName}
                  required
                  onChange={handleFirstName}
                  placeholder="First Name"
                />
                <input
                  className="inputStyling"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleLastName}
                  placeholder="Last Name"
                />
                <input
                  className="inputStyling"
                  type="input"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="Email"
                />
              </div>
              <div className="col-12 col-lg-6">
                <textarea
                  className="inputStyling"
                  name="message"
                  value={message}
                  onChange={handleMessage}
                  placeholder="Message"
                />
              </div>
              <Button type="submit" className="contactButton">
                Send Message
              </Button>
            </div>
            <p
              className={
                messageSuccess ? "messageSuccess text-center" : "messageHide"
              }
            >
              MESSAGE SENT!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
