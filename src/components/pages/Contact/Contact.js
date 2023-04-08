import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all required fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // submit form
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleNameBlur = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className={`form-control ${nameError ? "is-invalid" : ""}`}
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            required
          />
          {nameError && (
            <div className="invalid-feedback">Please enter your name</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            required
          />
          {emailError && (
            <div className="invalid-feedback">
              Please enter a valid email address
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
