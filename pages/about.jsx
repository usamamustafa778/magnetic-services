import React from "react";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";
import Banner from "@/components/common/Banner";
import Getknow from "@/components/about/Getknow";
import Help from "@/components/about/Help";
import Footer from "@/components/common/Footer";
import JsonLd from "@/components/json/JsonLd";

export default function about() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Magnetic Services | About Us</title>
        <meta
          name="description"
          content="Contact us and Take our World Wide services"
        />
        <link rel="author" href="https://www.mqagneticservices.com" />
        <link rel="publisher" href="https://www.mqagneticservices.com" />
        <link rel="canonical" href="https://www.mqagneticservices.com" />
        <meta name="theme-color" content="#008DE5" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleTagManager />
        <meta
          name="google-site-verification"
          content="zbriSQArMtpCR3s5simGqO5aZTDqEZZi9qwinSrsRPk"
        />
      </Head>
      <Navbar />
      <Banner title={"About Us"} />
      <Getknow />
      <Help />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.mqagneticservices.com/about",
              url: "https://www.mqagneticservices.com/about",
              name: "About Us - Magnetic Services",
              isPartOf: {
                "@id": "https://www.mqagneticservices.com",
              },
              description:
                "Learn more about Magnetic Services, our mission, vision, and the team behind our world-class offerings.",
              inLanguage: "en-US",
            },
            {
              "@type": "Organization",
              "@id": "https://www.mqagneticservices.com",
              name: "Magnetic Services",
              url: "https://www.mqagneticservices.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mqagneticservices.com/images/logo.png", // Use your actual logo URL
              },
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.twitter.com/yourpage",
                "https://www.instagram.com/yourpage",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.mqagneticservices.com/#website",
              url: "https://www.mqagneticservices.com",
              name: "Magnetic Services",
              description: "Providing top-tier services to clients worldwide.",
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                "@id": "https://www.mqagneticservices.com",
              },
            },
            {
              "@type": "ItemList",
              url: "https://www.mqagneticservices.com/blog",
              name: "blog",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Article",
                    url: "https://www.mqagneticservices.com/blog/article-1",
                    name: "First Blog Article",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Article",
                    url: "https://www.mqagneticservices.com/blog/article-2",
                    name: "Second Blog Article",
                  },
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.mqagneticservices.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://www.mqagneticservices.com/about",
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
