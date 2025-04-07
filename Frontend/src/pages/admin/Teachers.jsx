import React, { useState } from "react";
import { FaEdit, FaTrash, FaUpload } from "react-icons/fa";
// import { Modal, Button } from "@/components/ui"; // Import UI components if using shadcn/ui

const initialTeachers = [
    { id: 1, name: "Mr. Sharma", subject: "Maths", class: "10", phone: "9876543210", attendance: true },
    { id: 2, name: "Ms. Patel", subject: "Science", class: "9", phone: "8765432109", attendance: false },
    { id: 3, name: "Mr. Roy", subject: "English", class: "8", phone: "7654321098", attendance: true },
];

const Teacher = () => {
    const [teachers, setTeachers] = useState(initialTeachers);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [newTeacher, setNewTeacher] = useState({ name: "", subject: "", class: "", phone: "", attendance: false });

    // Handle Adding Teacher
    const handleAddTeacher = () => {
        setTeachers([...teachers, { ...newTeacher, id: teachers.length + 1 }]);
        setNewTeacher({ name: "", subject: "", class: "", phone: "", attendance: false });
    };

    // Handle Edit Teacher
    const handleEditClick = (teacher) => {
        setSelectedTeacher(teacher);
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        setTeachers((prevTeachers) =>
            prevTeachers.map((t) => (t.id === selectedTeacher.id ? selectedTeacher : t))
        );
        setShowEditModal(false);
    };

    // Handle Delete Teacher
    const handleDeleteClick = (teacher) => {
        setSelectedTeacher(teacher);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        setTeachers((prevTeachers) => prevTeachers.filter((t) => t.id !== selectedTeacher.id));
        setShowDeleteModal(false);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Manage Teachers</h2>

            {/* Add Teacher Form */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Add Teacher</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Teacher Name"
                        value={newTeacher.name}
                        onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        value={newTeacher.subject}
                        onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Class"
                        value={newTeacher.class}
                        onChange={(e) => setNewTeacher({ ...newTeacher, class: e.target.value })}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={newTeacher.phone}
                        onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
                        className="p-2 border rounded"
                    />
                </div>
                <button onClick={handleAddTeacher} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
                    ➕ Add Teacher
                </button>
            </div>

            {/* Teacher Table */}
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-cyan-600 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Subject</th>
                        <th className="py-3 px-6 text-left">Class</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                        <th className="py-3 px-6 text-left">Attendance</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">{teacher.id}</td>
                            <td className="py-4 px-6">{teacher.name}</td>
                            <td className="py-4 px-6">{teacher.subject}</td>
                            <td className="py-4 px-6">{teacher.class}</td>
                            <td className="py-4 px-6">{teacher.phone}</td>
                            <td className="py-4 px-6">
                                <input
                                    type="checkbox"
                                    checked={teacher.attendance}
                                    onChange={() =>
                                        setTeachers((prev) =>
                                            prev.map((t) => (t.id === teacher.id ? { ...t, attendance: !t.attendance } : t))
                                        )
                                    }
                                />
                            </td>
                            <td className="py-4 px-6 text-center">
                                <button onClick={() => handleEditClick(teacher)} className="text-blue-600 hover:text-blue-800 mx-2">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDeleteClick(teacher)} className="text-red-600 hover:text-red-800 mx-2">
                                    <FaTrash />
                                </button>
                                <button className="text-green-600 hover:text-green-800 mx-2">
                                    <FaUpload />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Teacher Modal */}
            {showEditModal && (
                <Modal title="Edit Teacher" onClose={() => setShowEditModal(false)}>
                    <div className="p-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            value={selectedTeacher.name}
                            onChange={(e) => setSelectedTeacher({ ...selectedTeacher, name: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                        <label className="block mt-4 mb-2">Subject</label>
                        <input
                            type="text"
                            value={selectedTeacher.subject}
                            onChange={(e) => setSelectedTeacher({ ...selectedTeacher, subject: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                        <label className="block mt-4 mb-2">Class</label>
                        <input
                            type="text"
                            value={selectedTeacher.class}
                            onChange={(e) => setSelectedTeacher({ ...selectedTeacher, class: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                        <div className="flex justify-end mt-4">
                            <Button onClick={handleSaveEdit} className="bg-blue-600 text-white px-4 py-2 rounded">Save</Button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <Modal title="Delete Teacher" onClose={() => setShowDeleteModal(false)}>
                    <p className="p-4 text-gray-700">Are you sure you want to delete {selectedTeacher.name}?</p>
                    <div className="flex justify-end space-x-4 p-4">
                        <Button onClick={() => setShowDeleteModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</Button>
                        <Button onClick={handleConfirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</Button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Teacher;
