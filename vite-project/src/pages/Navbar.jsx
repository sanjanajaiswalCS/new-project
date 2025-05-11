import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const brands = [
    "Samsung AC Repair & Services",
    "LG AC Repair & Services",
    "Voltas AC Repair & Services",
    "Daikin AC Repair & Services",
    "OGeneral AC Repair & Services",
    "Hitachi AC Repair & Services",
    "Carrier AC Repair & Services",
    "Mitsubishi AC Repair & Services",
    "Bluestar AC Repair & Services",
    "Whirlpool AC Repair & Services",
    "Lloyd AC Repair & Services",
    "Godrej AC Repair & Services",
    "Ifb AC Repair & Services",
    "Haier AC Repair & Services",
    "Panasonic AC Repair & Services",
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700"
          >
            Customer Service Center
          </NavLink>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center">
            <a
              href="tel:18002022413"
              className="mr-2 bg-blue-600 text-white px-3 py-1.5 rounded-md flex items-center gap-2 hover:bg-blue-700"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              About
            </NavLink>

            {/* Dropdown Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center px-3 py-2 rounded-md ${
                  isDropdownOpen
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white border rounded shadow-lg z-50 w-64">
                  {brands.map((brand) => (
                    <NavLink
                      key={brand}
                      to={`/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {brand}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              Privacy Policy
            </NavLink>
            <a
              href="tel:18002022413"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700"
            >
              <Phone className="h-4 w-4" />
              <span>1800-202-2413</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-1 py-3">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              About
            </NavLink>

            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Services
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="ml-4 bg-white border-l pl-2">
                {brands.map((brand) => (
                  <NavLink
                    key={brand}
                    to={`/${brand.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {brand}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-blue-50"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
