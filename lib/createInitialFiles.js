import fs from "fs";
import path from "path";

export const checkOrCreateSitemap = ({ DOMAIN }) => {
  const dirPath = path.join(process.cwd(), "public", DOMAIN);
  const filePath = path.join("public", "main-sitemap.xsl");

  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  }
};
