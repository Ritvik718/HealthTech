import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-white py-6 px-6 flex items-center justify-between">
      <div className="text-lg uppercase font-bold text-blue-700">
        NxtGenDGNS
      </div>
      <div className="container flex items-center">
        <div className="hidden md:flex nav-links">
          <Link to="/tests" className="nav-link mr-4">
            Tests
          </Link>
          <Link to="/articles" className="nav-link mr-4">
            Articles
          </Link>
          <Link to="/about" className="nav-link mr-4">
            About
          </Link>
        </div>
        <div className="flex ml-auto">
          <div className="ml-auto">
            <Link to="/login" className="nav-link mr-4">
              Login
            </Link>
            <Link to="/signup" className="nav-link mr-4">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
