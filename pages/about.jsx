import React from "react";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";
import GoogleTagManager from "@/lib/GoogleTagManager";
import Banner from "@/components/common/Banner";
import Help from "@/components/about/Help";
import Footer from "@/components/common/Footer";
import JsonLd from "@/components/json/JsonLd";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { callBackendApi, getDomain, getImagePath } from "@/lib/myFun";
import MarkdownIt from "markdown-it";
import Image from "next/image";

export default function about({
   about_me,
  logo,
  imagePath,
  blog_list,
  category,
   categories

  }) {
  const markdownIt = new MarkdownIt();
  const content = markdownIt?.render(about_me || "");
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
      <Navbar
        logo={logo}
        imagePath={imagePath}
       
      />
      <Banner title={"About Us"} />
      <FullContainer>
        <Container>
          <div
            className="prose max-w-full my-14 text-center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="mb-4">
            <Image
              src="/img/about-img2.jpg"
              title="Background Image"
              height="600"
              width="1200"
              alt="Image"
            />
          </div>
        </Container>
      </FullContainer>
      <Help />
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

export async function getServerSideProps({ req, query }) {
  const domain = getDomain(req?.headers?.host);
  const logo = await callBackendApi({ domain, type: "logo" });

  const project_id = logo?.data[0]?.project_id || null;

  const imagePath = await getImagePath(project_id, domain);

  const about_me = await callBackendApi({ domain, query, type: "about_me" });
  const categories = await callBackendApi({ domain, type: "categories" });

  console.log("Fetched about_me:", about_me);
  return {
    props: {
      domain,
      imagePath,
      about_me: about_me?.data[0]?.value || "",
      logo: logo?.data[0] || null,
      categories: categories?.data[0]?.value || null,
    },
  };
}
