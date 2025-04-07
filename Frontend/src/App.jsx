import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Website/Home";
import About from "./Website/About";
import Facility from "./Website/Facility";
import Contact from "./Website/Contact";
import Gallery from "./Website/Gallery";
import Admission from "./Website/Admission";
import Login from "./pages/common/login";
import Navbar from "./Website/Navbar";
import Footer from "./Website/Footer";

//student routes
import StudentDashboard from "./pages/student/Dashboard"
import StudentAttendance from "./pages/student/Attendance";
import UploadDocuments from "./pages/student/Documents";
import StudentGrades from "./pages/student/Grades";
import StudentPayment from "./pages/student/Payment";
import StudentProfile from "./pages/student/Profile";
import Registration from "./pages/student/Registration";
import StudentSetting from "./pages/student/Setting";
import StudentSupport from "./pages/student/Support";
import StudentSyllabus from "./pages/student/Syllabus";
import StudentTeacher from "./pages/student/Teachers";
import StudentAnnouncements from "./pages/student/Announcement";


//teacher routes
import TeacherDashboard from "./pages/teacher/Dashboard"
import TeacherAttendance from "./pages/teacher/YourAttendance";
import TeacherSupport from "./pages/teacher/Support";
import TeacherSubjects from "./pages/teacher/Subjects";
import TeacherStudent from "./pages/teacher/Student";
import TeacherResults from "./pages/teacher/Grades";
import TeacherAnnouncements from "./pages/teacher/Announcement";
import TeacherHomework from "./pages/teacher/Homework";
import TeacherProfile from "./pages/teacher/Profile";
import TeacherClass from "./pages/teacher/Classes";
import TeacherExamSchedule from "./pages/teacher/Exams";
import TeacherGrades from "./pages/teacher/Grades";
import AttendanceStudents from "./pages/teacher/Attendance";

//Admin routes
import AdminDashboard from "./pages/admin/Dashboard"
import Attendance from "./pages/admin/Attendance";
import ClassManagement from "./pages/admin/ClassManagement";
import ExamAndResult from "./pages/admin/ExamAndResult";
import PaymentCollection from "./pages/admin/PaymentCollection";
import Announcements from "./pages/admin/Announcements";
import Support from "./pages/admin/Support";
import Students from "./pages/admin/Students";
import Teacher from "./pages/admin/Teachers";
import Profile from "./pages/admin/Profile";
import Setting from "./pages/admin/Setting";

import './App.css';
import Layout from "./components/Admin Dashboard/layout";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Here `setIsLoggedIn` is the function

  return (
    <Router>
      <div className="app-container">
        {!isLoggedIn && <Navbar />}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* Passing `setIsLoggedIn` */}

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/teachers" element={<Teacher />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="/admin/class_management" element={<ClassManagement />} />
          <Route path="/admin/grades" element={<ExamAndResult />} />
          <Route path="/admin/payment" element={<PaymentCollection />} />
          <Route path="/admin/announcements" element={<Announcements />} />
          <Route path="/admin/support" element={<Support />} />
          <Route path="/admin/setting" element={<Setting />} />
          <Route path="/admin/profile" element={<Profile />} />

          {/* Teacher routes */}
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/student" element={<TeacherStudent />} />
          <Route path="/teacher/homework" element={<TeacherHomework />} />
          <Route path="/teacher/attendance" element={<AttendanceStudents />} />
          <Route path="/teacher/student_results" element={<TeacherResults />} />
          <Route path="/teacher/subjects" element={<TeacherSubjects />} />
          <Route path="/teacher/grades" element={<TeacherGrades />} />
          <Route path="/teacher/exams" element={<TeacherExamSchedule />} />
          <Route path="/teacher/classes" element={<TeacherClass />} />
          <Route path="/teacher/your-attendance" element={<TeacherAttendance />} />
          <Route path="/teacher/profile" element={<TeacherProfile />} />
          <Route path="/teacher/announcements" element={<TeacherAnnouncements />} />
          <Route path="/teacher/support" element={<TeacherSupport />} />

          {/* Student routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/attendance" element={<StudentAttendance />} />
          <Route path="/student/announcements" element={<StudentAnnouncements />} />
          <Route path="/student/documents" element={<UploadDocuments />} />
          <Route path="/student/grades" element={<StudentGrades />} />
          <Route path="/student/payment" element={<StudentPayment />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/registration" element={<Registration />} />
          <Route path="/student/setting" element={<StudentSetting />} />
          <Route path="/student/support" element={<StudentSupport />} />
          <Route path="/student/syllabus" element={<StudentSyllabus />} />
          <Route path="/student/teachers" element={<StudentTeacher />} />

        </Routes>
        {!isLoggedIn && <Footer />}
      </div>
    </Router>
  );
};

export default App;