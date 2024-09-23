import React from "react";

import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import GoogleTagManager from "@/lib/GoogleTagManager";
import HomeBanner from "@/components/home/HomeBanner";
import Industries from "@/components/home/Industries";
import Services from "@/components/home/Services";
import Footer from "@/components/common/Footer";
import Trust from "@/components/home/Trust";
import Coverage from "@/components/home/Coverage";
import FooterService from "@/components/common/Footerservice";
import JsonLd from "@/components/json/JsonLd";

export default function index() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>"Magnetic Services"</title>
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
      <HomeBanner />
      <Industries />
      <Services />
      <Trust />
      <Coverage />
      <FooterService />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "id",
              url: "https://www.mqagneticservices.com",
              name: "Magnetic Services",
              isPartOf: {
                "@id": "https://www.mqagneticservices.com",
              },
              description: "Contact us and Take our World Wide services",
              inLanguage: "en-US",
            },
            {
              "@type": "Organization",
              "@id": "id",
              name: "Magnetic Services",
              url: "https://www.mqagneticservices.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mqagneticservices.com/images/logo.png", // Replace with your logo URL
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
              description: "Contact us and Take our World Wide services",
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
                  item: "https://www.mqagneticservices.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://www.mqagneticservices.com/blog",
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
