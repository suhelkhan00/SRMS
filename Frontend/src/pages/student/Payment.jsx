import { useState } from "react";
import QRCode from "react-qr-code";

const StudentPayment = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile.length === 0) {
            alert("Please upload at least one document.");
            return;
        }
        console.log("Uploaded Files:", selectedFile);
        alert("Documents uploaded successfully!");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
                Payment Upload
            </h2>

            {/* QR Code for Payment */}
            <div className="flex flex-col items-center mb-6">
                <p className="mb-2 text-gray-600">Scan the QR Code to make a payment:</p>
                <QRCode value="upi://pay?pa=9530379447@ybl&pn=Krishna Kumawat&mc=0000&tid=123456789&tr=987654321&tn=Payment&am=&cu=INR" size={150} />
            </div>

            {/* File Upload Section */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Payment Screenshot (JPG/PNG)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300 hover:border-cyan-500 cursor-pointer">
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        className="hidden"
                        id="file-upload"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file-upload" className="text-center">
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
                        <p className="text-sm text-gray-600">Click to upload or drag & drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                    </label>
                </div>
            </div>

            {/* Preview Section */}
            {preview && (
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Preview:</p>
                    <img src={preview} alt="Payment Screenshot" className="mt-2 max-w-full h-48 object-contain border rounded-md" />
                </div>
            )}

            <button
                onClick={handleSubmit}
                className="w-full mt-4 bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition"
            >
                Upload Documents
            </button>
        </div>
    );
};

export default StudentPayment;
