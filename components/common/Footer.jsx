import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function for classNames

// Utility function to get active link class
const getLinkClass = (routerPath, path) => {
  return routerPath === path ? "text-nav" : "text-black hover:text-nav";
};

// Component for rendering quick links
const QuickLinks = ({ getLinkClass }) => (
  <div>
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
      ].map(({ title, href, legacy }, index) => (
        <li key={index}>
          <Link
            title={title}
            href={href}
            className={cn(
              getLinkClass(href),
              "uppercase text-sm hover:border-b w-fit transition-all"
            )}
            {...(legacy && { legacyBehavior: true })}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Component for rendering category links
const CategoryLinks = ({ categories, category, getLinkClass }) => (
  <div className="flex flex-col">
    <p className="font-bold mb-5">Categories</p>
    {categories?.map((item, index) => {
      const categoryPath = `/${item?.title
        ?.toLowerCase()
        .replace(/\s+/g, "-")}`;
      return (
        <Link
          key={index}
          title={item?.title}
          href={categoryPath}
          className={cn(
            "uppercase text-sm mb-2 hover:text-nav w-fit transition-all",
            category === item?.title && "border-b-2 border-purple-500",
            getLinkClass(categoryPath)
          )}
        >
          {item?.title}
        </Link>
      );
    })}
  </div>
);

export default function Footer({ categories, category }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center lg:text-left">
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
          <QuickLinks
            getLinkClass={(path) => getLinkClass(currentPath, path)}
          />

          {/* Categories Section */}
          <CategoryLinks
            categories={categories}
            category={category}
            getLinkClass={(path) => getLinkClass(currentPath, path)}
          />
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
