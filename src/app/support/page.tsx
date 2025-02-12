import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const SupportPage = () => {
    return (
        <div className="min-h-screen py-10 px-5 md:px-20">
            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">Support</h1>
                <p className="text-gray-600 mt-2">We’re here to help you with any questions or issues.</p>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 mt-4">
                    If you need assistance, feel free to reach out to us through any of the methods below.
                </p>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center text-gray-600">
                        <FaPhone className="text-green-600 mr-3" />
                        <span>+1 234 567 890</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FaEnvelope className="text-green-600 mr-3" />
                        <span>support@example.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="text-green-600 mr-3" />
                        <span>123 Support St, Tech City, USA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;