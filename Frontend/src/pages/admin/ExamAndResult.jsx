import React, { useState } from "react";
import { jsPDF } from "jspdf";

const ExamAndResult = () => {
    const [exams, setExams] = useState([
        { id: 1, subject: "Maths", className: "10", teacher: "Mr. Sharma", date: "2025-03-10" },
        { id: 2, subject: "Science", className: "9", teacher: "Ms. Verma", date: "2025-03-12" },
    ]);

    const [results, setResults] = useState([
        { id: 1, student: "Rohan Kumar", className: "10", score: 85, date: "2025-03-20" },
        { id: 2, student: "Neha Sharma", className: "9", score: 78, date: "2025-03-22" },
    ]);

    const deleteExam = (id) => {
        setExams(exams.filter((exam) => exam.id !== id));
    };

    const deleteResult = (id) => {
        setResults(results.filter((result) => result.id !== id));
    };

    const downloadReport = () => {
        const doc = new jsPDF();
        doc.text("Exam Results", 20, 20);
        results.forEach((result, index) => {
            doc.text(`${result.student} - ${result.className}: ${result.score}/100`, 20, 30 + index * 10);
        });
        doc.save("ExamResults.pdf");
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Exam & Result Management</h2>

            {/* Exam Table */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Scheduled Exams</h3>
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Subject</th>
                            <th className="py-3 px-6 text-left">Class</th>
                            <th className="py-3 px-6 text-left">Teacher</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((exam) => (
                            <tr key={exam.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{exam.subject}</td>
                                <td className="py-4 px-6">{exam.className}</td>
                                <td className="py-4 px-6">{exam.teacher}</td>
                                <td className="py-4 px-6">{exam.date}</td>
                                <td className="py-4 px-6 text-center">
                                    <button onClick={() => deleteExam(exam.id)} className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Result Table */}
            <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Student Results</h3>
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Student</th>
                            <th className="py-3 px-6 text-left">Class</th>
                            <th className="py-3 px-6 text-left">Score</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{result.student}</td>
                                <td className="py-4 px-6">{result.className}</td>
                                <td className="py-4 px-6">{result.score}/100</td>
                                <td className="py-4 px-6">{result.date}</td>
                                <td className="py-4 px-6 text-center">
                                    <button onClick={() => deleteResult(result.id)} className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Download Results Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={downloadReport}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    📥 Download Exam Results
                </button>
            </div>
        </div>
    );
};

export default ExamAndResult;
