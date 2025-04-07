import React, { useState } from "react";

const studentsData = [
    { id: 1, name: "Aman Verma", class: "10", phone: "9876543210", address: "Delhi, India", details: "A+ student, excels in Math and Science." },
    { id: 2, name: "Priya Sharma", class: "9", phone: "9988776655", address: "Mumbai, India", details: "Good at literature and history." },
    { id: 3, name: "Rahul Mehta", class: "12", phone: "9123456789", address: "Pune, India", details: "Active in sports and cultural events." },
    { id: 4, name: "Sonia Gupta", class: "11", phone: "8899776655", address: "Kolkata, India", details: "Excellent in Science and Computer Science." },
    { id: 5, name: "Vikas Yadav", class: "8", phone: "9090909090", address: "Jaipur, India", details: "Strong analytical skills, loves problem-solving." },
];

const TeacherStudent = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Student List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Student ID</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Class</th>
                            <th className="py-3 px-6 text-left">Phone</th>
                            <th className="py-3 px-6 text-left">Address</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData.map((student) => (
                            <tr key={student.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{student.id}</td>
                                <td className="py-4 px-6">{student.name}</td>
                                <td className="py-4 px-6">{student.class}</td>
                                <td className="py-4 px-6">{student.phone}</td>
                                <td className="py-4 px-6">{student.address}</td>
                                <td className="py-4 px-6 text-center">
                                    <button
                                        onClick={() => setSelectedStudent(student)}
                                        className="bg-cyan-500 text-white px-3 py-1 rounded hover:bg-cyan-600"
                                    >
                                        👁 View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Student Details Modal */}
            {selectedStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-xl font-bold mb-3">{selectedStudent.name}'s Details</h3>
                        <p><strong>Student ID:</strong> {selectedStudent.id}</p>
                        <p><strong>Class:</strong> {selectedStudent.class}</p>
                        <p><strong>Phone:</strong> {selectedStudent.phone}</p>
                        <p><strong>Address:</strong> {selectedStudent.address}</p>
                        <p><strong>Details:</strong> {selectedStudent.details}</p>
                        <button
                            onClick={() => setSelectedStudent(null)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeacherStudent;
