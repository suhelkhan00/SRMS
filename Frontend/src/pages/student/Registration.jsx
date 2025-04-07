import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {
    const [formData, setFormData] = useState({
        fullName: '',
        fathersName: '',
        fathersOccupation: '',
        mothersName: '',
        mothersOccupation: '',
        gender: '',
        dob: '',
        category: '',
        studentClass: '',
        session: '',
        mobileNumber: '',
        mothersMobile: '',
        fathersMobile: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='flex-1 overflow-y-auto bg-gray-100'>
            <div className="min-h-screen bg-white px-4 pt-16 sm:pt-6 pb-10">
                <div className="fixed bottom-4 left-72 space-y-2 z-50"></div>
                <div className='max-w-2xl mx-auto mb-4'>
                    <Link to="/dashboard">
                        <button className='flex cursor-pointer items-center text-cyan-500 hover:text-cyan-700 transitions-colors duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-5 h-5 mr-2">
                                <path d="m12 19-7-7 7-7"></path>
                                <path d="M19 12H5"></path>
                            </svg>
                            <span>Back to Home</span>
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-white shadow-2xl rounded-lg p-8 max-w-2xl w-full">
                        <h1 className="text-3xl font-bold text-center mb-2 text-cyan-500">Student Enrollment Process</h1>
                        <h2 className="text-xl text-center mb-6 text-gray-600">Registration for Profile</h2>
                        <p className="text-gray-600 text-center mb-4">Please fill out the following details to register as a student. Ensure all information is accurate before submitting.</p>
                        <form className='space-y-6'>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input required="" placeholder="Enter your full name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fathers Name *</label>
                                    <input required="" placeholder="Enter your Father's name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" name="fathersName" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Father's Occupation *</label>
                                    <input required="" placeholder="Father's Occupation" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name *</label>
                                    <input required="" placeholder="Enter your Mother's name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Occupation *</label>
                                    <input required="" placeholder="Mother's Occupation" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                                    <select required="" name="gender" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300 bg-white" onChange={handleChange}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Class *</label>
                                    <input required="" placeholder="Enter Class" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Section *</label>
                                    <select required="" name="gender" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300 bg-white" onChange={handleChange}>
                                        <option value="">Select Section</option>
                                        <option value="Male">A</option>
                                        <option value="Female">B</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoty *</label>
                                    <input required="" placeholder="SC / ST / OBC / General" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cyan-300 focus:border-cyan-300" onChange={handleChange} type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input required="" placeholder="Enter your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" type="email" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1"> Contact Number *</label>
                                    <input required="" placeholder="Enter your telephone number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" type="tel" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Father&apos;s Contact Number *</label>
                                    <input required="" placeholder="Enter your Father's contact number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mother&apos;s Contact Number *</label>
                                    <input required="" placeholder="Enter your Mother's contact number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500" type="tel" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Photo (jpg) *</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300 hover:border-cyan-500">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="resume-upload" className="relative cursor-pointer rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500">
                                                <span>Upload an image</span>
                                                <input id="photo-upload" className="sr-only" accept=".pdf" type="image" name="resume-upload" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-sm text-gray-500">image up to 200kb</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md cursor-pointer shadow-sm text-sm font-medium text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500" onClick={handleSubmit}>
                                    Submit Registration Form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
}