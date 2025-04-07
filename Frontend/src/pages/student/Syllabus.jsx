import React from "react";

const syllabusData = [
    { subject: "English", time: "9:00 AM - 10:00 AM", teacher: "Mr. Sharma" },
    { subject: "Hindi", time: "10:15 AM - 11:15 AM", teacher: "Ms. Verma" },
    { subject: "Maths", time: "11:30 AM - 12:30 PM", teacher: "Mr. Gupta" },
    { subject: "Science", time: "1:30 PM - 2:30 PM", teacher: "Dr. Mehta" },
    { subject: "Social Science", time: "2:45 PM - 3:45 PM", teacher: "Ms. Reddy" },
];

const StudentSyllabus = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Class Timetable</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Subject</th>
                            <th className="py-3 px-6 text-center">Time</th>
                            <th className="py-3 px-6 text-center">Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {syllabusData.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-700">{item.subject}</td>
                                <td className="py-4 px-6 text-center text-gray-700">{item.time}</td>
                                <td className="py-4 px-6 text-center text-gray-700">{item.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentSyllabus;