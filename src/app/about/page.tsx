import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen py-12 px-5 md:px-20">
            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
                <p className="text-gray-600 mt-2">Learn more about our mission, values, and team</p>
            </div>

            {/* Content Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800">Who We Are</h2>
                <p className="text-gray-600 mt-4">
                    We are a passionate team dedicated to providing high-quality solutions in web development and digital innovation.
                    Our mission is to empower businesses with cutting-edge technology to achieve their goals effectively.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Commitment to Excellence</li>
                    <li>Customer-Centric Approach</li>
                    <li>Innovation and Creativity</li>
                    <li>Integrity and Transparency</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6">Meet Our Team</h2>
                <p className="text-gray-600 mt-4">
                    Our team consists of skilled professionals with expertise in various domains, working together to create impactful solutions.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;