import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto mt-24">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4">
                        About Deepfake Audio Detection
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Empowering authenticity in the age of synthetic media with advanced AI detection
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-16">
                    {/* Mission Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-2xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                In today's digital landscape, audio deepfakes pose a significant threat to truth and trust. Our project addresses this challenge head-on by developing sophisticated tools to distinguish genuine human voices from AI-generated synthetic speech. We're committed to creating technology that safeguards authenticity in digital communications.
                            </p>
                        </div>
                    </div>

                    {/* Data & Technology Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Data Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8 md:p-10">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                        </svg>
                                    </div>
                                    <h2 className="ml-3 text-xl font-bold text-gray-800">Our Data Sources</h2>
                                </div>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    We built our detection system using a comprehensive dataset:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mt-1.5 mr-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        </span>
                                        <span className="text-gray-600">ASVspoof 2021 benchmark dataset</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mt-1.5 mr-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        </span>
                                        <span className="text-gray-600">Curated YouTube voice samples</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mt-1.5 mr-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        </span>
                                        <span className="text-gray-600">Original recordings from diverse environments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 mt-1.5 mr-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        </span>
                                        <span className="text-gray-600">Synthetic samples from leading TTS systems</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Technology Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8 md:p-10">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                    </div>
                                    <h2 className="ml-3 text-xl font-bold text-gray-800">Our Technology</h2>
                                </div>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    We evaluated multiple approaches to achieve optimal detection:
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium text-gray-700">CNN-LSTM Hybrid</span>
                                            <span className="text-sm font-medium text-indigo-600">99.98%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-indigo-600 h-2 rounded-full" style={{width: '99.98%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium text-gray-700">Deep Neural Network</span>
                                            <span className="text-sm font-medium text-blue-600">99.95%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '99.95%'}}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium text-gray-700">Random Forest</span>
                                            <span className="text-sm font-medium text-purple-600">92.3%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '92.3%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How It Works Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-full bg-green-100 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-2xl font-bold text-gray-800">How It Works</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Upload Audio</h3>
                                    <p className="text-gray-600">Users submit .wav or .mp3 files through our intuitive interface</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Feature Analysis</h3>
                                    <p className="text-gray-600">System extracts MFCCs, spectrograms, and other audio features</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2 text-gray-800">Detection Result</h3>
                                    <p className="text-gray-600">AI models analyze patterns and return authenticity assessment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Use Cases Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-2xl font-bold text-gray-800">Key Applications</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-blue-800 mb-2">Banking Security</h3>
                                    <p className="text-sm text-blue-600">Voice authentication for financial transactions</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-purple-800 mb-2">Media Verification</h3>
                                    <p className="text-sm text-purple-600">Detecting synthetic content in journalism</p>
                                </div>
                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-indigo-800 mb-2">IoT Protection</h3>
                                    <p className="text-sm text-indigo-600">Securing smart assistants and devices</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-green-800 mb-2">Education</h3>
                                    <p className="text-sm text-green-600">Demonstrating AI capabilities and risks</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="p-8 md:p-10">
                            <div className="flex items-center mb-8">
                                <div className="p-3 rounded-full bg-red-100 text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h2 className="ml-3 text-2xl font-bold text-gray-800">Our Team</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                                        PR
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800">Pavan Kumar R</h3>
                                    <p className="text-gray-600">Lead Developer</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                                        AS
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800">Akash S</h3>
                                    <p className="text-gray-600">ML Engineer</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-2xl font-bold">
                                        SS
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800">N Somashekar</h3>
                                    <p className="text-gray-600">Security Man</p>
                                </div>
                            </div>
                            <div className="mt-10 pt-6 border-t border-gray-100">
                                <h3 className="font-semibold text-lg text-gray-800 mb-2">Project Guide</h3>
                                <p className="text-gray-700">Prof.Dr.B S Mahalakshmi</p>
                                <p className="text-gray-600">Department of Information Science and Engineering</p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Section */}
                    <div className="text-center">
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            This project represents our commitment to combating digital deception. As synthetic media continues to evolve, we're dedicated to advancing our detection methods to stay ahead of emerging threats. We welcome collaboration and feedback from the community to make this technology even more robust.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;