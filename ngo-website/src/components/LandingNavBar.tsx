import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import logo from '../assets/hand_logo.svg'; // Adjust the path if necessary

const navLinks = [
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blogs/News" },
  { to: "/contact", label: "Contact Us" }
];

function LandingNavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-whitesmoke-800 fixed w-full z-10 top-0 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-gray-800 text-lg font-bold no-underline">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              Helping Hands
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-whitesmoke-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default LandingNavBar;
