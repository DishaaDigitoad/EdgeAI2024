import React from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:space-x-4">
          {/* Company Information */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2 text-sm">
              DIGITOAD TECHNOLOGIES PVT. LTD.
              <br />
              AB square, #617, 1st Floor, 5th main,
              <br />
              OMBR Layout, Bengaluru 560043
              <br />
              Karnataka (India)
              <br />
              <br />
              Email: sales@digitoadtech.com
              <br />
              Phone: +91 636 238 7840
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="mt-2 flex space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61561178292994"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-transform transform hover:scale-125 duration-300"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-600 shadow-lg"
                  size="3x"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/digitoad-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-transform transform hover:scale-125 duration-300"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-700 shadow-lg"
                  size="3x"
                />
              </a>
              <a
                href="https://www.instagram.com/digitoad_tech_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-transform transform hover:scale-125 duration-300"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-pink-500 shadow-lg"
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Information and Branding */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <a
                href="https://www.digitoadtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                DigiToad Technologies pvt. ltd.
              </a>
              <p className="mt-2">
                &copy; 2024 Edge AI Contest. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
