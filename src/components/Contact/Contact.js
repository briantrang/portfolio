import React, { Component } from "react";
import "./Contact.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleMessage(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    alert("An email was sent!");
    event.preventDefault();

    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message,
    };
    
    axios
      .post("https://portfolio-contact-bt.herokuapp.com/send", data)
      .then(res => console.log("MESSAGE SENT!" + " \nRESPONSE: " + res))
      .catch(err => console.log("MESSAGE FAILED!" + " \nERROR: " + err));
      this.resetForm();
  }

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div className="contactContainer">
        <div className="backgroundWave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#83ddf1"
              fillOpacity="0.7"
              d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,149.3C672,117,768,75,864,69.3C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="backgroundWave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#83f1c5"
              fillOpacity="0.7"
              d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,261.3C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <h1 className="contactTitle text-center">Want to get in touch?</h1>
        <p className="contactDescription text-center">
          Feel free to contact me so we can get a conversation going.
        </p>
        <div className="row p-3">
          <div className="col-12 col-lg-6 p-lg-5">
            <i className="far fa-envelope-open icon"></i>
          </div>
          <div className="col-12 col-lg-6 p-lg-5">
            <form onSubmit={this.handleSubmit}>
              <input
                className="inputStyling"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleFirstName}
                placeholder="First Name"
              />
              <input
                className="inputStyling"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleLastName}
                placeholder="Last Name"
              />
              <input
                className="inputStyling"
                type="input"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
                placeholder="Email"
              />
              <textarea
                className="inputStyling"
                name="message"
                value={this.state.message}
                onChange={this.handleMessage}
                placeholder="Message"
              />
              <Button type="submit" className="contactButton">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
