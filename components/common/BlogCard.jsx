import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const BlogCard = ({
  title,
  image,
  href,
  published_at,
  content,
  className,
  imageHeight,
  altImage,
  imageTitle,
}) => {
  return (
    <div
      className={cn("flex flex-col items-center text-center h-fit", className)}
    >
      <Link
        title={imageTitle || title || "Article Thumbnail"}
        href={href || ""}
        className={cn("relative overflow-hidden w-full", imageHeight)}
      >
        <Image
          src={image}
          width={331}
          loading="lazy"
          alt={altImage}
          priority={false}
          title={imageTitle}
          height={parseInt(imageHeight, 10) || 420}
          className="w-full h-full object-cover absolute top-0 hover:scale-125 transition-all"
        />
      </Link>
      <div className="flex flex-col items-center gap-2 mt-3">
        <Link title={title || "Article Link"} href={href || ""}>
          <h2 className="font-extrabold md:text-lg leading-tight hover:underline">
            {title}
          </h2>
        </Link>
        <p className="text-sm font-medium text-gray-700">{published_at}</p>
      </div>
      <p className="mt-3 text-xs md:hidden">{content.slice(0, 100)}</p>
      <p className="mt-3 text-sm hidden md:block">{content}</p>
      <Link href={href || ""} className="mt-3">
        <Button className="rounded-full  bg-nav ">Read Article</Button>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  published_at: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  imageHeight: PropTypes.string,
};

export default BlogCard;
