import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 py-6">
      <ul className="flex justify-center items-center space-x-28">
        <li className="relative group">
          <Link
            to="/"
            className="px-6 py-3 bg-[#E2CCB2] text-[#5A3D3A] rounded-[20px] shadow-2xl flex items-center justify-center text-lg font-semibold group-hover:bg-[#E8A49A] group-hover:shadow-lg transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/about"
            className="px-6 py-3 bg-[#E2CCB2] text-[#5A3D3A] rounded-[20px] shadow-2xl flex items-center justify-center text-lg font-semibold group-hover:bg-[#E8A49A] group-hover:shadow-lg transition-all duration-300"
          >
            About
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/portfolio"
            className="px-6 py-3 bg-[#E2CCB2] text-[#5A3D3A] rounded-[20px] shadow-2xl flex items-center justify-center text-lg font-semibold group-hover:bg-[#E8A49A] group-hover:shadow-lg transition-all duration-300"
          >
            Portfolio
          </Link>
        </li>
        <li className="relative group">
          <Link
            to="/profile"
            className="px-6 py-3 bg-[#E2CCB2] text-[#5A3D3A] rounded-[20px] shadow-2xl flex items-center justify-center text-lg font-semibold group-hover:bg-[#E8A49A] group-hover:shadow-lg transition-all duration-300"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
