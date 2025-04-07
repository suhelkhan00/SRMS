import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

// Dummy data for testing
const dummyAttendance = [
    { subject: "Mathematics", present: 18, total: 20, details: [{ date: "2024-02-01", status: "Present" }, { date: "2024-02-02", status: "Absent" }] },
    { subject: "Science", present: 15, total: 20, details: [{ date: "2024-02-01", status: "Present" }, { date: "2024-02-03", status: "Present" }] },
    { subject: "English", present: 19, total: 20, details: [{ date: "2024-02-02", status: "Present" }, { date: "2024-02-04", status: "Present" }] }
];

function StudentAttendance() {
    const [attendance, setAttendance] = useState([]);
    const [openRows, setOpenRows] = useState({});
    const [view, setView] = useState("table");

    useEffect(() => {
        // Fetch attendance data from API (replace with actual API call)
        setAttendance(dummyAttendance);
    }, []);

    const toggleRow = (index) => {
        setOpenRows((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const calculatePercentage = (present, total) => ((present / total) * 100).toFixed(2);

    const chartData = {
        labels: attendance.map((item) => item.subject),
        datasets: [
            {
                label: "Attendance Percentage",
                data: attendance.map((item) => calculatePercentage(item.present, item.total)),
                backgroundColor: "#06b6d4",
                borderRadius: 8,
            },
        ],
    };

    return (
        <div className="w-full p-4">
            {/* Header */}
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-semibold text-cyan-500">Attendance</h1>
                <div className="space-x-2">
                    <button onClick={() => setView("table")} className={`px-4 py-2 text-sm font-medium rounded-md ${view === "table" ? "bg-cyan-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                        Table View
                    </button>
                    <button onClick={() => setView("chart")} className={`px-4 py-2 text-sm font-medium rounded-md ${view === "chart" ? "bg-cyan-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                        Chart View
                    </button>
                </div>
            </div>

            {/* Attendance Table */}
            {view === "table" && (
                <div className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-cyan-500 text-white">
                            <tr>
                                <th className="px-4 py-2">Subject</th>
                                <th className="px-4 py-2">Present</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Percentage</th>
                                <th className="px-4 py-2 text-center">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{item.subject}</td>
                                    <td className="px-4 py-3">{item.present}</td>
                                    <td className="px-4 py-3">{item.total}</td>
                                    <td className="px-4 py-3">{calculatePercentage(item.present, item.total)}%</td>
                                    <td className="px-4 py-3 text-center">
                                        <button onClick={() => toggleRow(index)} className="text-cyan-500 hover:text-cyan-700">
                                            {openRows[index] ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Expandable Rows */}
                    {attendance.map((item, index) => (
                        openRows[index] && (
                            <div key={index} className="px-6 py-4 border-t">
                                <h2 className="text-md font-semibold text-gray-600">Attendance Details - {item.subject}</h2>
                                <table className="w-full mt-2 text-sm">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.details.map((detail, i) => (
                                            <tr key={i} className="border-b">
                                                <td className="px-4 py-2">{detail.date}</td>
                                                <td className={`px-4 py-2 font-medium ${detail.status === "Present" ? "text-green-500" : "text-red-500"}`}>
                                                    {detail.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    ))}
                </div>
            )}

            {/* Attendance Chart */}
            {view === "chart" && (
                <div className="flex justify-center">
                    <div className="mt-6 w-200 bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Overview</h2>
                        <Bar data={chartData} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentAttendance