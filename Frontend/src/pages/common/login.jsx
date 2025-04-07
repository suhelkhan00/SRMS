import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import blur_cyan from "./../../assets/blur-cyan.svg";
import logo from "./../../assets/icons/logo.png";
import illustration_1 from "./../../assets/illustrations/login.svg";
import illustration_2 from "./../../assets/illustrations/login2.svg";

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Example validation for login credentials
        if (email === "admin@school.com" && password === "admin123") {
            setIsLoggedIn(true); // Make sure `setIsLoggedIn` is being passed as a function from `App.js`
            navigate("/admin/dashboard");
        } else if (email === "teacher@school.com" && password === "teacher123") {
            setIsLoggedIn(true);
            navigate("/teacher/dashboard");
        } else if (email === "student@school.com" && password === "student123") {
            setIsLoggedIn(true);
            navigate("/student/dashboard");
        } else {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="bg-[#FCFFFF] relative flex items-center justify-center min-h-screen px-6">
            <img src={blur_cyan} alt="" className="hidden md:block absolute z-0 top-[3%] left-[26%] w-[400px]" />

            <div className="z-10 w-full max-w-md md:backdrop-blur-xl md:bg-[#F0F9FF]/50 md:rounded-xl md:shadow-card-shadow space-y-4 p-6">
                <div className="space-y-1">
                    <span className="font-lexend font-bold text-h36 sm:text-h32">
                        Login
                    </span>
                    <p className="text-[#667085] text-h16 sm:text-h14">
                        Please fill your detail to access your account.
                    </p>
                </div>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-[#344054] text-p16 font-medium">Email</label>
                        <input
                            type="email"
                            className="border rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-2 w-full focus:outline-sky-300 focus:bg-slate-50 hover:bg-slate-50 transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-[#344054] text-p16 font-medium">Password</label>
                        <input
                            type="password"
                            className="border rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-2 w-full focus:outline-sky-300 focus:bg-slate-50 hover:bg-slate-50 transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Remember Me Forgot Pass  */}
                    <div className="text-h14 flex lg:space-x-24 md:space-x-16 sm:space-x-12">
                        <div className="flex flex-row items-center justify-between w-screen py-1">
                            <label
                                className="flex space-x-1.5 text-slate-500 font-semibold cursor-pointer"
                                htmlFor="login_remember_me"
                            >
                                <input
                                    className="w-[16px] cursor-pointer accent-sky-600"
                                    type="checkbox"
                                    defaultChecked
                                    id="login_remember_me"
                                />
                                <span className="hover:text-slate-600 transition text-p14">
                                    Remember me
                                </span>
                            </label>

                            <Link
                                to="/forgotpassword/email"
                                className="text-[#0EA5E9] transition font-medium hover:text-sky-700 text-p14"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700">
                        Login
                    </button>
                </form>
            </div>

            <div className="hidden md:grid justify-center backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 m-5 p-5 items-center">
                <img src={illustration_1} alt="Illustration 1" className="py-14 max-h-[720px]" />
            </div>
            <img className="md:hidden my-4" alt="Illustration 2" src={illustration_2} />

            <footer className="md:hidden fixed bg-white w-screen bottom-0">
                <hr className="my-2" />
                <div className="flex flex-col justify-center items-center mb-2">
                    <img src={logo} className="w-[32px]" alt="Logo" />
                </div>
            </footer>
        </div>
    );
};

export default Login;
