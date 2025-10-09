import ThemeContext from "@/context/ThemeContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoSunny, IoMenu, IoClose } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io"

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/product", label: "Product" },
    { to: "/service", label: "Service" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-pink-300 dark:bg-blue-700">
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
        <section className="hidden lg:block space-x-6 font-semibold text-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              to={link.to}
              className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </section>

        {/* User Info and Theme Toggle */}
        <section className="flex items-center gap-2 sm:gap-4 font-medium text-base sm:text-lg">
          {/* Username - hidden on mobile, visible on tablet and desktop */}
          <h2 className="hidden sm:block">Sok Pisey</h2>
          
          {/* Profile Image */}
          <img
            src="user.jpg"
            alt="profile"
            className="h-8 sm:h-6 lg:h-10 rounded-full overflow-hidden"
          />
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="cursor-pointer p-1 text-xl sm:text-2xl hover:scale-110 transition-transform"
          >
            {theme === "dark" ? <IoSunny /> : <IoIosMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer p-1 text-2xl ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </section>
      </div>

      {/* Mobile Menu - appears when menu button is clicked */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-pink-300 dark:bg-blue-700`}>
        <div className="px-4 py-3 space-y-3 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Show username in mobile menu */}
          <div className="pt-3 border-t border-blue-400 dark:border-blue-600 sm:hidden">
            <p className="text-gray-700 dark:text-gray-300">Sok Pisey</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;