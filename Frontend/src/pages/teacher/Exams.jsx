import React from "react";

const exams = [
    { subject: "Mathematics", className: "Class 10", teacher: "Mr. Sharma", date: "2025-03-10" },
    { subject: "Science", className: "Class 9", teacher: "Ms. Verma", date: "2025-03-12" },
    { subject: "English", className: "Class 12 Science", teacher: "Mrs. Kapoor", date: "2025-03-15" },
    { subject: "Commerce", className: "Class 12 Commerce", teacher: "Mr. Mehta", date: "2025-03-18" },
    { subject: "History", className: "Class 11 Arts", teacher: "Ms. Das", date: "2025-03-20" },
];

const TeacherExamSchedule = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Upcoming Exams</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Subject</th>
                            <th className="py-3 px-6 text-left">Class Name</th>
                            <th className="py-3 px-6 text-left">Teacher</th>
                            <th className="py-3 px-6 text-left">Date of Exam</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((exam, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{exam.subject}</td>
                                <td className="py-4 px-6">{exam.className}</td>
                                <td className="py-4 px-6">{exam.teacher}</td>
                                <td className="py-4 px-6">{exam.date}</td>
                                <td className="py-4 px-6 text-center">
                                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherExamSchedule;
