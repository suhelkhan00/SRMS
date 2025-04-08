import React, { useState } from "react";
import "../App.css"; // adjust path if needed
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Optionally clear the submission message when user starts editing
    setSubmissionMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error("Response not OK. Status:", response.status);
        return;
      }

      const result = await response.json();
      console.log("Response received:", result);
      
      // Set success message above the send button
      setSubmissionMessage("Enquiry Submitted");
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Optionally clear the success message after 3 seconds
      setTimeout(() => setSubmissionMessage(""), 3000);
      
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Error submitting enquiry. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3><strong>Contact Information</strong></h3>
            <p>📞 +917690939898, +918529294936, +919358649747</p>
            <p>
              Email:{" "}
              <Link to="mailto:emcanarayanpur@gmail.com">
                emcanarayanpur@gmail.com
              </Link>
            </p>
            <p>
              Website:{" "}
              <Link to="http://www.EMCASchool.com">www.EMCASchool.com</Link>
            </p>
            <p>
              <strong>Affiliated By:</strong> C.B.S.E
            </p>
          </div>
          <div>
            <h3><strong>Mailing Address:</strong></h3>
            <p>EMCA Sr. Sec. School</p>
            <p>Kolahera Road, Narayanpur (Kotputli), Raj.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-grid">
          {/* Quick Links */}
          <nav>
            <h3 className="font-bold">QUICK LINKS</h3>
            <ul>
              {[
                "Home",
                "Staff",
                "Management",
                "Course",
                "Facility",
                "Terms & Conditions",
                "Privacy Policy",
                "Cancellations & Returns",
                "Pay Fees",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>

          {/* Contact Details */}
          <div>
            <h3><strong>CONTACT</strong></h3>
            <p>EMCA Sr. Sec. School</p>
            <p>Kolahera Road, Narayanpur (Kotputli), Raj.</p>
            <p>
              Email:{" "}
              <a href="mailto:emcanarayanpur@gmail.com">
                emcanarayanpur@gmail.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="http://www.EMCASchool.com">www.EMCASchool.com</a>
            </p>
            <p>📞 +917690939898, +918529294936, +919358649747</p>
          </div>

          {/* Enquiry Form */}
          <div>
            <h3><strong>ENQUIRY FORM</strong></h3>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
              {/* Display the submission message above the send button */}
              {submissionMessage && (
                <p style={{ color: "green", marginBottom: "10px", fontWeight: "bold" }}>
                  {submissionMessage}
                </p>
              )}
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>

        {/* Dynamic Last Updated Date */}
        <p className="last-updated">
          Last Updated: <span>{new Date().toLocaleDateString()}</span>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
