import { getDomain } from "@/lib/myFun";
import fs from "fs";

const e = () => <></>;
export default e;

export const getServerSideProps = async ({ req, res }) => {
  const domain = getDomain(req?.headers?.host);
  try {
    const robots = fs.readFileSync(
      `${process.cwd()}/public/robots/${domain}/robots.txt`
    );

    res.setHeader("Content-Type", "text/plain");
    res.write(robots);
    res.end();

    return {
      props: {},
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
