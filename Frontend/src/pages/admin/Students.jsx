import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// import { Modal, Button } from "@/components/ui"; // Import UI components (if using shadcn/ui)

const initialStudents = [
    { id: 1, name: "John Doe", class: "10", phone: "9876543210", address: "New York" },
    { id: 2, name: "Jane Smith", class: "9", phone: "8765432109", address: "Los Angeles" },
    { id: 3, name: "Sam Wilson", class: "8", phone: "7654321098", address: "Chicago" },
];

const Students = () => {
    const [students, setStudents] = useState(initialStudents);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Handle Edit Student
    const handleEditClick = (student) => {
        setSelectedStudent(student);
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        setStudents((prevStudents) =>
            prevStudents.map((s) =>
                s.id === selectedStudent.id ? selectedStudent : s
            )
        );
        setShowEditModal(false);
    };

    // Handle Delete Student
    const handleDeleteClick = (student) => {
        setSelectedStudent(student);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        setStudents((prevStudents) =>
            prevStudents.filter((s) => s.id !== selectedStudent.id)
        );
        setShowDeleteModal(false);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Manage Students</h2>

            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-cyan-600 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Student ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Class</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                        <th className="py-3 px-6 text-left">Address</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-6">{student.id}</td>
                            <td className="py-4 px-6">{student.name}</td>
                            <td className="py-4 px-6">{student.class}</td>
                            <td className="py-4 px-6">{student.phone}</td>
                            <td className="py-4 px-6">{student.address}</td>
                            <td className="py-4 px-6 text-center">
                                <button onClick={() => handleEditClick(student)} className="text-blue-600 hover:text-blue-800 mx-2">
                                    <FaEdit />
                                </button>
                                <button onClick={() => handleDeleteClick(student)} className="text-red-600 hover:text-red-800 mx-2">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Student Modal */}
            {showEditModal && (
                <Modal title="Edit Student" onClose={() => setShowEditModal(false)}>
                    <div className="p-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            value={selectedStudent.name}
                            onChange={(e) => setSelectedStudent({ ...selectedStudent, name: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                        <label className="block mt-4 mb-2">Class</label>
                        <input
                            type="text"
                            value={selectedStudent.class}
                            onChange={(e) => setSelectedStudent({ ...selectedStudent, class: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                        <label className="block mt-4 mb-2">Phone</label>
                        <input
                            type="text"
                            value={selectedStudent.phone}
                            onChange={(e) => setSelectedStudent({ ...selectedStudent, phone: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                        <label className="block mt-4 mb-2">Address</label>
                        <input
                            type="text"
                            value={selectedStudent.address}
                            onChange={(e) => setSelectedStudent({ ...selectedStudent, address: e.target.value })}
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
                <Modal title="Delete Student" onClose={() => setShowDeleteModal(false)}>
                    <p className="p-4 text-gray-700">Are you sure you want to delete {selectedStudent.name}?</p>
                    <div className="flex justify-end space-x-4 p-4">
                        <Button onClick={() => setShowDeleteModal(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</Button>
                        <Button onClick={handleConfirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">Delete</Button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Students;
