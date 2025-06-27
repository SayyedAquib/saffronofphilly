import { useState } from "react";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Menu", href: "#" },
    { name: "Catering", href: "#" },
    { name: "Gift Cards", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-lg border-b border-orange-100 px-4 md:px-6 py-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  link.active
                    ? "text-orange-600 bg-orange-50 rounded-lg"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg"
                }`}
                href={link.href}
              >
                {link.name}
                {link.active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 tracking-tight">
              Saffron
              <span className="text-orange-400 text-lg ml-1">✦</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-4 text-xs text-gray-600 mr-4">
              <div className="flex items-center gap-1">
                <FiPhone size={14} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMapPin size={14} />
                <span>Downtown</span>
              </div>
            </div>

            <button className="hidden sm:block border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
              Order Online
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-4 border-t border-gray-100 space-y-2">
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                <FiPhone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                <FiMapPin size={16} />
                <span>Downtown Location</span>
              </div>
              <button className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
