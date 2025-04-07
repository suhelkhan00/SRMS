import React from "react";
// Import CSS file

let facilities = [
  {
    title: "Modern Classrooms",
    description: "Spacious, well-lit classrooms with smartboards for interactive learning.",
    image: "../../public/images/classroom.avif"
  },
  {
    title: "Science Laboratories",
    description: "Well-equipped labs for Physics, Chemistry, and Biology experiments.",
    image: "../../public/images/ScienceLab.jpg"
  },
  {
    title: "Library",
    description: "A vast collection of books, digital resources, and quiet reading areas.",
    image: "../../public/images/library.webp"
  },
  {
    title: "Sports Complex",
    description: "Playgrounds for football, basketball, cricket, and indoor sports.",
    image: "../../public/images/SportGroundKids.jpg"
  },
  {
    title: "Computer Lab",
    description: "High-speed internet and modern computers for IT and programming classes.",
    image: "../../public/images/ComputerLab.jpg"
  },
  {
    title: "Transport Facility",
    description: "Safe and reliable bus services covering various routes.",
    image: "../../public/images/transport.jpg"
  },
  {
    title: "Hostel Facility",
    description: "Spacious rooms, secure stay, tasty meals, hygienic kitchen, friendly service..",
    image: "../../public/images/hostel.webp"
  }
];

const FacilityPage = () => {
  return (
    <div className="facility-container">
      {/* Header Section */}
      <header className="facility-header">
        Our Facilities
      </header>

      {/* Facilities Grid */}
      <section className="facility-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <img src={facility.image} alt={facility.title} />
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="facility-footer">
        &copy; {new Date().getFullYear()} EMCA Sr. Sec. School. All Rights Reserved.
      </footer>
    </div>
  );
};

export default FacilityPage;
