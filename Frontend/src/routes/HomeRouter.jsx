import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginScreen from "../pages/common/login";
import AdminDashboard from '../pages/admin/Dashboard';
import TeacherDashboard from '../pages/teacher/Dashboard';
import StudentDashboard from '../pages/student/Dashboard';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (!storedUser) {
                navigate('/login');
            } else {
                setUser(storedUser);
            }
            setIsLoading(false);
        }, 1000);
    }, [navigate]);

    if (isLoading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center">
                <div
                    style={{ width: `100px`, height: `100px` }}
                    className="animate-spin">
                    <div className="h-full w-full border-4 border-t-sky-500
             border-b-sky-500 rounded-[50%]">
                    </div>
                </div>
            </div>
        );
    }

    if (user?.role === 'admin') return <AdminDashboard />;
    if (user?.role === 'teacher') return <TeacherDashboard />;
    if (user?.role === 'student') return <StudentDashboard />;
    if (!user?.role && !isLoading) return <LoginScreen />

    return null;
};

export default Dashboard;