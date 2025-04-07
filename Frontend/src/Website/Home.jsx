import React from 'react';

import campus from "/campus.jpg"
import campus1 from "/campus1.jpg"
import staff from "/staff.jpg"
import children from "/children.jpg"
import { Link } from 'react-router-dom';
import Chatbox from './chat';




function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <h1>Welcome to EMCA School </h1>
        <p>Empowering young minds for a bright future</p>
      </header>

      {/* About Section */}
      <section className="about-section">
        <div className="content">
          <h2>About EMCA School</h2>
          <p>
            EMCA School is dedicated to providing high-quality education to students.
            We believe in fostering creativity, critical thinking, and leadership among
            our students, preparing them for the challenges of tomorrow.
            </p>
            <p> EMCA Senior Secondary School in Narayanpur is a well-known educational institution in the region, 
            offering both primary and secondary education. While there isn't extensive
             detailed public information available, such schools generally aim to provide quality
             = education with a focus on academic excellence, extracurricular activities, and overall student development.
          </p>


           <p>EMCA Senior Secondary School in Narayanpur is a reputed educational institution offering quality 
            education from primary to senior secondary levels. The school follows a comprehensive curriculum,
             likely based on the CBSE or State Board guidelines, with subjects across Science streams.
              It provides experienced faculty, modern infrastructure including classrooms, laboratories,
               and sports facilities, and emphasizes extracurricular activities. The admission process 
               typically involves application forms, document submission, and possibly an entrance test.
                For precise details, direct contact with the school is recommended.</p>
          
        </div>
        <div className="image">
          <img
            src={campus}
            alt="Campus"
            className='Message-image'
          />
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h2>Our Programs</h2>
        <div className="programs">
          <div className="program">
            <h3>Primary Education</h3>
            <p>Our primary education focuses on building a strong foundation in core subjects.</p>
          </div>
          <div className="program">
            <h3>Secondary Education</h3>
            <p>We offer a variety of subjects to prepare students for the future.</p>
          </div>
          <div className="program">
            <h3>Extracurricular Activities</h3>
            <p>From sports to arts, we encourage our students to participate in various activities.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>School Gallery</h2>
        <div className="gallery">
          <img
            src={campus1}
            alt="Campus1"
            className='Message-image'
          />
          <img
            src={staff}
            alt="staff"
            className='Message-image'
          />
          <img
            src={children}
            alt="children"
            className='Message-image'
          />
        </div>
      </section>

      <div className='chatbox'>
        <div><Link to="/chat">💬</Link></div>
      </div>

      {/* Contact Section */}
      <footer className="footer">
        <h2>Contact Us</h2>
        <p>Email:emcanarayanpur@gmail.com</p>
        <p>Phone: 7690939898</p>
      </footer>
    </div>
  );
}


 

export default App;

