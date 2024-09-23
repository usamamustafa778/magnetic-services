import React from "react";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";
import Banner from "@/components/common/Banner";
import Footer from "@/components/common/Footer";
import Service from "@/components/contact/Service";
import ContactForm from "@/components/contact/ContactForm";
import CallUs from "@/components/common/CallUs";
import JsonLd from "@/components/json/JsonLd";

export default function contactUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Magnetic Services | Contact Us</title>
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
      <Banner title={"Contact Us"} />
      <Service />
      <ContactForm />
      <CallUs />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.mqagneticservices.com/contact",
              url: "https://www.mqagneticservices.com/contact",
              name: "Contact Us - Magnetic Services",
              isPartOf: {
                "@id": "https://www.mqagneticservices.com",
              },
              description:
                "Get in touch with Magnetic Services for world-class services and support.",
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
              description:
                "Providing top-tier services and solutions to clients worldwide.",
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                "@id": "https://www.mqagneticservices.com",
              },
            },
            {
              "@type": "ContactPage",
              "@id": "https://www.mqagneticservices.com/contact",
              url: "https://www.mqagneticservices.com/contact",
              name: "Contact Magnetic Services",
              description:
                "Reach out to us through our contact page for inquiries, services, and support.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-123-4567", // Replace with your actual contact number
                contactType: "customer support",
                availableLanguage: "English",
                areaServed: "Worldwide",
              },
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
                  name: "Contact",
                  item: "https://www.mqagneticservices.com/contact",
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
