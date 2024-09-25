import React from "react";
import Image from "next/image"; // Assuming you're using Next.js
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
export default function Footer({ categories, category }) {
  const router = useRouter();

  const getLinkClass = (path) => {
    return router.pathname === path ? "text-nav" : "text-black hover:text-nav";
  };

  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        {/* Grid layout with three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center lg:text-left">
          {/* First Column: Navigation */}

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

          {/* Second Column: Policies */}

          <div>
          <p className="font-bold mb-5">Quick Links</p>

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

              <li>
                <Link
                  title="Privacy policy"
                  href="privacy-policy"
                  className={getLinkClass("/privacy-policy")}
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  title="Term And Condition"
                  href="/terms-and-conditions"
                  className={getLinkClass("/terms-and-conditions")}
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  title="Sitemap"
                  href="/sitemap.xml"
                  legacyBehavior
                  className={`uppercase text-sm mb-2 hover:border-b w-fit transition-all ${getLinkClass(
                    "/terms-and-conditions"
                  )}`}
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Logo */}
          <div className="flex flex-col">
            <p className="font-bold mb-5">Categories</p>
            {categories?.map((item, index) => {
              const categoryPath = `/${item
                ?.toLowerCase()
                ?.replaceAll(" ", "-")}`;
              return (
                <Link
                  key={index}
                  title={item || "Article Link" || ""}
                  href={categoryPath}
                  className={cn(
                    "uppercase text-sm mb-2 hover:text-nav w-fit transition-all",
                    category === item && "border-b-2 border-purple-500",
                    getLinkClass(categoryPath) // Use dynamic category path here
                  )}
                >
                  {item}
                </Link>
              );
            })}
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
