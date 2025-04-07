import React, { useState } from "react";

const initialResults = [
    { id: 1, class: "10", student: "Amit Kumar", score: 85, date: "2025-02-10" },
    { id: 2, class: "12 Science", student: "Riya Sharma", score: 92, date: "2025-02-11" },
    { id: 3, class: "9", student: "Rahul Verma", score: 78, date: "2025-02-12" },
];

const TeacherGrades = () => {
    const [results, setResults] = useState(initialResults);

    const handleDelete = (id) => {
        setResults(results.filter((result) => result.id !== id));
    };

    const handleEdit = (id) => {
        const newScore = prompt("Enter new score:");
        if (newScore) {
            setResults(
                results.map((result) =>
                    result.id === id ? { ...result, score: newScore } : result
                )
            );
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Results</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Class</th>
                            <th className="py-3 px-6 text-left">Student</th>
                            <th className="py-3 px-6 text-center">Score</th>
                            <th className="py-3 px-6 text-center">Date</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6">{result.class}</td>
                                <td className="py-4 px-6">{result.student}</td>
                                <td className="py-4 px-6 text-center font-semibold">{result.score}</td>
                                <td className="py-4 px-6 text-center">{result.date}</td>
                                <td className="py-4 px-6 text-center">
                                    <button
                                        onClick={() => handleEdit(result.id)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(result.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherGrades;
