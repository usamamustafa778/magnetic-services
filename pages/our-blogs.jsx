import React from "react";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Banner from "@/components/common/Banner";
import BlogCard from "@/components/common/BlogCard";
import Footer from "@/components/common/Footer";
import {
  callBackendApi,
  getDomain,
  getImagePath,
  robotsTxt,
} from "@/lib/myFun";
import Rightbar from "@/components/common/Rightbar";

import MostPopular from "@/components/MostPopular";
import JsonLd from "@/components/json/JsonLd";
import FooterService from "@/components/common/FooterService";
import MustRead from "@/components/common/MustRead";
import Blog from "@/components/Blog";

export default function OurBlogs({
  logo,
  imagePath,
  blog_list,
  categories,
  category,
  about_me,
  contact_details,
  tag_list,
  layout,
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Magnetic Services | Our Blogs</title>
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

      <Navbar logo={logo} imagePath={imagePath} />

      <Banner title={"Our Blogs"} />
      <MostPopular blog_list={blog_list} imagePath={imagePath} />
      <FullContainer>
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-home gap-12 lg:gap-14 w-full">
            <div className="flex flex-col gap-20">
              {blog_list?.map((item, index) => (
                <Blog
                  key={index}
                  index={index}
                  title={item.title}
                  author={item.author}
                  published_at={item.published_at}
                  tagline={item.tagline}
                  content={item.articleContent}
                  image={
                    item.image ? `${imagePath}/${item.image}` : "/no-image.png"
                  }
                  href={`/${item?.article_category?.name
                    ?.toLowerCase()
                    ?.replaceAll(" ", "-")}/${item?.title
                    ?.replaceAll(" ", "-")
                    ?.toLowerCase()}`}
                  category={item?.article_category?.name}
                  imageHeight="h-72 md:h-[420px]"
                  imageTitle={
                    item.imageTitle || item.title || "Blog Image Title"
                  }
                  altImage={
                    item.altImage || item.tagline || "Article Thumbnail"
                  }
                />
              ))}
            </div>
            <Rightbar
              about_me={about_me}
              imagePath={imagePath}
              categories={categories}
              contact_details={contact_details}
            />
          </div>
        </Container>
      </FullContainer>
      <MustRead blog_list={blog_list} imagePath={imagePath} />
      <FooterService />

      <Footer
        imagePath={imagePath}
        blog_list={blog_list}
        categories={categories}
        category={category}
      />

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

export async function getServerSideProps({ req }) {
  const domain = getDomain(req?.headers?.host);
  const meta = await callBackendApi({ domain, type: "meta_home" });
  const logo = await callBackendApi({ domain, type: "logo" });
  const favicon = await callBackendApi({ domain, type: "favicon" });
  const blog_list = await callBackendApi({ domain, type: "blog_list" });
  const categories = await callBackendApi({ domain, type: "categories" });
  const contact_details = await callBackendApi({
    domain,
    type: "contact_details",
  });
  const project_id = logo?.data[0]?.project_id || null;
  const about_me = await callBackendApi({ domain, type: "about_me" });
  const copyright = await callBackendApi({ domain, type: "copyright" });
  const banner = await callBackendApi({ domain, type: "banner" });
  const layout = await callBackendApi({ domain, type: "layout" });
  const tag_list = await callBackendApi({ domain, type: "tag_list" });
  const nav_type = await callBackendApi({ domain, type: "nav_type" });
  const all_data = await callBackendApi({ domain, type: "" });
  const imagePath = await getImagePath(project_id, domain);

  robotsTxt({ domain });

  return {
    props: {
      domain,
      imagePath,
      meta: meta?.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      logo: logo?.data[0] || null,
      layout: layout?.data[0]?.value || null,
      blog_list: blog_list?.data[0]?.value || [],
      categories: categories?.data[0]?.value || null,
      copyright: copyright?.data[0]?.value || null,
      about_me: about_me?.data[0] || null,
      banner: banner?.data[0],
      contact_details: contact_details?.data[0]?.value || null,
      nav_type: nav_type?.data[0]?.value || {},
      tag_list: tag_list?.data[0]?.value || null,
      all_data,
    },
  };
}
