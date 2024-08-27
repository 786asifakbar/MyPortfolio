// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <NavLink
            to="/#home"
            className="hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/#about"
            className="hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            About
          </NavLink>
          <NavLink
            to="/#skills"
            className="hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Skills
          </NavLink>
          <NavLink
            to="/#projects"
            className="hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/#contact"
            className="hover:text-blue-400"
            activeClassName="text-blue-400"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;