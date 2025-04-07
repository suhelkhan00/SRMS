import React, { useState } from "react";

const classes = [
    { id: 1, name: "Class 6", subjects: ["Maths", "Science"] },
    { id: 2, name: "Class 7", subjects: ["English", "Social Science"] },
    { id: 3, name: "Class 8", subjects: ["Hindi", "Maths"] },
];

const initialHomework = [
    { id: 1, className: "Class 6", subject: "Maths", dueDate: "2025-03-01", submissionDate: "2025-03-05", status: "Pending" },
    { id: 2, className: "Class 7", subject: "English", dueDate: "2025-02-28", submissionDate: "2025-03-03", status: "Checked" },
];

const TeacherHomework = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [filteredHomework, setFilteredHomework] = useState(initialHomework);
    const [homeworkList, setHomeworkList] = useState(initialHomework);

    const assignHomework = (e) => {
        e.preventDefault();
        const className = e.target.className.value;
        const subject = e.target.subject.value;
        const dueDate = e.target.dueDate.value;
        const submissionDate = e.target.submissionDate.value;

        const newHomework = { id: Date.now(), className, subject, dueDate, submissionDate, status: "Pending" };
        setHomeworkList([...homeworkList, newHomework]);
        setFilteredHomework([...homeworkList, newHomework]);
    };

    const filterHomework = () => {
        let filtered = homeworkList;
        if (selectedClass) filtered = filtered.filter(hw => hw.className === selectedClass);
        if (selectedSubject) filtered = filtered.filter(hw => hw.subject === selectedSubject);
        setFilteredHomework(filtered);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Assign Homework</h2>
            <form className="mb-6" onSubmit={assignHomework}>
                <div className="grid grid-cols-2 gap-4">
                    <select name="className" className="border p-2 rounded">
                        {classes.map((cls) => (
                            <option key={cls.id} value={cls.name}>{cls.name}</option>
                        ))}
                    </select>
                    <select name="subject" className="border p-2 rounded">
                        {classes.find(cls => cls.name === selectedClass)?.subjects.map((sub, index) => (
                            <option key={index} value={sub}>{sub}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <input type="date" name="dueDate" className="border p-2 rounded" required />
                    <input type="date" name="submissionDate" className="border p-2 rounded" required />
                </div>
                <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded-md mt-4">Assign</button>
            </form>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Previous Homework</h2>
            <div className="flex gap-4 mb-4">
                <select onChange={(e) => setSelectedClass(e.target.value)} className="border p-2 rounded">
                    <option value="">All Classes</option>
                    {classes.map((cls) => (
                        <option key={cls.id} value={cls.name}>{cls.name}</option>
                    ))}
                </select>
                <select onChange={(e) => setSelectedSubject(e.target.value)} className="border p-2 rounded">
                    <option value="">All Subjects</option>
                    {classes.flatMap(cls => cls.subjects).map((sub, index) => (
                        <option key={index} value={sub}>{sub}</option>
                    ))}
                </select>
                <button onClick={filterHomework} className="bg-cyan-600 text-white px-4 py-2 rounded">Filter</button>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-cyan-600 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Class</th>
                        <th className="py-3 px-6 text-left">Subject</th>
                        <th className="py-3 px-6 text-left">Due Date</th>
                        <th className="py-3 px-6 text-left">Submission Date</th>
                        <th className="py-3 px-6 text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredHomework.map((hw) => (
                        <tr key={hw.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">{hw.className}</td>
                            <td className="py-4 px-6">{hw.subject}</td>
                            <td className="py-4 px-6">{hw.dueDate}</td>
                            <td className="py-4 px-6">{hw.submissionDate}</td>
                            <td className="py-4 px-6 text-center">
                                <button
                                    onClick={() => {
                                        const updatedHomework = homeworkList.map(item => item.id === hw.id ? { ...item, status: item.status === "Pending" ? "Checked" : "Pending" } : item);
                                        setHomeworkList(updatedHomework);
                                        setFilteredHomework(updatedHomework);
                                    }}
                                    className={`px-3 py-1 rounded ${hw.status === "Checked" ? "bg-green-500" : "bg-red-500"} text-white`}
                                >
                                    {hw.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherHomework;
