import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const brands = [
    "Samsung",
    "Lg",
    "Voltas",
    "Daikin",
    "Symphony",
    "Hitachi",
    "Carrier",
    "Mitsubishi",
    "Bluestar",
    "Whirlpool",
    "Lloyd",
    "Godrej",
    "Ifb",
    "Haier",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-700"
            >
              Customer Service Support
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <a
              href="tel:18002022413"
              className="mr-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none transition-colors ${isOpen ? "bg-blue-100 text-blue-600" : ""
                }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors`
              }
            >
              Testimonials
            </NavLink>
            <div className="relative">
              <div className="flex items-center">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${isActive || isDropdownOpen ? "bg-blue-100 text-blue-600" : "text-gray-600"} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`
                  }
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown on click
                >
                  Services
                </NavLink>
                <button
                  onClick={toggleDropdown}
                  className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {isDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1 bg-white shadow-md rounded-md w-full py-2 z-50">
                  {brands.map((brand) => (
                    <NavLink
                      key={brand}
                      to={`/${brand.toLowerCase()}`}
                      className={({ isActive }) =>
                        `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`
                      }
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false); // Close the mobile menu after navigation
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
                `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors`
              }
            >
              Contact
            </NavLink>
            <a
              href="tel:18002022413"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>1800-202-2413</span>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`
              }
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </NavLink>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${isDropdownOpen ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `${isActive || isDropdownOpen ? " text-grey-600" : "text-gray-600"} px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors`
                  }
                >
                  Services
                </NavLink>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1 bg-white shadow-md rounded-md w-full py-2 z-50">
                  {brands.map((brand) => (
                    <NavLink
                      key={brand}
                      to={`/${brand.toLowerCase()}`}
                      className={({ isActive }) =>
                        `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`
                      }
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsOpen(false); // Close the mobile menu after navigation
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
                `${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"} block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;