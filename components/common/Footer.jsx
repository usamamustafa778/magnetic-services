import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const getLinkClass = (path) => {
    return router.pathname === path ? "text-nav" : "text-black hover:text-nav";
  };

  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        {/* Grid layout with three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left">
          {/* First Column: Navigation */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link title="Home" href="/" className={getLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  title="About"
                  href="/about"
                  className={getLinkClass("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  title="Faqs"
                  href="/faqs"
                  className={getLinkClass("/faqs")}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  title="Contact Us"
                  href="/contact-us"
                  className={getLinkClass("/contact-us")}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Column: Policies */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  title="Privacy policy"
                  href="#"
                  className={getLinkClass("/privacypolicy")}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  title="Term And Condition"
                  href="#"
                  className={getLinkClass("/term&condition")}
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Logo */}
          <div className="flex justify-center lg:justify-start items-center">
            <Link title="Logo" href="/">
              <Image
                title="Logo"
                src="/img/home/logo2-1.png"
                height="200"
                width="400"
                alt="Company Logo"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-14 text-start border-t border-gray-400 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
