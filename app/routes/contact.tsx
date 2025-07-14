import React from 'react';
import { type MetaFunction } from "react-router";
import { Facebook, Github, Linkedin, Mail, Phone} from 'lucide-react';

export const meta: MetaFunction = () => {
    return [{ title: "Contact Me" }];
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center relative">
                    <h1 className="text-8xl font-bold text-gray-800 text-opacity-10">CONTACT</h1>
                    <h2 className="text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-white">GET IN</span>{" "}
                        <span className="text-cyan-500">TOUCH</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-cyan-500">Let's Work Together</h3>
                        <p className="text-gray-300 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-400">your.email@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-gray-400">+1 234 567 890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <button className="w-12 h-12 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <Github className="w-6 h-6" />
                                </button>
                                <button className="w-12 h-12 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <Linkedin className="w-6 h-6" />
                                </button>
                                <button className="w-12 h-12 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors duration-300">
                                    <Facebook className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}