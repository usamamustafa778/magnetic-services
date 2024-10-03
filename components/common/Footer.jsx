import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const formatCategoryPath = (title) =>
  `/${title?.toLowerCase().replace(/\s+/g, "-")}`;

const QuickLinks = memo(() => (
  <nav aria-label="Quick Links">
    <p className="font-bold mb-5">Quick Links</p>
    <ul className="space-y-2">
      {[
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "FAQs", href: "/faqs" },
        { title: "Contact Us", href: "/contact-us" },
        { title: "Privacy & Policy", href: "/privacy-policy" },
        { title: "Terms & Conditions", href: "/terms-and-conditions" },
        { title: "Sitemap", href: "/sitemap.xml", legacy: true },
      ].map(({ title, href }, index) => (
        <li key={index}>
          <Link title={title} href={href} className="capitalize">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
));

const CategoryLinks = memo(({ categories }) => (
  <nav aria-label="Categories" className="flex flex-col">
    <p className="font-bold mb-5">Categories</p>
    <div className="grid grid-cols-3 gap-x-20">
      {categories?.map((item, index) => (
        <Link
          key={index}
          title={item?.title}
          href={formatCategoryPath(item?.title)}
          className="capitalize"
        >
          {item?.title}
        </Link>
      ))}
    </div>
  </nav>
));

// Footer component
export default function Footer({ categories }) {
  const { pathname: currentPath } = useRouter();

  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-footer gap-10 text-center lg:text-left">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start items-center">
            <Link href="/" title="Logo">
              <Image
                src="/img/home/logo2-1.png"
                height={200}
                width={400}
                alt="Company Logo"
              />
            </Link>
          </div>

          {/* Quick Links Section */}
          <QuickLinks />

          {/* Categories Section */}
          <CategoryLinks categories={categories} />
        </div>

        {/* Bottom Section */}
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
