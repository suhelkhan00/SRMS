import React from "react";

const yourSubjects = [
    { name: "Mathematics", class: "10th" },
    { name: "Physics", class: "11th" },
];

const allSubjects = [
    { name: "Mathematics", teacher: "Mr. Sharma" },
    { name: "Physics", teacher: "Ms. Verma" },
    { name: "Chemistry", teacher: "Dr. Kumar" },
    { name: "Biology", teacher: "Ms. Rao" },
    { name: "English", teacher: "Mr. Gupta" },
];

const TeacherSubjects = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
                Subjects
            </h2>

            {/* Your Subjects Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Your Subjects</h3>
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Subject Name</th>
                            <th className="py-3 px-6 text-center">Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yourSubjects.map((subject, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-700">{subject.name}</td>
                                <td className="py-4 px-6 text-center">{subject.class}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* All Subjects Section */}
            <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">All Subjects</h3>
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Subject Name</th>
                            <th className="py-3 px-6 text-center">Subject Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSubjects.map((subject, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-700">{subject.name}</td>
                                <td className="py-4 px-6 text-center">{subject.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherSubjects;
