import React, { useState } from "react";

const ClassManagement = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [newClass, setNewClass] = useState("");
    const [students, setStudents] = useState([
        { id: 1, name: "Rahul Sharma", class: "10", passed: true },
        { id: 2, name: "Priya Verma", class: "10", passed: false },
        { id: 3, name: "Amit Gupta", class: "10", passed: true },
    ]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSelectClass = (e) => setSelectedClass(e.target.value);
    const handleSelectNewClass = (e) => setNewClass(e.target.value);

    const handleStudentSelection = (id) => {
        setSelectedStudents((prev) =>
            prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
        );
    };

    const promoteStudents = () => {
        if (!newClass) {
            alert("Please select the class to promote students to.");
            return;
        }
        console.log("Promoted Students:", selectedStudents, "to Class:", newClass);
        alert("Students promoted successfully!");
        setShowModal(false);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Class Management</h2>

            <div className="mb-4">
                <label className="block font-medium text-gray-700">Select Class:</label>
                <select value={selectedClass} onChange={handleSelectClass} className="w-full p-2 border rounded">
                    <option value="">-- Select Class --</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                </select>
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Promote Students
            </button>

            {showModal && (
                <div className="inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h3 className="text-xl font-semibold mb-4">Promote Students</h3>

                        <label className="block font-medium text-gray-700">Promote To:</label>
                        <select value={newClass} onChange={handleSelectNewClass} className="w-full p-2 border rounded mb-4">
                            <option value="">-- Select New Class --</option>
                            <option value="11-Science">Class 11 - Science</option>
                            <option value="11-Commerce">Class 11 - Commerce</option>
                            <option value="11-Arts">Class 11 - Arts</option>
                            <option value="11-Agriculture">Class 11 - Agriculture</option>
                            <option value="12">Class 12</option>
                        </select>

                        <h4 className="font-medium text-gray-700 mb-2">Eligible Students:</h4>
                        <ul>
                            {students.filter(s => s.passed).map((student) => (
                                <li key={student.id} className="flex justify-between items-center py-2 border-b">
                                    <span>{student.name}</span>
                                    <input
                                        type="checkbox"
                                        checked={selectedStudents.includes(student.id)}
                                        onChange={() => handleStudentSelection(student.id)}
                                    />
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 flex justify-between">
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded">
                                Cancel
                            </button>
                            <button onClick={promoteStudents} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                Confirm Promotion
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassManagement;
