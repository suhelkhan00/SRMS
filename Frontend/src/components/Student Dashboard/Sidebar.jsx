import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import ProfileImage from "/public/icons/logo.png";

export function StudentSidebar({ activeSection, setActiveSection }) {
    const menuItems = [
        { name: "Dashboard", path: "/student/dashboard", icon: "🏠" },
        { name: "Syllabus", path: "/student/syllabus", icon: "📚" },
        { name: "Registration", path: "/student/registration", icon: "📝" },
        { name: "Attendance", path: "/student/attendance", icon: "📊" },
        { name: "Teachers Info", path: "/student/teachers", icon: "🎓" },
        { name: "Documents Upload", path: "/student/documents", icon: "📂" },
        { name: "Grades & Results", path: "/student/grades", icon: "📑" },
        { name: "School Fees", path: "/student/payment", icon: "💵" },
        { name: "Announcement", path: "/student/announcements", icon: "🔔" },
        { name: "Support / Help", path: "/student/support", icon: "💬" },
    ];

    return (
        <div className="fixed md:relative w-72 bg-cyan-50 h-screen overflow-hidden shadow-md transition-transform duration-300 -translate-x-full md:translate-x-0">
            <div className="h-20 md:h-16 flex items-center justify-center px-6 border-b border-cyan-100">
                <h1 className="text-cyan-500 text-3xl font-bold">EMCA <span className="font-medium">School</span></h1>
            </div>

            <div className="p-6 pt-3 flex flex-col h-[calc(100%-5rem)]">
                <div className="space-y-2 flex-grow mt-4 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link to={item.path} key={item.name} onClick={() => setActiveSection(item.name)}>
                            <button
                                className={`flex items-center cursor-pointer gap-3 w-full text-sm font-semibold py-2 px-4 rounded-lg transition-colors
                                    ${activeSection === item.name ? "bg-cyan-500 text-white" : "text-gray-700 hover:bg-cyan-100"}`}
                            >
                                <span>{item.icon} {item.name}</span>
                            </button>
                        </Link>
                    ))}
                </div>

                <div className="border-cyan-400 rounded-2xl border mt-6 px-4 py-2 bg-cyan-400 flex items-center justify-between">
                    <div className="flex cursor-pointer justify-center items-center">
                        <img src={ProfileImage} className="w-10 h-10 rounded-full" alt="Student" />
                        <button className="ml-3">
                            <Link to="/student/dashboard">
                                <h6 className="text-md font-semibold">Jasveer Vaishnav</h6>
                                <span className="text-sm text-gray-500">Class 12</span>
                            </Link>
                        </button>
                    </div>
                    <button>
                        <Link to="/login">
                            <FiLogOut className="text-cyan-100 hover:text-white text-xl" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StudentSidebar;
