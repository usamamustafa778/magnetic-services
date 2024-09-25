import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PopularPosts({ blog_list, imagePath }) {
  return (
    <div className="flex flex-col">
      <p className="font-bold">Popular Posts</p>
      {blog_list.map(
        (item, index) =>
          item.isPopular && (
            <Blog
              key={index}
              title={item.title}
              href={`/${item?.article_category?.name
                ?.toLowerCase()
                ?.replaceAll(" ", "-")}/${item?.title
                ?.replaceAll(" ", "-")
                ?.toLowerCase()}`}
              image={
                item.image ? `${imagePath}/${item.image}` : "/no-image.png"
              }
              author={item.author}
              date={item.published_at}
              imageTitle={item.imageTitle}
              altImage={item.altImage}
              tagline={item.tagline}
            />
          )
      )}
    </div>
  );
}

function Blog({
  image,
  title,
  href,
  author,
  date,
  imageTitle,
  altImage,
  tagline,
}) {
  return (
    <div className="flex items-center gap-3 mt-5 cursor-pointer">
      <Link
        title={title || "Article Thumbnail"}
        href={href || ""}
        className="relative overflow-hidden w-2/6 h-20"
      >
        <Image
          src={image}
          fill={true}
          loading="eager"
          priority={true}
          sizes="200px, 150px"
          title={imageTitle || title || "Article Thumbnail"}
          alt={altImage || tagline || "No Thumbnail Found"}
          className="w-full h-full object-cover absolute top-0 hover:scale-110 transition-all"
        />
      </Link>
      <div className="flex-1">
        <Link title={title || "Article Link"} href={href || ""}>
          <p className="font-bold text-sm hover:underline">{title}</p>
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-xs mt-2 text-gray-400">{author}</p>
          <span className="text-xs text-gray-400">_</span>
          <p className="text-xs mt-2 text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
}
