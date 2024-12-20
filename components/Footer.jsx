import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 w-full">
      <div className="container mx-auto text-center">
        {/* Copyright and Made with Heart */}
        <div className="mb-4">
          <div className="flex justify-center items-center flex-wrap">
            <p>&copy; 2024 DayThoughts All rights reserved.</p>
            <div className="text-sm text-gray-600 mx-4">
              <Link
                to="/terms-conditions"
                className="text-blue-600 hover:underline"
              >
                Terms and Conditions
              </Link>
              .
            </div>
          </div>
          <p className="text-sm">
            Made with ❤️ by <span className="font-semibold">Nitish</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/nitish_20_s_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/devplr-nitish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/devlprnitish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
