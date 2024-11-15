'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const footerNavs = [
        {
            label: "Resources",
            items: [
                { href: '#', name: 'Contact' },
                { href: '#', name: 'Support' },
                { href: '#', name: 'Documentation' },
                { href: '#', name: 'Pricing' },
            ],
        },
        {
            label: "About",
            items: [
                { href: '#', name: 'Terms' },
                { href: '#', name: 'License' },
                { href: '#', name: 'Privacy' },
                { href: '#', name: 'About Us' },
            ],
        },
        {
            label: "Explore",
            items: [
                { href: '#', name: 'Showcase' },
                { href: '#', name: 'Roadmap' },
                { href: '#', name: 'Languages' },
                { href: '#', name: 'Blog' },
            ],
        },
        {
            label: "Company",
            items: [
                { href: '#', name: 'Partners' },
                { href: '#', name: 'Team' },
                { href: '#', name: 'Careers' },
            ],
        },
    ];

    return (
        <footer className="pt-8 bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
                    <div className="flex-1 max-w-lg text-center md:text-left">
                        <h3 className="text-white text-xl sm:text-2xl font-bold">
                            Get our beautiful newsletter straight to your inbox.
                        </h3>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0 w-full md:w-auto">
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row items-center gap-3 md:justify-end">
                            <div className="relative w-full md:w-auto">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-5 py-2 text-sm text-gray-500 bg-white outline-none border focus:border-accent shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="w-full md:w-auto py-3 px-4 font-medium text-sm text-white bg-accent hover:bg-accent rounded-lg shadow">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-10 text-center sm:text-left">
                    {footerNavs.map((item, idx) => (
                        <ul className="space-y-3 text-gray-300" key={idx}>
                            <h4 className="text-gray-200 font-semibold pb-1">
                                {item.label}
                            </h4>
                            {item.items.map((el, idx) => (
                                <li key={idx}>
                                    <a href={el.href} className="duration-150 hover:text-gray-400 text-sm">
                                        {el.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="mt-8 py-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
                    <p className="text-gray-300 text-sm">© 2024 <span className='text-accent'>CodeWithHamza</span>. All rights reserved.</p>
                    <div className="flex gap-x-4 text-gray-400 mt-4 sm:mt-0">
                        {/* Social Icons */}
                        {[
                            { href: '#', icon: FaTwitter, color: 'text-blue-400' },
                            { href: '#', icon: FaLinkedinIn, color: 'text-[#0077B5]' },
                            { href: '#', icon: FaYoutube, color: 'text-[#FF0033]' },
                            { href: '#', icon: FaFacebookF, color: 'text-[#0866FF]' },
                        ].map((item, index) => (
                            <a href={item.href} key={index} className="opacity-70 hover:opacity-100">
                                <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center">
                                    <item.icon className={`w-4 h-4 ${item.color}`} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
