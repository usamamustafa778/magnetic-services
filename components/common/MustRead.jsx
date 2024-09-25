import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function MustRead({ blog_list = [], imagePath }) {
  const mustReadBlogs = blog_list.filter((item) => item.isMustRead);

  return (
    mustReadBlogs?.length > 0 && (
      <FullContainer className="py-16 text-center">
        <Container className="border border-gray-100 px-3 py-9 md:px-9">
          <h2 className="font-bold text-3xl -mt-14 bg-white px-6">Must Read</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-11 mb-3">
            {mustReadBlogs.map((item, index) => (
              <BlogCard
                key={item.id || index}
                title={item.title}
                author={item.author}
                date={item.published_at}
                tagline={item.tagline}
                description={item.articleContent}
                image={`${imagePath}/${item.image || "no-image.png"}`}
                href={`/${item?.article_category?.name
                  ?.toLowerCase()
                  ?.replaceAll(" ", "-")}/${item?.title
                  ?.replaceAll(" ", "-")
                  ?.toLowerCase()}`}
                category={item.article_category.name}
                imageTitle={item.imageTitle}
                altImage={item.altImage}
              />
            ))}
          </div>
        </Container>
      </FullContainer>
    )
  );
}

function BlogCard({
  title,
  image,
  href,
  category,
  imageTitle = "Article Thumbnail", // Default value
  altImage = "No Thumbnail Found", // Default value
  tagline,
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <Link
        href={href || ""}
        title={imageTitle}
        className="relative overflow-hidden w-full h-[195px]"
      >
        <Image
          src={image}
          title={imageTitle}
          alt={altImage || tagline}
          priority={false}
          width={298}
          height={195}
          layout="responsive"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
          className="w-full h-full object-cover hover:scale-110 transition-all"
        />
      </Link>
      <Link href={`/${category?.toLowerCase().replaceAll(" ", "-")}`}>
        <Badge className="text-center bg-nav whitespace-nowrap my-2">{category}</Badge>
      </Link>
      <Link href={href || ""}>
        <p className="font-semibold leading-5 text-lg hover:underline">
          {title}
        </p>
      </Link>
    </div>
  );
}
