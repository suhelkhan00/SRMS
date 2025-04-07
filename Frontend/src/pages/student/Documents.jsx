import { useState } from "react";

export default function UploadDocuments() {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    const handleRemoveFile = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (files.length === 0) {
            alert("Please upload at least one document.");
            return;
        }
        console.log("Uploaded Files:", files);
        alert("Documents uploaded successfully!");
    };

    return (
        <div className="w-full p-4 min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Documents (PDF/JPG/PNG) *
                </label>

                {/* Drag & Drop Upload Area */}
                <div
                    onDrop={handleDrop}
                    onDragOver={(event) => event.preventDefault()}
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300 hover:border-cyan-500 cursor-pointer"
                >
                    <div className="space-y-1 text-center">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md font-medium text-cyan-600 hover:text-cyan-500">
                                <span>Upload Files Here</span>
                                <input
                                    type="file"
                                    accept=".pdf, .jpg, .png"
                                    multiple
                                    onChange={handleFileChange}
                                    className="sr-only"
                                />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">Max size: 5MB</p>
                    </div>
                </div>

                {/* File List */}
                {files.length > 0 && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
                        <h3 className="text-sm font-medium text-gray-700">Uploaded Files:</h3>
                        <ul className="mt-2 space-y-2">
                            {files.map((file, index) => (
                                <li key={index} className="flex justify-between items-center bg-white p-2 rounded-md shadow">
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFile(index)}
                                        className="text-red-500 text-sm hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full mt-4 bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                    Upload Documents
                </button>
            </div>
        </div>
    );
}
