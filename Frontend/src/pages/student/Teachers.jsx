const teachers = [
    { id: 1, name: "Kabir Sing", subject: "Mathematics", mobile: "+91 9876543210" },
    { id: 2, name: "Rana Naidu", subject: "English", mobile: "+91 8765432109" },
    { id: 3, name: "Pushpa Raj", subject: "Science", mobile: "+91 7654321098" },
    { id: 4, name: "Raju Rastogi", subject: "History", mobile: "+91 6543210987" },
    { id: 5, name: "Piyush Chopra", subject: "Computer Science", mobile: "+91 5432109876" },
];

export default function StudentTeacher() {
    return (
        <div className="w-full p-4 min-h-screen bg-gray-100 overflow-x-hidden">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-semibold text-cyan-500">Teachers Information</h1>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-cyan-500 text-white">
                            <tr>
                                <th className="px-4 py-3">Teacher Name</th>
                                <th className="px-4 py-3">Subject</th>
                                <th className="px-4 py-3">Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher) => (
                                <tr key={teacher.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{teacher.name}</td>
                                    <td className="px-4 py-3">{teacher.subject}</td>
                                    <td className="px-4 py-3">{teacher.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
