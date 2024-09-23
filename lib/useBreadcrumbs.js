import { useRouter } from "next/router";
import { useMemo } from "react";

const useBreadcrumbs = () => {
  const router = useRouter();

  const pathSegments = useMemo(() => {
    return router.asPath
      .split("?")[0]
      .split("/")
      .filter((segment) => segment);
  }, [router.asPath]);

  const breadcrumbs = useMemo(() => {
    return pathSegments.map((segment, index) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const label = segment.replace(/[-_]/g, " ");

      return {
        label: label.charAt(0).toUpperCase() + label.slice(1),
        url: url,
      };
    });
  }, [pathSegments]);

  return [{ label: "Home", url: "/" }, ...breadcrumbs];
};

export default useBreadcrumbs;
