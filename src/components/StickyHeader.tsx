
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if there is a hash in the URL when the component mounts or location changes
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      // If we're already on the page with the section, just scroll to it
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate to home page with the hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="content-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img
              src="/images/brand-logo.JPG"
              alt="TechTaste Logo"
              className="h-8 md:h-10"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('services-section')}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              isActive('/services') || location.hash === '#services-section' ? 'text-primary' : 'text-foreground'
            )}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('portfolio-section')}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              location.hash === '#portfolio-section' ? 'text-primary' : 'text-foreground'
            )}
          >
            Portfolio
          </button>
          <Link
            to="/company"
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              isActive('/company') ? 'text-primary' : 'text-foreground'
            )}
          >
            Company
          </Link>
          <button
            onClick={() => scrollToSection('contact-section')}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              isActive('/contact') || location.hash === '#contact-section' ? 'text-primary' : 'text-foreground'
            )}
          >
            Contact
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <div className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 transform",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          )}>
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => {
                  scrollToSection('services-section');
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive('/services') || location.hash === '#services-section' ? 'text-primary' : 'text-foreground'
                )}
              >
                Services
              </button>
              <button
                onClick={() => {
                  scrollToSection('portfolio-section');
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  location.hash === '#portfolio-section' ? 'text-primary' : 'text-foreground'
                )}
              >
                Portfolio
              </button>
              <button
                onClick={() => {
                  navigate('/company');
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive('/company') ? 'text-primary' : 'text-foreground'
                )}
              >
                Company
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact-section');
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive('/contact') || location.hash === '#contact-section' ? 'text-primary' : 'text-foreground'
                )}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default StickyHeader;
