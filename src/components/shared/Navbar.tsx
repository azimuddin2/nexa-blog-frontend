"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About Us" },
        { href: "/support", label: "Support" },
        { href: "/dashboard", label: "Dashboard" },
    ];

    return (
        <nav className="flex items-center justify-between p-4 border-b container mx-auto">
            <div className="flex items-center">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center gap-1">
                        <span className="text-xl font-semibold">NexaBlog</span>
                    </Link>
                </div>
            </div>

            <div className="flex items-center space-x-6">
                {navLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`${pathname === href
                            ? "text-teal-500 font-bold"
                            : "text-gray-700 hover:text-6eal-700"
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            {/* <div>
                <Link
                    href="/blogs/create"
                    className="px-4 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-500"
                >
                    Post Blog
                </Link>
            </div> */}

            <div className="flex items-center">
                {/* <button className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200">
                    Logout
                </button> */}
                <Link
                    href="/login"
                    className="border border-teal-500 text-teal-500 px-6 py-2 rounded-full hover:bg-teal-500 hover:text-white transition duration-200"
                >
                    Login
                </Link>
            </div>

        </nav>
    );
};

export default Navbar;