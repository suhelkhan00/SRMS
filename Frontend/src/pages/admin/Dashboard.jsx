import React, { useState } from "react";
import Sidebar from "../../components/Admin Dashboard/Sidebar";
import Navbar from "../../components/Admin Dashboard/Navbar";
import { Bar, Doughnut } from "react-chartjs-2";

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
                <AdminDashboard />
            </div>
        </div>
        // </Router>
    );
}

const AdminDashboard = () => {
    // Dummy Statistics Data
    const stats = {
        students: 520,
        teachers: 40,
        classes: 12,
        subjects: 8,
        attendancePercentage: 85,
        pendingFees: 12000,
        collectedFees: 98000,
    };

    // Bar Chart Data
    const barChartData = {
        labels: ["Students", "Teachers"],
        datasets: [
            {
                label: "Count",
                data: [stats.students, stats.teachers],
                backgroundColor: ["#06b6d4", "#f97316"],
            },
        ],
    };

    // Doughnut Chart for Fee Collection
    const feeChartData = {
        labels: ["Collected Fees", "Pending Fees"],
        datasets: [
            {
                data: [stats.collectedFees, stats.pendingFees],
                backgroundColor: ["#10b981", "#ef4444"],
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h2>

            {/* Overview Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 bg-white shadow rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total Students</h3>
                    <p className="text-2xl font-bold text-cyan-600">{stats.students}</p>
                </div>
                <div className="p-4 bg-white shadow rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total Teachers</h3>
                    <p className="text-2xl font-bold text-orange-500">{stats.teachers}</p>
                </div>
                <div className="p-4 bg-white shadow rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total Classes</h3>
                    <p className="text-2xl font-bold text-blue-600">{stats.classes}</p>
                </div>
                <div className="p-4 bg-white shadow rounded-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-600">Total Subjects</h3>
                    <p className="text-2xl font-bold text-green-600">{stats.subjects}</p>
                </div>
            </div>

            {/* Graphs Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Bar Chart for Student & Teacher Statistics */}
                <div className="p-6 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-bold text-gray-600 mb-4">Student & Teacher Statistics</h3>
                    <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                </div>

                {/* Fee Collection Chart */}
                <div className="p-6 bg-white shadow rounded-lg">
                    <h3 className="text-xl font-bold text-gray-600 mb-4">Fee Collection Overview</h3>
                    <Doughnut data={feeChartData} />
                    <p className="text-sm text-gray-500 mt-2">Total Pending Fees: ₹{stats.pendingFees}</p>
                </div>
            </div>

            {/* Attendance Section */}
            <div className="mt-6 p-6 bg-white shadow rounded-lg">
                <h3 className="text-xl font-bold text-gray-600">Monthly Attendance Report</h3>
                <p className="text-lg text-gray-700 mt-2">Overall Attendance: <span className="text-green-600 font-bold">{stats.attendancePercentage}%</span></p>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                    <div
                        className="h-4 bg-green-500 rounded-full"
                        style={{ width: `${stats.attendancePercentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};