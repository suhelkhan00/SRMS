import React, { useState } from "react";

const students = [
    { id: 1, name: "Aman Verma", class: "10A" },
    { id: 2, name: "Priya Sharma", class: "10A" },
    { id: 3, name: "Rohan Mehta", class: "10A" },
    { id: 4, name: "Sneha Kapoor", class: "10A" },
    { id: 5, name: "Kabir Singh", class: "10A" },
];

const AttendanceStudents = () => {
    const [attendance, setAttendance] = useState({});

    const markAttendance = (id, status) => {
        setAttendance({ ...attendance, [id]: status });
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
                Mark Attendance
            </h2>
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-cyan-600 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Student Name</th>
                        <th className="py-3 px-6 text-center">Class</th>
                        <th className="py-3 px-6 text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6 text-lg text-gray-700">{student.name}</td>
                            <td className="py-4 px-6 text-center">{student.class}</td>
                            <td className="py-4 px-6 text-center">
                                <select
                                    className="p-2 border rounded-md"
                                    value={attendance[student.id] || ""}
                                    onChange={(e) => markAttendance(student.id, e.target.value)}
                                >
                                    <option value="">-- Select --</option>
                                    <option value="Present">✅ Present</option>
                                    <option value="Absent">❌ Absent</option>
                                    <option value="Leave">🏠 Leave</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-6">
                <button
                    className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
                    onClick={() => console.log(attendance)}
                >
                    📥 Submit Attendance
                </button>
            </div>
        </div>
    );
};

export default AttendanceStudents;
