import React from "react";

const announcements = [
    { id: 1, title: "Math Test Scheduled", message: "The next math test will be on Monday at 10 AM.", date: "2025-02-15", type: "test" },
    { id: 2, title: "Homework Reminder", message: "Submit your English essay by Friday.", date: "2025-02-16", type: "homework" },
    { id: 3, title: "Science Project", message: "Group project on Renewable Energy due next week.", date: "2025-02-20", type: "project" },
    { id: 4, title: "Parent-Teacher Meeting", message: "Scheduled for Saturday at 3 PM.", date: "2025-02-18", type: "meeting" },
];

const getTypeColor = (type) => {
    switch (type) {
        case "test": return "bg-red-500";
        case "homework": return "bg-blue-500";
        case "project": return "bg-green-500";
        case "meeting": return "bg-yellow-500";
        default: return "bg-gray-500";
    }
};

const StudentAnnouncements = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">📢 Announcements</h2>
            <ul className="space-y-4">
                {announcements.map((item) => (
                    <li key={item.id} className="p-4 border rounded-lg shadow flex items-start space-x-4">
                        <div className={`w-10 h-10 flex items-center justify-center text-white text-lg font-bold rounded-full ${getTypeColor(item.type)}`}>
                            {item.type.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600">{item.message}</p>
                            <p className="text-sm text-gray-500 mt-1">📅 {item.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentAnnouncements;