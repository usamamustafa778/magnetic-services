import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@/components/common/Footer";
import { callBackendApi, getDomain, getImagePath } from "@/lib/myFun";
import GoogleTagManager from "@/lib/GoogleTagManager";
import JsonLd from "@/components/json/JsonLd";
import Image from "next/image";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { useRouter } from "next/router";
// import dayjs from "dayjs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Navbar from "@/components/common/Navbar";
import useBreadcrumbs from "@/lib/useBreadcrumbs";

// Font
import { Raleway } from "next/font/google";
import FooterService from "@/components/common/FooterService";
import Rightbar from "@/components/common/Rightbar";

const myFont = Raleway({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

export default function Categories({
  logo,
  blog_list,
  imagePath,
  meta,
  domain,
  categories,
  about_me,
  contact_details,
  favicon,
  layout,
  tag_list,
  nav_type,
}) {
  const router = useRouter();
  const { category } = router.query;

  const breadcrumbs = useBreadcrumbs();

  const filteredBlogList = blog_list.filter((item) => {
    const searchContent = category?.replaceAll("-", " ")?.toLowerCase();
    return item.article_category.toLowerCase().includes(searchContent);
  });

  useEffect(() => {
    const currentPath = router.asPath;

    if (category && (category.includes("%20") || category.includes(" "))) {
      const newCategory = category.replace(/%20/g, "-").replace(/ /g, "-");
      router.replace(`/${newCategory}`);
    }

    if (currentPath.includes("contact-us")) {
      router.replace("/contact");
    }
    if (currentPath.includes("about-us")) {
      router.replace("/about");
    }
  }, [category, router]);

  const page = layout?.find((page) => page.page === "category");

  return (
    <div
      className={cn(
        myFont.className,
        "flex flex-col min-h-screen justify-between"
      )}
    >
      <Head>
        <meta charSet="UTF-8" />
        <title>
          {meta?.title?.replaceAll(
            "##category##",
            category?.replaceAll("-", " ")
          )}
        </title>
        <meta
          name="description"
          content={meta?.description.replaceAll(
            "##category##",
            category?.replaceAll("-", " ")
          )}
        />
        <link rel="author" href={`https://www.${domain}`} />
        <link rel="publisher" href={`https://www.${domain}`} />
        <link rel="canonical" href={`https://www.${domain}/${category}`} />
        {/* <meta name="robots" content="noindex" /> */}
        <meta name="theme-color" content="#008DE5" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleTagManager />
        <meta
          name="google-site-verification"
          content="zbriSQArMtpCR3s5simGqO5aZTDqEZZi9qwinSrsRPk"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${favicon}`}
        />
      </Head>
      <Navbar
        logo={logo}
        nav_type={nav_type}
        category={category}
        imagePath={imagePath}
        blog_list={blog_list}
        categories={categories}
        contact_details={contact_details}
      />
      <FullContainer>
        <Container>
          <Breadcrumbs breadcrumbs={breadcrumbs} className="py-7" />
        </Container>
      </FullContainer>
      <FullContainer className="mb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-home gap-12 w-full mt-4 ">
            <div>
              <h1 className="text-2xl font-semibold border-l-4 border-nav capitalize px-4 py-2 mb-7 w-full">
                Browsing: {category?.replaceAll("-", " ")}
              </h1>
              {filteredBlogList?.length > 0 ? (
                ""
              ) : (
                <div className="flex items-center justify-center border px-10 py-40 text-lg bg-gray-200">
                  No articles found related to {category}
                </div>
              )}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogList.map((item, index) => (
                  <div key={index}>
                    <Link
                      title={item?.title || "Article Link"}
                      href={`/${category
                        ?.replaceAll(" ", "-")
                        ?.toLowerCase()}/${item?.title
                        ?.replaceAll(" ", "-")
                        ?.toLowerCase()}`}
                    >
                      <div className="overflow-hidden relative min-h-40 rounded lg:min-h-52 w-full bg-black flex-1">
                        <Image
                          title={item?.title || item.imageTitle}
                          src={
                            item.image
                              ? `${imagePath}/${item.image}`
                              : "/no-image.png"
                          }
                          fill={true}
                          loading="lazy"
                          alt="blog"
                          className="w-full h-full object-cover absolute top-0 hover:scale-125 transition-all"
                        />
                      </div>
                    </Link>
                    <Link
                      title={item?.title || "Article Link"}
                      href={`/${category
                        ?.replaceAll(" ", "-")
                        ?.toLowerCase()}/${item?.title
                        ?.replaceAll(" ", "-")
                        ?.toLowerCase()}`}
                    >
                      <p className="mt-2 lg:mt-4 font-bold text-lg text-inherit leading-tight hover:underline">
                        {item.title}
                      </p>
                    </Link>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-sm font-semibold">
                        <span className="text-gray-400 text-sm">By</span>:{" "}
                        {item.author}
                      </p>
                      <span className="text-gray-400">--</span>
                      <p className="text-sm text-gray-400 font-semibold">
                        {/* {dayjs(item?.published_at)?.format("MMM D, YYYY")} */}
                      </p>
                    </div>
                    <p className="text-gray-500 mt-4">{item.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
            <Rightbar
              about_me={about_me}
              tag_list={tag_list}
              blog_list={blog_list}
              imagePath={imagePath}
              categories={categories}
              contact_details={contact_details}
              widgets={page?.widgets}
            />
          </div>
        </Container>
      </FullContainer>
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
              "@id": `http://${domain}/${category}`,
              url: `http://${domain}/${category}`,
              name: meta?.title,
              isPartOf: {
                "@id": `http://${domain}`,
              },
              description: meta?.description,
              inLanguage: "en-US",
            },
            // {
            //   "@type": "BreadcrumbList",
            //   itemListElement: breadcrumbs.map((breadcrumb, index) => ({
            //     "@type": "ListItem",
            //     position: index + 1,
            //     name: breadcrumb.label,
            //     item: `http://${domain}${breadcrumb.url}`,
            //   })),
            // },
            {
              "@type": "Organization",
              "@id": `http://${domain}`,
              name: domain,
              url: `http://${domain}/`,
              logo: {
                "@type": "ImageObject",
                url: `${process.env.NEXT_PUBLIC_SITE_MANAGER}/images/${imagePath}/${logo.file_name}`,
              },
              sameAs: [
                "http://www.facebook.com",
                "http://www.twitter.com",
                "http://instagram.com",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `http://${domain}/#website`,
              url: `http://${domain}/`,
              name: domain,
              description: meta?.description,
              inLanguage: "en-US",
              // potentialAction: {
              //   "@type": "SearchAction",
              //   target: `http://${domain}/search?q={search_term_string}`,
              //   "query-input": "required name=search_term_string",
              // },
              publisher: {
                "@type": "Organization",
                "@id": `http://${domain}`,
              },
            },
            {
              "@type": "ItemList",
              url: `http://${domain}`,
              name: "blog",
              itemListElement: blog_list?.map((blog, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Article",
                  url: `http://${domain}/${
                    blog?.article_category?.name
                  }/${blog?.title?.replaceAll(" ", "-")?.toLowerCase()}`,
                  name: blog.title,
                },
              })),
            },
          ],
        }}
      />
    </div>
  );
}

