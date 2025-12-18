"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOBILE_BREAKPOINT = 480; // px

const NavBar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const update = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Wait until mounted before rendering dynamic UI
  if (!isMounted) return null;

  return (
    <div className={isMobile ? "flex justify-start py-2 px-0" : "flex justify-end py-2"}>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        {/* Desktop nav */}
        {!isMobile && (
          <motion.ul
            className="flex gap-8 px-6 py-3 backdrop-blur-md bg-bg-secondary/60 rounded-full border border-divider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <motion.li whileHover={{y: -2}}>
              <a href="#origins" className="nav-link">Origins</a>
            </motion.li>
            <motion.li whileHover={{y: -2}}>
              <a href="#innovation" className="nav-link">Innovation</a>
            </motion.li>
            <motion.li whileHover={{y: -2}}>
              <a href="#tomorrow" className="nav-link">Tomorrow</a>
            </motion.li>
          </motion.ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <div className="flex items-center">
            <motion.button
              onClick={() => setMenuOpen((s) => !s)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        )}

        {/* Mobile overlay */}
        {isMobile && menuOpen && (
          <div className="fixed inset-0 bg-black/20 z-10" onClick={() => setMenuOpen(false)} aria-hidden="true" />
        )}

        {/* Mobile dropdown */}
        {isMobile && (
          <div
            id="mobile-menu"
            className={`absolute left-0 top-full mt-2 w-44 bg-white rounded-lg shadow-md z-20 transform origin-top transition-all duration-300 ease-out ${menuOpen ? "opacity-100 translate-y-0 scale-100 max-h-60 pointer-events-auto" : "opacity-0 -translate-y-2 scale-95 max-h-0 overflow-hidden pointer-events-none"
              }`}
            aria-hidden={!menuOpen}
          >
            <ul className="flex flex-col text-sm font-medium text-gray-700">
              <li><a href="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Home</a></li>
              <li><a href="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">About</a></li>
              <li><a href="/projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Projects</a></li>
              <li><a href="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
