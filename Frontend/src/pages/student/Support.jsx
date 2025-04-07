import React, { useState } from "react";

const StudentSupport = () => {
    const [faqs, setFaqs] = useState([
        { question: "How do I reset my password?", answer: "Go to settings and click 'Reset Password'.", open: false },
        { question: "Where can I check my grades?", answer: "Navigate to the Grades section on your dashboard.", open: false },
        { question: "How do I contact my teacher?", answer: "Use the 'Messages' section to communicate with teachers.", open: false },
    ]);

    const toggleFAQ = (index) => {
        setFaqs(faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Support & Help</h2>

            {/* FAQ Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b py-3 cursor-pointer" onClick={() => toggleFAQ(index)}>
                            <h4 className="text-lg font-medium flex justify-between">
                                {faq.question}
                                <span>{faq.open ? "▲" : "▼"}</span>
                            </h4>
                            {faq.open && <p className="text-gray-600 mt-2">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Need Help? Contact Us</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" required />
                    <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md" required />
                    <textarea placeholder="Describe your issue" className="w-full p-2 border rounded-md" required></textarea>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 w-full">Submit</button>
                </form>
            </div>

            {/* Support Ticket Tracking */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Check Support Ticket Status</h3>
                <input type="text" placeholder="Enter Ticket ID" className="w-full p-2 border rounded-md" />
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 mt-2 w-full">Track</button>
            </div>

            {/* Guides & Tutorials */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Guides & Tutorials</h3>
                <ul className="list-disc pl-6 text-cyan-600">
                    <li><a href="#">How to Use the Student Portal</a></li>
                    <li><a href="#">Submitting Assignments Online</a></li>
                    <li><a href="#">Checking Attendance Records</a></li>
                </ul>
            </div>

            {/* Emergency Contact Info */}
            <div>
                <h3 className="text-xl font-semibold mb-3">Emergency Contact</h3>
                <p className="text-gray-700">📞 Support Helpline: +91 12345 67890</p>
                <p className="text-gray-700">📧 Email: support@schoolportal.com</p>
            </div>
        </div>
    );
};

export default StudentSupport;