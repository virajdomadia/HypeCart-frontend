import React from "react";
import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 w-full shadow-md px-6 md:px-12 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        {/* Branding */}
        <div className="mb-4 md:mb-0">
          <img src={logo1} alt="E-Shop Logo" className="w-50" />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            to="/"
            className="text-xl hover:text-gray-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/nike"
            className="text-xl hover:text-gray-200 transition duration-300"
          >
            Nike
          </Link>
          <Link
            to="/adidas"
            className="text-xl hover:text-gray-200 transition duration-300"
          >
            Adidas
          </Link>
          <Link
            to="/newbalance"
            className="text-xl hover:text-gray-200 transition duration-300"
          >
            New Balance
          </Link>
          <Link
            to="/converse"
            className="text-xl hover:text-gray-200 transition duration-300"
          >
            Converse
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-gray-200 transition duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 text-lg">
          <a href="#" className="hover:text-gray-200 transition duration-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="hover:text-gray-200 transition duration-300">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="hover:text-gray-200 transition duration-300">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-300 text-lg mt-4">
        © {new Date().getFullYear()} HYPECART. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
