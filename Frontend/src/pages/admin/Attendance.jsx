import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { FaDownload, FaEdit, FaSave } from "react-icons/fa";

const initialAttendance = [
    { id: 1, name: "Aman Sharma", class: "10", date: "2025-02-12", status: "Present" },
    { id: 2, name: "Priya Patel", class: "9", date: "2025-02-12", status: "Absent" },
    { id: 3, name: "Rahul Verma", class: "8", date: "2025-02-12", status: "Present" },
];

const Attendance = () => {
    const [attendance, setAttendance] = useState(initialAttendance);
    const [editMode, setEditMode] = useState(null);

    // Handle Status Change
    const handleStatusChange = (id, newStatus) => {
        setAttendance((prev) =>
            prev.map((record) => (record.id === id ? { ...record, status: newStatus } : record))
        );
    };

    // Generate Attendance Report (PDF)
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Monthly Attendance Report", 20, 20);
        attendance.forEach((record, index) => {
            doc.text(`${record.name} (Class ${record.class}): ${record.status}`, 20, 30 + index * 10);
        });
        doc.save("Attendance_Report.pdf");
    };

    // Export Attendance Data as CSV
    const exportCSV = () => {
        const csvContent =
            "data:text/csv;charset=utf-8," +
            ["Name,Class,Date,Status", ...attendance.map((r) => `${r.name},${r.class},${r.date},${r.status}`)].join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Attendance_Report.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Attendance Management</h2>

            {/* Attendance Table */}
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-cyan-600 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Student Name</th>
                        <th className="py-3 px-6 text-left">Class</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-center">Status</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record) => (
                        <tr key={record.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">{record.name}</td>
                            <td className="py-4 px-6">{record.class}</td>
                            <td className="py-4 px-6">{record.date}</td>
                            <td className="py-4 px-6 text-center">
                                {editMode === record.id ? (
                                    <select
                                        value={record.status}
                                        onChange={(e) => handleStatusChange(record.id, e.target.value)}
                                        className="border rounded px-2 py-1"
                                    >
                                        <option value="Present">Present</option>
                                        <option value="Absent">Absent</option>
                                        <option value="Late">Late</option>
                                    </select>
                                ) : (
                                    <span
                                        className={`px-2 py-1 rounded ${record.status === "Present"
                                            ? "bg-green-200 text-green-700"
                                            : record.status === "Absent"
                                                ? "bg-red-200 text-red-700"
                                                : "bg-yellow-200 text-yellow-700"
                                            }`}
                                    >
                                        {record.status}
                                    </span>
                                )}
                            </td>
                            <td className="py-4 px-6 text-center">
                                {editMode === record.id ? (
                                    <button
                                        onClick={() => setEditMode(null)}
                                        className="text-green-600 hover:text-green-800 mx-2"
                                    >
                                        <FaSave />
                                    </button>
                                ) : (
                                    <button onClick={() => setEditMode(record.id)} className="text-blue-600 hover:text-blue-800 mx-2">
                                        <FaEdit />
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Export Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
                <button onClick={generatePDF} className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
                    <FaDownload className="mr-2" /> Export PDF
                </button>
                <button onClick={exportCSV} className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
                    <FaDownload className="mr-2" /> Export CSV
                </button>
            </div>
        </div>
    );
};

export default Attendance;
