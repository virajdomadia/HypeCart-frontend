import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="w-full shadow-md px-[100px] py-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-50" />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium hover:font-bold hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/nike"
              className={({ isActive }) =>
                `text-lg font-medium hover:font-bold hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              NIKE
            </NavLink>
            <NavLink
              to="/adidas"
              className={({ isActive }) =>
                `text-lg font-medium hover:font-bold hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              ADIDAS
            </NavLink>
            <NavLink
              to="/newbalance"
              className={({ isActive }) =>
                `text-lg font-medium hover:font-bold hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              NEW BALANCE
            </NavLink>
            <NavLink
              to="/converse"
              className={({ isActive }) =>
                `text-lg font-medium hover:font-bold hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              CONVERSE
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-medium hover:font-bold hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              CONTACT US
            </NavLink>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/wishlist">
              <FaHeart className=" text-2xl text-red-600" />
            </Link>
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <FaUserCircle size={24} className="text-black" />
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                Login/Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
