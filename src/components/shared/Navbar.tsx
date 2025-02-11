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
                            ? "text-green-500 font-bold"
                            : "text-gray-700 hover:text-6eal-700"
                            }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div>
                <Link
                    href="/blogs/create"
                    className="px-4 py-3 bg-green-600 text-white rounded-full hover:bg-green-500"
                >
                    Post Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;