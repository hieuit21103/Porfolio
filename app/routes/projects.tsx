import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Home, User, Briefcase, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Project() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center relative">
                    <h1 className="text-8xl font-bold text-gray-800 text-opacity-10">WORK</h1>
                    <h2 className="text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-white">MY</span>{" "}
                        <span className="text-cyan-500">PROJECT</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((project) => (
                        <div key={project} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
                            <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                                <div className="text-black text-xl font-bold">Project {project}</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-cyan-500">Web Application {project}</h3>
                                <p className="text-gray-400 mb-4">
                                    A modern web application built with React, Remix, and Tailwind CSS featuring responsive design and smooth animations.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">React</span>
                                    <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">Remix</span>
                                    <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm">Tailwind</span>
                                </div>
                                <button className="text-cyan-500 hover:text-cyan-400 font-semibold flex items-center gap-2">
                                    View Project <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
