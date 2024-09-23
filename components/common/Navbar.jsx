import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowRight, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return router.pathname === path
      ? "text-white"
      : "text-black hover:text-white";
  };

  return (
    <div className="bg-nav">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex justify-between items-center py-6">
          {/* Logo Section */}
          <div>
            <Link title="Logo" href="/">
              <Image
                src="/img/home/logo2-1.png"
                title="Logo"
                height="250"
                width="250"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Hamburger Icon (Visible only on small screens) */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <ArrowRight size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Navbar Links (Hidden on small screens, visible on large screens) */}
          <div className="hidden lg:flex justify-center items-center gap-6 lg:gap-10 text-lg">
            <Link title="Home" href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link
              title="About Us"
              href="/about"
              className={getLinkClass("/about")}
            >
              About Us
            </Link>
            <Link title="Faqs" href="/faqs" className={getLinkClass("/faqs")}>
              FAQs
            </Link>
            <Link
              title="Contact Us"
              href="/contact-us"
              className={getLinkClass("/contact-us")}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Visible only when toggled on small screens) */}
        {isOpen && (
          <div className="flex flex-col items-center gap-4 text-lg lg:hidden ">
            <Link href="/" className={getLinkClass("/")} onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className={getLinkClass("/about")}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/faqs"
              className={getLinkClass("/faqs")}
              onClick={toggleMenu}
            >
              FAQs
            </Link>
            <Link
              href="/contact-us"
              className={getLinkClass("/contact-us")}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}