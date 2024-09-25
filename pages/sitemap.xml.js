import { checkOrCreateSitemap } from "@/lib/createInitialFiles";
import { getDomain, getSitemaps } from "@/lib/myFun";
// import { getSitemaps } from "../sitemap-api";

const Sitemap = () => {};

export const getServerSideProps = async ({ req, res, query }) => {
  const baseUrl = getDomain(req?.headers?.host);
  const xslContent = checkOrCreateSitemap({ DOMAIN: baseUrl });
  const sitemaps = await getSitemaps({ domain: baseUrl, query });
  // const sitemaps = [1, 2, 3, 4, 5, 6, 6];
  // sitemap.xml
  const currentDate = new Date();
  const isoDate = currentDate?.toISOString();
  const isoDateParts = isoDate?.split("T");
  const datePart = isoDateParts[0];
  const timePart = isoDateParts[1]?.split(".")[0];
  const formattedDate = `${datePart}T${timePart}+00:00`;
  const modifiedXslContent = xslContent
    ?.replaceAll(
      "%DOMAIN%",
      `${baseUrl.startsWith("https://") ? "" : "https://"}${baseUrl}`
    )
    ?.replaceAll("%TITLE%", "TITLE");

  const sitemapindex = `<?xml version="1.0" encoding="UTF-8"?>
  
  <?xml-stylesheet type="text/xsl" href="data:text/xml;charset=utf-8;base64,${Buffer?.from(
    modifiedXslContent
  ).toString("base64")}" ?>
  
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
    .map(
      (sitemap, index) => `
        <sitemap>
          <loc>
            ${
              baseUrl.startsWith("https://")
                ? baseUrl
                : `https://${
                    baseUrl.startsWith("www.") ? baseUrl : `www.${baseUrl}`
                  }`
            }/sitemaps/${index + 1}
          </loc>
          <lastmod>${formattedDate}</lastmod>
        </sitemap>
      `
    )
    .join("")}
  </sitemapindex>`;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapindex);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
