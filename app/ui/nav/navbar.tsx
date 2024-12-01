"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdBlurOn } from "react-icons/md";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value to control when the navbar becomes sticky
      const scrollThreshold = 50;

      // Check if the page has been scrolled past the threshold
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4
        transition-transform duration-300 ease-in-out
        ${isSticky ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="mx-auto max-w-full md:max-w-5xl bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg border-2 border-neutral-700/40 rounded-lg">
        <div className="flex h-14 items-center justify-between px-2">
          <Link
            href="/"
            className="text-lg font-semibold opacity-40 hover:opacity-100 transition-all duration-300 ml-2"
          >
            <MdBlurOn size={30} color="#d6d6d6" />
          </Link>
          <div className="flex items-center md:gap-8 gap-6 mr-4">
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/spotify"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Spotify
            </Link>
            <Link
              href="/guestbook"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Guestbook
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
