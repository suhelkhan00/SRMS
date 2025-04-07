import React from "react";
import "../App"
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3><strong>Contact Information</strong></h3>
            <p>📞 +917690939898, +918529294936, +919358649747</p>
            <p>Email: <Link href="mailto:emcanarayanpur@gmail.com">emcanarayanpur@gmail.com</Link></p>
            <p>Website: <Link href="http://www.EMCASchool.com">www.EMCASchool.com</Link></p>
            <p><strong>Affiliated By:</strong> C.B.S.E</p>
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
              {["Home", "Staff", "Management", "Course", "Facility", "Terms & Conditions", "Privacy Policy", "Cancellations & Returns", "Pay Fees"].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>

          {/* Contact Details */}
          <div>
            <h3><strong>CONTACT</strong></h3>
            <p>EMCA Sr. Sec. School</p>
            <p>Kolahera Road, Narayanpur (Kotputli), Raj.</p>
            <p>Email: <a href="mailto:emcanarayanpur@gmail.com">emcanarayanpur@gmail.com</a></p>
            <p>Website: <a href="http://www.EMCASchool.com">www.EMCASchool.com</a></p>
            <p>📞 +917690939898, +918529294936, +919358649747</p>
          </div>

          {/* Enquiry Form */}
          <div>
            <h3><strong>ENQUIRY FORM</strong></h3>
            <form className="enquiry-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <textarea placeholder="Message"></textarea>
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
