import React from "react";
import BlogHead from "./BlogHead";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Blog({
  title,
  image,
  description,
  className,
  author,
  date,
  href,
}) {
  return (
    <div className={className}>
      <BlogHead title={title} date={date} author={author} />
      <Link title={title || "Artice"} href={href}>
        <div className="relative overflow-hidden w-full h-[60vh] mt-8">
          <Image
            title={title || "Article Thumbnail"}
            src={image}
            fill={true}
            quality={80}
            loading="lazy"
            priority={false}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="-z-10 w-full h-full object-cover absolute top-0"
          />
        </div>
      </Link>
      <p className="mt-3">{description}</p>
      <Link title="Read More" href={href}>
        <Button className="mt-6">Read More</Button>
      </Link>
    </div>
  );
}
