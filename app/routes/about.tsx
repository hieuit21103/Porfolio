import React from 'react';
import { type MetaFunction } from "react-router";
import { Download } from 'lucide-react';
import { Images } from '../assets/images';

export const meta: MetaFunction = () => {
    return [{ title: "About Me" }];
};

export default function About() {
    const skills = [
        { name: "REACT", icon: Images.react },
        { name: "CSS", icon: Images.css },
        { name: "TAILWIND", icon: Images.tailwind },
        { name: "JAVASCRIPT", icon: Images.javascript },
        { name: "LARAVEL", icon: Images.laravel },
        { name: "LIVEWIRE", icon: Images.livewire },
        { name: "DOTNET", icon: Images.dotnet },
        { name: "ASP.NET", icon: Images.aspnet },
        { name: "SQLITE", icon: Images.sqlite },
        { name: "SQLSERVER", icon: Images.sqlserver },
        { name: "MYSQL", icon: Images.mysql },
        { name: "REDIS", icon: Images.redis },
        { name: "RABBITMQ", icon: Images.rabbitmq },
        { name: "GITHUB", icon: Images.github },
        { name: "DOCKER", icon: Images.docker },
        { name: "POSTMAN", icon: Images.postman },

    ];

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center relative">
                    <h1 className="text-8xl font-bold text-gray-800 text-opacity-10">RESUME</h1>
                    <h2 className="text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-white">ABOUT</span>{" "}
                        <span className="text-cyan-500">ME</span>
                    </h2>
                </div>

                {/* Personal Information */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-8">PERSONAL INFORMATION</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                        <div className="space-y-4">
                            <p><span className="font-bold">First Name:</span> Hieu</p>
                            <p><span className="font-bold">Birthday:</span> 23/05/2003</p>
                            <p><span className="font-bold">Nation:</span> Viet Nam</p>
                            <p><span className="font-bold">Phone:</span> 0813600766</p>
                            <p><span className="font-bold">Language:</span> Vietnamese, English</p>
                        </div>
                        <div className="space-y-4">
                            <p><span className="font-bold">Last Name:</span> Le Minh</p>
                            <p><span className="font-bold">Sex:</span> Male</p>
                            <p><span className="font-bold">Address:</span> Thien Huong, Hai Phong</p>
                            <p><span className="font-bold">Git:</span> https://github.com/hieuit21103</p>
                            <p><span className="font-bold">Email:</span> hieuit21103@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-gray-900 p-8 rounded-lg text-center">
                        <span className="text-6xl font-bold text-cyan-500">5<sup>+</sup></span>
                        <p className="mt-2">PERSONAL PROJECTS</p>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg text-center">
                        <span className="text-6xl font-bold text-cyan-500">0<sup>+</sup></span>
                        <p className="mt-2">YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg text-center">
                        <span className="text-6xl font-bold text-cyan-500">0<sup>+</sup></span>
                        <p className="mt-2">YEARS OF EXPERIENCE</p>
                    </div>
                </div>

                {/* Download CV */}
                <div className="mb-16 text-center">
                    <div className="flex items-center justify-center">
                        <button className="mt-6 bg-cyan-500 text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cyan-600 transition-colors">
                            <Download size={20} />
                            DOWNLOAD CV
                        </button>
                    </div>
                </div>


                {/* Education & Experience */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">EDUCATION & EXPERIENCE</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyan-500"></div>

                        <div className="relative z-10">
                            {/* Education Item 1 */}
                            <div className="flex items-center mb-8">
                                <div className="w-1/2 pr-12 text-right">
                                    <div className="text-xl font-bold mb-2">2021</div>
                                    <h3 className="text-lg font-semibold">VIETNAM MARITIME UNIVERSITY</h3>
                                    <p className="text-gray-400">Graduated</p>
                                </div>
                                <div className="bg-cyan-500 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                                <div className="w-1/2 pl-12"></div>
                            </div>

                            {/* Experience Item */}
                            <div className="flex items-center">
                                <div className="w-1/2 pr-12"></div>
                                <div className="bg-cyan-500 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                                <div className="w-1/2 pl-12">
                                    <div className="text-xl font-bold mb-2">2022 - 2024</div>
                                    <h3 className="text-lg font-semibold">FREELANCER</h3>
                                    <p className="text-gray-400">Project Solution For Student</p>
                                </div>
                            </div>

                            {/* Experience Item 2 */}
                            <div className="flex items-center mb-8">
                                <div className="w-1/2 pr-12 text-right">
                                    <div className="text-xl font-bold mb-2">2023 - 2024</div>
                                    <h3 className="text-lg font-semibold">FREELANCER</h3>
                                    <p className="text-gray-400">Minecraft Server Developer Using Java & PHP</p>
                                </div>
                                <div className="bg-cyan-500 w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                                <div className="w-1/2 pl-12"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* My Skills */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">MY SKILLS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-gray-900/50 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-16 h-16 mx-auto mb-6 object-contain"
                                />
                                <p className="text-lg">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}