import React, { useState } from "react";
import { Link } from "react-router-dom"

const StudentProfile = () => {
    const [student, setStudent] = useState({
        name: "John Doe",
        studentID: "STU12345",
        class: "10th Grade",
        section: "A",
        rollNumber: "21",
        dob: "2008-05-14",
        gender: "Male",
        bloodGroup: "O+",
        email: "john.doe@example.com",
        phone: "+91 9876543210",
        parentContact: "+91 9123456789",
        address: "123, Main Street, City",
        attendance: "92%",
        grades: {
            English: "A",
            Hindi: "B+",
            Maths: "A+",
            Science: "A",
            SocialScience: "B",
        },
    });

    return (
        <>
            <div className='flex-1 overflow-y-auto bg-gray-100'>
                <div className="min-h-screen bg-white px-4 pt-16 sm:pt-6 pb-10">
                    <div className="fixed bottom-4 left-72 space-y-2 z-50"></div>
                    <div className='max-w-2xl mx-auto mb-4'>
                        <Link to="/dashboard">
                            <button className='flex cursor-pointer items-center text-cyan-500 hover:text-cyan-700 transitions-colors duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 mr-2">
                                    <path d="m12 19-7-7 7-7"></path>
                                    <path d="M19 12H5"></path>
                                </svg>
                                <span>Back to Home</span>
                            </button>
                        </Link>
                    </div>


                    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Student Profile</h2>

                        {/* Basic Information */}
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">Basic Information</h3>
                            <p><strong>Name:</strong> {student.name}</p>
                            <p><strong>Student ID:</strong> {student.studentID}</p>
                            <p><strong>Class & Section:</strong> {student.class} - {student.section}</p>
                            <p><strong>Roll Number:</strong> {student.rollNumber}</p>
                            <p><strong>Date of Birth:</strong> {student.dob}</p>
                            <p><strong>Gender:</strong> {student.gender}</p>
                            <p><strong>Blood Group:</strong> {student.bloodGroup}</p>
                        </div>

                        {/* Contact Information */}
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">Contact Information</h3>
                            <p><strong>Email:</strong> {student.email}</p>
                            <p><strong>Phone:</strong> {student.phone}</p>
                            <p><strong>Parent Contact:</strong> {student.parentContact}</p>
                            <p><strong>Address:</strong> {student.address}</p>
                        </div>

                        {/* Academic Details */}
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-lg font-semibold text-gray-600">Academic Details</h3>
                            <p><strong>Attendance:</strong> {student.attendance}</p>
                            <h4 className="mt-2 font-medium">Grades</h4>
                            <ul className="list-disc list-inside">
                                {Object.entries(student.grades).map(([subject, grade], index) => (
                                    <li key={index}><strong>{subject}:</strong> {grade}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Settings & Support */}
                        <div className="flex justify-between mt-6">
                            <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
                                Edit Profile
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentProfile;