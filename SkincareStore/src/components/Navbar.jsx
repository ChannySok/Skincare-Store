import ThemeContext from "@/context/ThemeContext";
import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSunny, IoMenu, IoClose, IoChevronDown, IoCart } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { 
      label: "Product", 
      dropdown: [
        { to: "/product/bodycare", label: "Body Care" },
        { to: "/product/specialproducts", label: "Special Products" },
        { to: "/product/treatmentandcare", label: "Treatment & Care" },
        { to: "/product/skincareroutine", label: "Skincare Routine" },
      ]
    },
    { to: "/service", label: "Service" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-pink-300 dark:bg-blue-700 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
        {/* Logo */}
        <section>
          <img 
            src="logocover.jpg" 
            alt="logo" 
            className="h-12 sm:h-14 lg:h-18 p-2 bg-amber-50 rounded-full object-cover" 
          />
        </section>

        {/* Desktop Navigation - hidden on mobile */}
        <section className="hidden lg:flex space-x-6 font-semibold text-lg items-center">
          {navLinks.map((link) => (
            <div key={link.label} className="relative" ref={link.dropdown ? dropdownRef : null}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-black transition-colors text-lg"
                  >
                    {link.label}
                    {/* <IoChevronDown className={`transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} /> */}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isProductDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.to}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-400 hover:rounded-full dark:hover:bg-blue-600 transition ease-in-out duration-300"
                          onClick={() => setIsProductDropdownOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link 
                  to={link.to}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </section>

        {/* User Info, Theme Toggle, and Cart */}
        <section className="flex items-center gap-2 sm:gap-4 font-medium text-base sm:text-lg">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="cursor-pointer p-1 text-xl sm:text-2xl hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <IoSunny /> : <IoIosMoon />}
          </button>

          {/* Add to Cart Button */}
          <button 
            className="flex items-center gap-1 sm:gap-2 cursor-pointer p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md relative"
            aria-label="Shopping cart"
          >
            <IoCart className="text-lg sm:text-xl text-gray-700 dark:text-gray-300" />
            {/* Optional: Cart item count badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer p-1 text-2xl ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* Profile Image */}
          <img
            src="user.jpg"
            alt="profile"
            className="h-8 sm:h-6 lg:h-10 rounded-full overflow-hidden"
          />
        </section>
      </div>

      {/* Mobile Menu - appears when menu button is clicked */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-pink-300 dark:bg-blue-700`}>
        <div className="px-4 py-3 space-y-3 font-semibold">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <div className="space-y-2">
                  <button
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    className="flex items-center gap-2 w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                    {/* <IoChevronDown className={`transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} /> */}
                  </button>
                  
                  {/* Mobile Dropdown Menu */}
                  {isProductDropdownOpen && (
                    <div className="ml-4 space-y-2 border-l-2 border-blue-400 dark:border-blue-600 pl-4">
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.to}
                          className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                          onClick={() => {
                            setIsProductDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.to}
                  className="block py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Show username in mobile menu */}
          <div className="pt-3 border-t border-blue-400 dark:border-blue-600 sm:hidden">
            {/* <p className="text-gray-700 dark:text-gray-300">Sok Pisey</p> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;