import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
];

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleToggle = () => setActive(!active);

    return (
        <nav className="bg-gray-900 md:max-w-screen text-white px-6 py-4 flex items-center justify-between relative shadow-lg">
            <Link to="/" className="text-2xl font-bold tracking-wide">
                Akhil
            </Link>
            <div
                className={`flex flex-col justify-center w-8 h-8 cursor-pointer md:hidden z-20 ${active ? "space-y-1" : "space-y-2"}`}
                onClick={handleToggle}
            >
                <span className={`block h-1 bg-gray-300 rounded transition-all duration-300 ${active ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-1 bg-gray-300 rounded transition-all duration-300 ${active ? "opacity-0" : ""}`}></span>
                <span className={`block h-1 bg-gray-300 rounded transition-all duration-300 ${active ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
            <ul
                className={`
                    flex-col md:flex-row md:flex
                    absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent
                    transition-all duration-300 ease-in-out
                    ${active ? "flex" : "hidden"}
                    md:items-center md:space-x-8
                `}
            >
                {navItems.map((item, idx) => (
                    <li
                        key={item.name}
                        className="navbar-item"
                        style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}
                    >
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `block px-6 py-3 md:py-2 rounded-md transition-colors duration-200 font-medium hover:text-cyan-400 relative
                                after:content-[''] after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
                                hover:after:scale-x-100
                                ${isActive ? "text-cyan-400 after:scale-x-100" : ""}`
                            }
                            onClick={() => setActive(false)}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;