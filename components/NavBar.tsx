"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const prevActiveElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((s) => !s);
  };

  useEffect(() => {
    if (!isMounted) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isMobileMenuOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setIsMobileMenuOpen(false);
      }
      if (e.key === "Tab") {
        const container = menuRef.current;
        if (!container) return;
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    if (isMobileMenuOpen) {
      prevActiveElRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      // restore focus to the toggle button
      prevActiveElRef.current?.focus?.();
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen, isMounted]);

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      <nav className="block w-full max-w-screen py-3 px-0 mx-auto bg-white bg-opacity-90 sticky top-3 shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container max-w-7xl px-8 mx-auto flex flex-wrap items-center justify-between text-slate-800">
          <Link
            href="/"
            className="logo"
          >
            <Image 
              src='/icons/toastmasterwordlogo.png' 
              alt='logo' 
              width={180} 
              height={38} 
              className="w-28 h-auto lg:w-44"
            />
            <span className="inline-block w-[1px] h-8 lg:h-11 bg-slate-400" aria-hidden="true" />
            <p className='text-center text-base lg:text-xl text-loyal-blue font-bold leading-none'>Heart Filled <br /><span className="text-xs lg:text-base leading-none">Toastmasters</span></p>
          </Link>

          <div className="lg:hidden">
            <button
              ref={toggleButtonRef}
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          {/* Mobile Menu (rendered to body via Portal for correct stacking and accessibility) */}
          {isMounted && createPortal(
            <>
              <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
                  isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } z-[10000]`}
                aria-hidden="true"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              <div
                id="mobile-menu"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile menu"
                className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
                  isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                } lg:hidden z-[10001]`}
              >
                <div className="flex flex-row items-center justify-between border-b pe-4">
                  <Link
                    href="/"
                    className="cursor-pointer py-4 ps-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image 
                      src='/icons/toastmasterwordlogo.png' 
                      alt='logo' 
                      width={250} 
                      height={38} 
                      className="w-38 h-auto"
                    />
                  </Link>
                  <button
                    onClick={toggleMobileMenu}
                    className="inline-flex h-12 w-12 items-center justify-center text-slate-700 hover:text-slate-900"
                    aria-label="Close mobile menu"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="block h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col h-full gap-4 p-4">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center p-1 text-lg gap-x-2 text-slate-700 hover:text-slate-900"
                    >
                      <Link onClick={() => {setIsMobileMenuOpen(false);}} href={item.href} className="flex items-center">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-4">
                    <PrimaryButton href="/visit-our-club" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                      Visit Our Club
                    </PrimaryButton>
                  </li>
                </ul>
              </div>
            </>,
            document.body
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 font-normal text-slate-700 hover:text-slate-900"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <PrimaryButton href="/visit-our-club" size="md">
                  Visit Our Club
                </PrimaryButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}