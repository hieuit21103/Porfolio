import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Home, User, Briefcase, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Profile() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-500 flex items-center justify-center p-8">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="relative">
                    <div className="w-80 h-96 bg-gradient-to-b from-cyan-300 to-blue-300 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <User size={48} />
                                </div>
                                <p className="text-sm opacity-75">Profile Photo</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-xs opacity-75">
                        #
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                    <div className="text-black/80 text-lg mb-2 font-medium">— I'm Le Minh Hieu</div>
                    <h1 className="text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
                        Web Developer
                    </h1>
                    <p className="text-black/80 text-lg leading-relaxed mb-12 max-w-2xl">
                        Nice to meet you! My name is Hieu, and I am passionate about technology, with a particular focus on backend development. I strive to build robust, scalable, and secure systems that power high-performing websites and applications. I am always eager to explore new technologies, optimize system architecture, and ensure seamless data management to meet client and business needs. I look forward to connecting with you!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <NavLink
                            to="/about"
                            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            <ChevronRight size={20} />
                            ABOUT
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className="bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                        >
                            <ChevronRight size={20} />
                            PROJECT
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}