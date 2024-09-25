import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowRight, Menu } from "lucide-react";
import FullContainer from "../FullContainer";
import Container from "../Container";
import Logo from "./Logo";

export default function Navbar({ logo, imagePath }) {
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

  console.log("Logo", logo);

  return (
    <FullContainer className="bg-nav sticky top-0 z-20 ">
      <Container className="md:flex-row md:justify-between  ">
        <Logo logo={logo} imagePath={imagePath} />

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <ArrowRight size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center gap-6 text-lg">
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

          <Link
            title=""
            href="/our-blogs"
            className={getLinkClass("/blogs")}
          >
            Blog
          </Link>
        </div>

        {/* Phone Screen NavMenu */}
        {isOpen && (
          <div className="flex flex-col items-center gap-4 text-lg md:hidden ">
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
      </Container>
    </FullContainer>
  );
}