export async function getServerSideProps({ req, query }) {
  const domain = getDomain(req?.headers?.host);
  const { category } = query;

  const logo = await callBackendApi({
    domain,
    query,
    type: "logo",
  });
  const favicon = await callBackendApi({ domain, query, type: "favicon" });
  const banner = await callBackendApi({ domain, query, type: "banner" });
  const footer_text = await callBackendApi({
    domain,
    query,
    type: "footer_text",
  });

  const copyright = await callBackendApi({
    domain,
    query,
    type: "copyright",
  });
  const blog_list = await callBackendApi({ domain, query, type: "blog_list" });
  const categories = await callBackendApi({
    domain,
    query,
    type: "categories",
  });
  const meta = await callBackendApi({ domain, query, type: "meta_category" });
  const about_me = await callBackendApi({ domain, query, type: "about_me" });
  const layout = await callBackendApi({ domain, type: "layout" });
  const tag_list = await callBackendApi({ domain, type: "tag_list" });
  const nav_type = await callBackendApi({ domain, type: "nav_type" });

  let project_id = logo?.data[0]?.project_id || null;
  let imagePath = await getImagePath(project_id, domain);

  const categoryExists = categories?.data[0]?.value?.some(
    (cat) =>
      cat?.title?.toLowerCase() === category?.replaceAll("-", " ").toLowerCase()
  );

  if (!categoryExists) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      domain,
      imagePath,
      meta: meta?.data[0]?.value || null,
      favicon: favicon?.data[0]?.file_name || null,
      logo: logo?.data[0],
      layout: layout?.data[0]?.value || null,
      banner: banner.data[0] || null,
      blog_list: blog_list.data[0].value,
      categories: categories?.data[0]?.value || null,
      footer_text: footer_text?.data[0]?.value || null,
      copyright: copyright?.data[0]?.value || null,
      domain: domain === "hellospace.us" ? req?.headers?.host : domain,
      about_me: about_me.data[0] || null,
      // contact_details: contact_details.data[0].value,
      tag_list: tag_list?.data[0]?.value || null,
      nav_type: nav_type?.data[0]?.value || {},
    },
  };
}
