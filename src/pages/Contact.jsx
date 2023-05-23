import React, { useState } from "react";

function Contact({ saveFormData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (firstName.trim() === "") {
      alert("Please enter your first name");
      return;
    }

    if (!isValidAlphabetic(firstName)) {
      alert("Please enter a valid first name (alphabets only)");
      return;
    }

    if (lastName.trim() === "") {
      alert("Please enter your last name");
      return;
    }

    if (!isValidAlphabetic(lastName)) {
      alert("Please enter a valid last name (alphabets only)");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (phone.trim() === "") {
      alert("Please enter your phone number");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    // If all validations pass, save the form data and reset the fields
    saveFormData(firstName, lastName, email, phone);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  // Helper function to validate alphabets only
  const isValidAlphabetic = (value) => {
    const alphabeticRegex = /^[A-Za-z]+$/;
    return alphabeticRegex.test(value);
  };

  // Helper function to validate email
  const isValidEmail = (value) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Helper function to validate phone number
  const isValidPhone = (value) => {
    // Use a regular expression to validate phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
