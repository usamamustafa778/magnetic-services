import React from "react";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";
import Banner from "@/components/common/Banner";
import Footer from "@/components/common/Footer";
import Faqs from "@/components/common/Faqs";
import ImageSection from "@/components/faqs/ImageSection";
import JsonLd from "@/components/json/JsonLd";

export default function faqs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Magnetic Services | Faqs</title>
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
      <Banner title={"Frequently Asked Questions"} />
      <Faqs />
      <ImageSection />
      <Footer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.mqagneticservices.com/faqs",
              url: "https://www.mqagneticservices.com/faqs",
              name: "FAQs - Magnetic Services",
              isPartOf: {
                "@id": "https://www.mqagneticservices.com",
              },
              description:
                "Find answers to frequently asked questions about Magnetic Services and our offerings.",
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
              "@type": "FAQPage",
              "@id": "https://www.mqagneticservices.com/faqs",
              url: "https://www.mqagneticservices.com/faqs",
              name: "Frequently Asked Questions",
              description:
                "Answers to common questions regarding our services and support.",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What services does Magnetic Services provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Magnetic Services provides a wide range of services including consulting, IT solutions, and customer support globally.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I contact Magnetic Services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can contact us via our contact page, email, or by calling our customer support at +1-800-123-4567.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer services globally?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer services to clients around the world, providing tailored solutions to meet global business needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are your hours of operation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our customer support is available 24/7, and our business hours are Monday to Friday, 9 AM to 6 PM.",
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
                  name: "FAQs",
                  item: "https://www.mqagneticservices.com/faqs",
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}
