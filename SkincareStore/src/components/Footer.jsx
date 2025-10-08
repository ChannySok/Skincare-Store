import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ElectroShop</h2>
          <p className="text-sm leading-6">
            Powering your lifestyle with the latest electronics and cutting-edge
            gadgets.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Laptops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Smartphones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Audio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Wearables
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and never miss a deal.
          </p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-xl bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 rounded-r-xl text-white font-medium hover:bg-blue-700"
            >
              Join
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <FaFacebook className="w-5 h-5 hover:text-blue-500" />
            </a>
            <a href="#">
              <FaTwitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#">
              <FaInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
            <a href="#">
              <FaYoutube className="w-5 h-5 hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ElectroShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
