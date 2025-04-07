import React, { useState } from "react";
import Sidebar from "../../components/Teacher Dashboard/Sidebar"
import Navbar from "../../components/Teacher Dashboard/Navbar"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { FaUsers, FaClipboardList, FaBook, FaChalkboardTeacher } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const studentPerformance = {
    labels: ["Class A", "Class B", "Class C", "Class D"],
    datasets: [
        {
            label: "Average Marks",
            data: [85, 78, 92, 88],
            backgroundColor: "#06b6d4",
        },
    ],
};

export default function App() {
    const [activeSection, setActiveSection] = useState("Dashboard");

    return (
        // <Router>
        <div className="flex">
            {/* Pass activeSection state and setter to Sidebar */}
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="w-5/6">
                {/* Pass activeSection to Navbar to display current section */}
                <Navbar studentName="Jasveer Vaishnav" activeSection={activeSection} />
                <TeacherDashboard />
            </div>
        </div>
        // </Router>
    );
}

const TeacherDashboard = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Teacher Dashboard</h2>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="p-4 bg-cyan-100 border-l-4 border-cyan-600 rounded-lg flex items-center">
                    <FaUsers className="text-cyan-600 text-4xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Total Students</h3>
                        <p className="text-xl font-bold">120</p>
                    </div>
                </div>

                <div className="p-4 bg-yellow-100 border-l-4 border-yellow-600 rounded-lg flex items-center">
                    <FaClipboardList className="text-yellow-600 text-4xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Pending Tasks</h3>
                        <p className="text-xl font-bold">5</p>
                    </div>
                </div>

                <div className="p-4 bg-green-100 border-l-4 border-green-600 rounded-lg flex items-center">
                    <FaBook className="text-green-600 text-4xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Classes Today</h3>
                        <p className="text-xl font-bold">3</p>
                    </div>
                </div>

                <div className="p-4 bg-red-100 border-l-4 border-red-600 rounded-lg flex items-center">
                    <FaChalkboardTeacher className="text-red-600 text-4xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Meetings</h3>
                        <p className="text-xl font-bold">2</p>
                    </div>
                </div>
            </div>

            {/* Performance Chart */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-bold text-gray-700 mb-3">Student Performance Overview</h3>
                <Bar data={studentPerformance} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>

            {/* Quick Actions */}
            <div className="flex justify-center mt-6">
                <button className="bg-cyan-600 text-white px-4 py-2 mx-2 rounded-md hover:bg-cyan-700">
                    📢 Announcements
                </button>
                <button className="bg-yellow-600 text-white px-4 py-2 mx-2 rounded-md hover:bg-yellow-700">
                    📄 Upload Study Material
                </button>
                <button className="bg-green-600 text-white px-4 py-2 mx-2 rounded-md hover:bg-green-700">
                    📊 Grade Students
                </button>
            </div>
        </div>
    );
};
