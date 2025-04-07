import React, { useState } from "react";

const PaymentCollection = () => {
    const [payments, setPayments] = useState([
        { id: 1, student: "Rahul Sharma", class: "10", amount: 5000, status: "Paid", proof: "receipt1.jpg" },
        { id: 2, student: "Anjali Verma", class: "9", amount: 4800, status: "Pending", proof: "" },
        { id: 3, student: "Amit Kumar", class: "8", amount: 4500, status: "Paid", proof: "receipt3.jpg" },
    ]);

    const handleUploadProof = (id, file) => {
        setPayments(payments.map(payment =>
            payment.id === id ? { ...payment, proof: file.name, status: "Paid" } : payment
        ));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Payment Collection</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Student</th>
                            <th className="py-3 px-6 text-center">Class</th>
                            <th className="py-3 px-6 text-center">Amount</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Payment Proof</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-700">{payment.student}</td>
                                <td className="py-4 px-6 text-center">{payment.class}</td>
                                <td className="py-4 px-6 text-center">₹{payment.amount}</td>
                                <td className={`py-4 px-6 text-center font-semibold ${payment.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                                    {payment.status}
                                </td>
                                <td className="py-4 px-6 text-center">
                                    {payment.proof ? (
                                        <a href={`/${payment.proof}`} target="_blank" rel="noopener noreferrer" className="text-cyan-600 underline">View</a>
                                    ) : "N/A"}
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <input
                                        type="file"
                                        accept=".jpg,.png,.pdf"
                                        className="hidden"
                                        id={`upload-${payment.id}`}
                                        onChange={(e) => handleUploadProof(payment.id, e.target.files[0])}
                                    />
                                    <label htmlFor={`upload-${payment.id}`} className="cursor-pointer bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">
                                        Upload Proof
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentCollection;
