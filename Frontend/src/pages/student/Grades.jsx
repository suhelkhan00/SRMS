import React from "react";
import { Bar } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const studentGrades = [
    { subject: "English", marks: 85 },
    { subject: "Hindi", marks: 78 },
    { subject: "Maths", marks: 92 },
    { subject: "Science", marks: 88 },
    { subject: "Social Science", marks: 74 },
];

const downloadReportCard = () => {
    const doc = new jsPDF();
    doc.text("Student Report Card", 20, 20);
    studentGrades.forEach((item, index) => {
        doc.text(`${item.subject}: ${item.marks}/100`, 20, 30 + index * 10);
    });
    doc.save("ReportCard.pdf");
};

const StudentGrades = () => {
    const chartData = {
        labels: studentGrades.map((subject) => subject.subject),
        datasets: [
            {
                label: "Marks",
                data: studentGrades.map((subject) => subject.marks),
                backgroundColor: "#06b6d4",
            },
        ],
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Student Grades</h2>

            {/* Grades Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Subject</th>
                            <th className="py-3 px-6 text-center">Marks</th>
                            <th className="py-3 px-6 text-center">Performance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentGrades.map((subject, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50 group">
                                <td className="py-4 px-6 text-lg text-gray-700 relative">
                                    {subject.subject}
                                    <span className="absolute left-0 -bottom-6 text-sm text-gray-500 hidden group-hover:block">
                                        (5 Tests Conducted)
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="relative w-32 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-4 bg-cyan-500 transition-all"
                                            style={{ width: `${subject.marks}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-gray-700 font-medium mt-1 block">{subject.marks}/100</span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    {subject.marks >= 90 ? "⭐ Top Performer" :
                                        subject.marks >= 75 ? "👍 Good Performance" :
                                            "📉 Needs Improvement"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Grade Chart */}
            <div className="mt-6 flex justify-center">
                <div className="w-2/3">
                    <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </div>
            </div>

            {/* Download Report Card */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={downloadReportCard}
                    className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
                >
                    📥 Download Report Card
                </button>
            </div>
        </div>
    );
};

export default StudentGrades;