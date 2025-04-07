import React from 'react';
// import './About.css';
import principal from "/image1.jpg"
import director from "/director.jpg"

function About() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <h1>About EMCA School</h1>
        <p>Dedicated to shaping young minds for a better future</p>
      </header>

      {/* About the School Section */}
      <section className="school-info">
        <h2>About the School</h2>
        <p>
          EMCA School, established in 2010, is a progressive institution that focuses on holistic
          development. We provide a nurturing environment where students can grow academically, socially,
          and emotionally. Our faculty members are experienced and dedicated to creating an enriching
          learning experience for every student. We emphasize on a balanced education that combines
          traditional values with modern learning techniques.

          EMCA NARAYANPUR Co-Educational Residential Sr. Sec. School, Affiliated to RBSE (CBSE PATTERN) PRE-PRIMARY to 12th (Science)
          PRE-PRIMARY| MIDDLE| SECONDARY| SENIOR SECONDARY Kolahera Road narayanpur,Kotputli,Raj.
        </p>
      </section>

      {/* Director's Message Section */}
      <section className="director-message">
        <h2>Director Message</h2>
        <div className="message">
          <img src={director} 
            alt="director"
            className="message-image" />
          <div className="message-text">
            <p>
              "At EMCA School, we believe in nurturing young minds and preparing them for future challenges.
              Our aim is to cultivate a learning atmosphere that encourages creativity, critical thinking, and
              leadership skills. Together, we strive to provide each child with the best possible education."
            </p>
            <p className="director-name">- Mr PM Swami, Director</p>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="principal-message">
        <h2>Principal Message</h2>
        <div className="message">
          <img
            src={principal}
            alt="Principal"
            className="message-image"
          />
          <div className="message-text">
            <p>
              "As the Principal of EMCA School, I am committed to providing the highest standards of
              education to our students. We focus on both academic excellence and personal development,
              ensuring that each student is well-prepared for the future."
            </p>
            <p className="principal-name">- Mrs Manju Ambia, Principal</p>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="activities">
        <h2>Our Activities</h2>
        <div className="activity-list">
          <div className="activity">
            <h3>Sports</h3>
            <p>
              EMCA School offers a variety of sports programs, including soccer, basketball, cricket,
              and athletics. These activities promote teamwork, discipline, and physical fitness.
            </p>
          </div>
          <div className="activity">
            <h3>Arts & Culture</h3>
            <p>
              We encourage creativity through various arts programs such as music, dance, drama, and painting.
              Our annual cultural fest is an event that highlights the talents of our students.
            </p>
          </div>
          <div className="activity">
            <h3>Community Service</h3>
            <p>
              Our students are actively involved in social service projects, including charity events and
              environmental initiatives. We believe in fostering a sense of responsibility and empathy in our youth.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="about-footer">
        <p>For more information, feel free to contact us at <a href="mailto:contact@emcaschool.com">emcanarayanpur@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default About;

