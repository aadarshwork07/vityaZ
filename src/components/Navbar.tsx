import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, UserCircle } from 'lucide-react';
import logo from '../Assets/logo.jpeg'

interface NavbarProps {
  showAnnouncement?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showAnnouncement = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');

  const navItems = [
    {
      name: 'Study In India',
      path: '/mbbs-india',
      dropdown: [
        { name: 'Course Search', path: '/Courses' },
        { name: 'University Search', path: '/universities' }
      ]
    },
    {
      name: 'Affordable MBBS/MD',
      path: '/mbbs-europe',
      dropdown: []
    },
    {
      name: 'Discover India',
      path: '/discover-india',
      dropdown: []
    },
    {
      name: 'Why Choose Vityaz Global',
      path: '/services',
      dropdown: []
    },
    {
      name: 'Gallery',
      path: '/gallery',
      dropdown: []
    },
    {
      name: 'Blog',
      path: '/blog',
      dropdown: []
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    window.location.reload();
  };
  const handleMouseLeave = (itemName: string) => {
    // Close the dropdown after 1 second delay
    setTimeout(() => {
      // Only close if this is still the active dropdown
      // This prevents issues when quickly moving between items
      if (activeDropdown === itemName) {
        setActiveDropdown(null);
      }
    }, 1400);
  };

  return (
    <>
      {showAnnouncement && (
        <div className="bg-red-600 text-white py-2.5">
          <div className="container mx-auto px-6 lg:px-8 text-center text-sm font-medium">
            Applications for 2025 intake are now open. <Link to="/apply" className="text-blue-200 underline hover:text-white ml-1 font-semibold">Apply now</Link>
          </div>
        </div>
      )}
      
      <header className={`w-full z-40 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-blue-700/95 shadow-lg py-3' : 'bg-blue-600 py-4'
      } sticky top-0`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="inline-flex items-center group"
            >
              <img src={logo} className='w-14 h-14' />
          
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:px-6">
              <div className="bg-blue-800/80 backdrop-blur-sm rounded-full flex items-center px-2 py-1 border border-blue-500 shadow-sm">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => handleMouseLeave(item.name)}
                  >
                    <Link
                      to={item.path}
                      className={`px-4 py-2.5 mx-1 text-sm font-medium rounded-full transition-all duration-200 relative flex items-center
                        ${location.pathname === item.path 
                          ? 'text-white bg-red-600 shadow-sm' 
                          : 'text-white hover:text-white hover:bg-blue-500/80'}`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {item.dropdown.length > 0 && (
                        <ChevronDown className={`w-4 h-4 ml-1.5 transition-transform duration-200 
                          ${activeDropdown === item.name ? 'rotate-180' : ''} 
                          ${location.pathname === item.path ? 'text-white' : 'text-blue-200'}`} 
                        />
                      )}
                    </Link>

                    {item.dropdown.length > 0 && (
                      <div className={`absolute mt-2 w-64 transition-all duration-200 z-50 origin-top
                        ${activeDropdown === item.name 
                          ? 'opacity-100 visible translate-y-0 scale-100' 
                          : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'}`}
                        style={{ left: '50%', transform: activeDropdown === item.name ? 'translateX(-50%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-8px) scale(0.95)' }}
                      >
                        <div className="relative">
                          {/* Dropdown Arrow */}
                          <div className="absolute w-4 h-4 bg-white rotate-45 -top-2 left-1/2 -translate-x-1/2 border-t border-l border-blue-100"></div>
                          
                          <div className="p-3 shadow-xl bg-white border border-blue-100 rounded-lg mt-1.5 relative">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Auth Buttons - Always visible on desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {isAuthenticated ? (
                <>
                  {userRole === 'admin' ? (
                    <Link
                      to="/admin"
                      className="flex items-center space-x-2 bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
                    >
                      <UserCircle className="w-4 h-4" />
                      <span>Admin Panel</span>
                    </Link>
                  ) : (
                    <Link
                      to="/student"
                      className="flex items-center space-x-2 bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
                    >
                      <UserCircle className="w-4 h-4" />
                      <span>Student Portal</span>
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 text-red-600 border border-red-100 px-5 py-2.5 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow hover:shadow-md transition-all duration-200 font-medium text-sm relative overflow-hidden group"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow hover:shadow-md transition-all duration-200 font-medium text-sm relative overflow-hidden group"
                  >
                    <span className="relative z-10">Register</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-blue-200 rounded-lg bg-blue-800/50 hover:bg-blue-700 transition-colors focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-blue-100 shadow-lg transform transition-all duration-300 ease-in-out 
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
          style={{ maxHeight: 'calc(100vh - 70px)', overflowY: 'auto' }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative overflow-hidden">
                  <div 
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors
                      ${location.pathname === item.path ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-50'}`}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium ${location.pathname === item.path ? 'text-blue-800' : 'text-gray-700'}`}
                      onClick={() => item.dropdown.length === 0 && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {item.dropdown.length > 0 && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={`p-1.5 rounded-full ${activeDropdown === item.name ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 
                          ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Dropdown Animation Container */}
                  <div 
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ 
                      maxHeight: activeDropdown === item.name ? '200px' : '0px',
                      opacity: activeDropdown === item.name ? 1 : 0
                    }}
                  >
                    {item.dropdown.length > 0 && (
                      <div className="pl-8 pr-4 py-2 border-l-2 border-blue-300 ml-4 mt-1 mb-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2.5 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-100 grid gap-3">
              {isAuthenticated ? (
                <>
                  {userRole === 'admin' ? (
                    <Link
                      to="/admin"
                      className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserCircle className="w-4 h-4" />
                      <span>Admin Panel</span>
                    </Link>
                  ) : (
                    <Link
                      to="/student"
                      className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <UserCircle className="w-4 h-4" />
                      <span>Student Portal</span>
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center w-full bg-red-50 text-red-600 border border-red-100 px-4 py-3 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-center w-full text-blue-600 border border-blue-200 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium text-sm shadow-sm hover:shadow"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;