'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'Shop', href: '/shop' },
        { name: 'Blog', href: '/blog' },
        { name: 'New Drops', href: '/#new-drops' },
        { name: 'About', href: '/about' },
        { name: 'Authenticity', href: '/authenticity' },
        { name: 'Shipping', href: '/shipping' },
    ]

    return (
        <>
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-black/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="font-logo font-bold text-2xl tracking-wider text-logo-red animate-fade-in">
                            WEREVANA
                        </Link>

                        {/* Desktop Menu Items */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link text-black font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-black p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar Overlay */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Mobile Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-between items-center mb-10">
                            <span className="font-logo text-xl text-logo-red font-bold">MENU</span>
                            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-black">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-condensed uppercase tracking-wide text-black hover:text-logo-red transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto pt-10 border-t border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Contact us</p>
                            <div className="flex space-x-4">
                                {/* Minimal social icons placeholder */}
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">IG</div>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">WA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
