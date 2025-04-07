import { useState } from "react";
import Navbar from "../../components/Student Dashboard/Navbar"
import Sidebar from "../../components/Student Dashboard/Sidebar"
import StudentAttendance from "./Attendance";

export default function App() {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const renderSection = () => {
        switch (activeSection) {
            case "Dashboard":
                return <StudentDashboard />;
            case "Attendance":
                return <StudentAttendance />;
            case "Grades":
                return <Grades />;
            case "Notifications":
                return <Notifications />;
            case "Courses":
                return <Courses />;
            default:
                return <StudentDashboard />;
        }
    }

    return (
        // <Router>
        <div className="flex">
            {/* Pass activeSection state and setter to Sidebar */}
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="w-5/6">
                {/* Pass activeSection to Navbar to display current section */}
                <Navbar studentName="Jasveer Vaishnav" activeSection={activeSection} />
                {renderSection()}
            </div>
        </div>
        // </Router>
    );
}

function StudentDashboard() {
    return (
        <div className="p-4 bg-linear-to-l from-cyan-100 to-blue-100 min-h-screen">
            {/* Profile Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center mb-6">
                <img src={"https://via.placeholder.com/50"} alt="Profile" className="rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-600">Computer Science</p>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-bold mb-2">📌 Notifications</h3>
                <ul className="text-gray-700">
                    <li>- Assignment due tomorrow!</li>
                    <li>- Exam scheduled on Friday.</li>
                </ul>
            </div>

            {/* My Courses */}
            <div className="bg-white p-4 rounded shadow-md mb-6">
                <h3 className="text-lg font-bold mb-2">📚 My Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded flex justify-between">
                        <span>Mathematics</span>
                        <span className="text-blue-500">80% ⮕</span>
                    </div>
                    <div className="p-4 border rounded flex justify-between">
                        <span>Physics</span>
                        <span className="text-blue-500">75% ⮕</span>
                    </div>
                </div>
            </div>

            {/* Attendance Summary */}
            <div className="bg-white p-4 rounded shadow-md mb-6">
                <h3 className="text-lg font-bold mb-2">📊 Attendance Summary</h3>
                <p>- Overall Attendance: 85%</p>
                <p>- Subject-wise Breakdown</p>
            </div>

            {/* Grades & Performance */}
            <div className="bg-white p-4 rounded shadow-md">
                <h3 className="text-lg font-bold mb-2">🎓 Grades & Performance</h3>
                <p>- Latest Exam Score: 92%</p>
                <p>- Assignment Avg: 88%</p>
            </div>
        </div>
    );
}
