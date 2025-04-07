import React from "react";

const classData = [
    { name: "Class 1", totalStudents: 30, teacher: "Mr. Sharma" },
    { name: "Class 2", totalStudents: 28, teacher: "Ms. Verma" },
    { name: "Class 3", totalStudents: 32, teacher: "Mr. Singh" },
    { name: "Class 4", totalStudents: 31, teacher: "Ms. Patel" },
    { name: "Class 5", totalStudents: 29, teacher: "Mr. Gupta" },
    { name: "Class 6", totalStudents: 33, teacher: "Ms. Reddy" },
    { name: "Class 7", totalStudents: 27, teacher: "Mr. Kumar" },
    { name: "Class 8", totalStudents: 30, teacher: "Ms. Das" },
    { name: "Class 9", totalStudents: 35, teacher: "Mr. Khan" },
    { name: "Class 10", totalStudents: 34, teacher: "Ms. Mehta" },
    { name: "Class 11 - Science", totalStudents: 40, teacher: "Dr. Rao" },
    { name: "Class 11 - Commerce", totalStudents: 38, teacher: "Mr. Joshi" },
    { name: "Class 11 - Arts", totalStudents: 36, teacher: "Ms. Roy" },
    { name: "Class 11 - Agriculture", totalStudents: 25, teacher: "Mr. Yadav" },
    { name: "Class 12 - Science", totalStudents: 42, teacher: "Dr. Nair" },
    { name: "Class 12 - Commerce", totalStudents: 39, teacher: "Mr. Malhotra" },
    { name: "Class 12 - Arts", totalStudents: 37, teacher: "Ms. Sinha" },
    { name: "Class 12 - Agriculture", totalStudents: 28, teacher: "Mr. Thakur" },
];

const TeacherClass = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Class Name</th>
                            <th className="py-3 px-6 text-center">Total Students</th>
                            <th className="py-3 px-6 text-center">Class Teacher</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classData.map((cls, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-700">{cls.name}</td>
                                <td className="py-4 px-6 text-center text-gray-700">{cls.totalStudents}</td>
                                <td className="py-4 px-6 text-center text-gray-700">{cls.teacher}</td>
                                <td className="py-4 px-6 text-center">
                                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
                                        View Class
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

export default TeacherClass;