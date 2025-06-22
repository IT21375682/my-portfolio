import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-slate-400 py-8">
      <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Logo / Branding */}
        <div className="text-white text-2xl font-bold">
          Shandeep
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center lg:justify-start space-x-6">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/IT21375682"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/shandeep-jayapalan-8ba948243"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter className="w-6 h-6" />
          </a> */}
        </div>
      </div>

      <div className="border-t border-[#33353F] mt-8 pt-6">
        <div className="container mx-auto px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Shandeep Jayapalan. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="mailto:jeyapalansanju@gmail.com" className="hover:text-white transition">
              <FaEnvelope className="w-5 h-5 inline-block mr-1" />
              Email
            </a>
            {/* <a href="tel:+0757082659" className="hover:text-white transition">
              <FaPhone className="w-5 h-5 inline-block mr-1" />
              Phone
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
