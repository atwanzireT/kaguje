"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Determine the effective theme (user preference or system)
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Theme configuration
  const themeConfig = {
    dark: {
      bg: 'bg-gray-900',
      text: 'text-gray-300',
      hoverText: 'hover:text-yellow-400',
      border: 'border-gray-700',
      hoverBg: 'hover:bg-gray-800',
      buttonBg: 'bg-yellow-600',
      buttonHover: 'hover:bg-yellow-700',
      toggleHover: 'hover:bg-gray-800',
      mobileMenuBg: 'bg-gray-900',
      shadow: 'shadow-md'
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-700',
      hoverText: 'hover:text-yellow-500',
      border: 'border-gray-200',
      hoverBg: 'hover:bg-gray-100',
      buttonBg: 'bg-yellow-500',
      buttonHover: 'hover:bg-yellow-600',
      toggleHover: 'hover:bg-gray-100',
      mobileMenuBg: 'bg-white',
      shadow: 'shadow-md'
    }
  };

  const colors = currentTheme === 'dark' ? themeConfig.dark : themeConfig.light;

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? `${colors.bg} ${colors.shadow} py-2` 
        : `${colors.bg} py-4`
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center mr-3">
            <Link href="/" aria-label="Home">
              <img
                src="/logo.jpg"
                alt="Kaguje Logo"
                className="h-10 w-auto rounded-md mr-2"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/" className="flex items-center" aria-label="Home">
              <span className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">Kaguje</span>
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">TECH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/phone-accessories" colors={colors} onClick={() => setIsOpen(false)}>
              Phone Accessories
            </NavLink>
            <NavLink href="/web-development" colors={colors} onClick={() => setIsOpen(false)}>
              Web Development
            </NavLink>
            <NavLink href="/app-development" colors={colors} onClick={() => setIsOpen(false)}>
              App Development
            </NavLink>
            <NavLink href="/repair-services" colors={colors} onClick={() => setIsOpen(false)}>
              Repair Services
            </NavLink>
            
            {/* Theme Toggle */}
            <ThemeToggle 
              theme={currentTheme} 
              setTheme={setTheme} 
              colors={colors}
            />

            <Link 
              href="/contact" 
              className={`${colors.buttonBg} ${colors.buttonHover} text-white px-4 py-2 rounded-md font-medium transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle 
              theme={currentTheme} 
              setTheme={setTheme} 
              colors={colors}
              mobile
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${colors.text} ${colors.hoverText} focus:outline-none`}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${colors.mobileMenuBg} ${colors.shadow}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/phone-accessories" colors={colors} onClick={() => setIsOpen(false)}>
            Phone Accessories
          </MobileNavLink>
          <MobileNavLink href="/web-development" colors={colors} onClick={() => setIsOpen(false)}>
            Web Development
          </MobileNavLink>
          <MobileNavLink href="/app-development" colors={colors} onClick={() => setIsOpen(false)}>
            App Development
          </MobileNavLink>
          <MobileNavLink href="/repair-services" colors={colors} onClick={() => setIsOpen(false)}>
            Repair Services
          </MobileNavLink>
          <Link 
            href="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium text-white ${colors.buttonBg} ${colors.buttonHover}`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children, colors, onClick }) => (
  <Link 
    href={href} 
    className={`${colors.text} ${colors.hoverText} px-3 py-2 font-medium transition-colors`}
    onClick={onClick}
  >
    {children}
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ href, children, colors, onClick }) => (
  <Link 
    href={href} 
    className={`block px-3 py-2 rounded-md text-base font-medium ${colors.text} ${colors.hoverText} ${colors.hoverBg}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

// Reusable ThemeToggle component
const ThemeToggle = ({ theme, setTheme, colors, mobile = false }) => (
  <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className={`p-2 rounded-full ${colors.text} ${colors.toggleHover} transition-colors ${mobile ? 'md:hidden' : ''}`}
    aria-label="Toggle dark mode"
  >
    {theme === 'dark' ? (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    )}
  </button>
);

export default Navbar;