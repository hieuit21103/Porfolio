import React from 'react';
import { NavLink } from 'react-router';
import { Home, User, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-8 right-8 z-50">
            <div className="flex flex-col gap-4">
                <div className="relative h-12">
                    <NavLink
                        to="/"
                        className={({ isActive }) => 
                            `absolute right-0 group h-12 overflow-hidden ${
                                isActive 
                                    ? 'bg-cyan-500 text-black' 
                                    : 'bg-black/50 text-white hover:bg-cyan-500 hover:text-black'
                            } rounded-full w-12 hover:w-40 transition-all duration-300`
                        }
                        end
                    >
                        <div className="absolute right-0 top-0 flex items-center h-full">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mr-12">
                                Home
                            </span>
                            <div className="absolute right-0 flex items-center justify-center w-12 h-12">
                                <Home size={20} />
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="relative h-12">
                    <NavLink
                        to="/about"
                        className={({ isActive }) => 
                            `absolute right-0 group h-12 overflow-hidden ${
                                isActive 
                                    ? 'bg-cyan-500 text-black' 
                                    : 'bg-black/50 text-white hover:bg-cyan-500 hover:text-black'
                            } rounded-full w-12 hover:w-40 transition-all duration-300`
                        }
                    >
                        <div className="absolute right-0 top-0 flex items-center h-full">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mr-12">
                                About
                            </span>
                            <div className="absolute right-0 flex items-center justify-center w-12 h-12">
                                <User size={20} />
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="relative h-12">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => 
                            `absolute right-0 group h-12 overflow-hidden ${
                                isActive 
                                    ? 'bg-cyan-500 text-black' 
                                    : 'bg-black/50 text-white hover:bg-cyan-500 hover:text-black'
                            } rounded-full w-12 hover:w-40 transition-all duration-300`
                        }
                    >
                        <div className="absolute right-0 top-0 flex items-center h-full">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mr-12">
                                Projects
                            </span>
                            <div className="absolute right-0 flex items-center justify-center w-12 h-12">
                                <Briefcase size={20} />
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="relative h-12">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => 
                            `absolute right-0 group h-12 overflow-hidden ${
                                isActive 
                                    ? 'bg-cyan-500 text-black' 
                                    : 'bg-black/50 text-white hover:bg-cyan-500 hover:text-black'
                            } rounded-full w-12 hover:w-40 transition-all duration-300`
                        }
                    >
                        <div className="absolute right-0 top-0 flex items-center h-full">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mr-12">
                                Contact
                            </span>
                            <div className="absolute right-0 flex items-center justify-center w-12 h-12">
                                <Mail size={20} />
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}