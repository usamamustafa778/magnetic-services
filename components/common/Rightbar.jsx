import { Circle, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import MarkdownIt from "markdown-it";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

const md = new MarkdownIt();

export default function Rightbar({
  widgets = [],
  about_me = {},
  category,
  tag_list = [],
  blog_list = [],
  imagePath,
  categories = [],
}) {
  const content = md.render(about_me.value || "");
  const router = useRouter();
  const currentPath = router.asPath;

  const isActive = (path) => currentPath === path;
  const lastFiveBlogs = blog_list.slice(-5);

  const renderAbout = () => (
    <Link
      title="About"
      href="/about"
      className="border p-5 flex flex-col items-center text-center"
    >
      <h2 className="bg-white px-5 font-bold text-lg -mt-9">About</h2>
      <div className="relative overflow-hidden w-full h-[150px] mt-8">
        <Image
          src={`${imagePath}/${about_me.file_name}`}
          title={`${content.slice(0, 100)}...`}
          alt={`${content.slice(0, 100)}...`}
          priority
          width={241}
          height={150}
          loading="eager"
          className="-z-10 object-cover"
        />
      </div>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: `${content.slice(0, 100)}...` }}
      />
      <p className="mt-3 underline font-bold">More about Us?</p>
    </Link>
  );

  const renderCategories = () => (
    <div className="border p-5 flex flex-col items-center text-center">
      <h2 className="bg-white px-5 font-bold text-lg -mt-9">Categories</h2>
      <div className="flex flex-col w-full text-left px-2 py-4">
        {categories.map((item, index) => (
          <Link
            key={index}
            title={item}
            href={`/${item.toLowerCase().replace(/ /g, "-")}`}
            className={cn(
              "text-gray-500 capitalize w-full flex items-center gap-2 hover:text-black transition-all p-2 border-b-2 border-gray-100 hover:border-black",
              (category === item || isActive(`/${item}`)) &&
                "border-black text-black"
            )}
          >
            <Circle className="w-2 h-2 text-blue-800" />
            {item}
          </Link>
        ))}
      </div>
    </div>
  );

  const renderTags = () => (
    <div className="border pt-5 px-4 flex flex-col items-center text-center">
      <h2 className="bg-white px-5 font-bold text-lg -mt-9">Article Tags</h2>
      <div className="flex items-center flex-wrap w-full text-left px-2 py-4 gap-2">
        {tag_list?.slice(0, 10)?.map((item, index) => (
          <Link
            key={index}
            title={item.tag}
            href={`/tags/${item.tag?.replaceAll(" ", "-").toLowerCase()}`}
            className="bg-gray-100 hover:bg-gray-200 transition-all cursor-pointer rounded py-1 text-sm px-2"
          >
            {item.tag}
            {item.article_ids?.length > 1 && (
              <span className="bg-black text-white px-1 ml-1 text-sm rounded-full">
                {item.article_ids.length}
              </span>
            )}
          </Link>
        ))}
      </div>
      <Link
        title="Click to see all tags"
        href="/tags"
        className="my-3 underline font-bold"
      >
        Click To See All Tags
      </Link>
    </div>
  );

  const renderLatestPosts = () => (
    <div className="border pt-5 px-4 flex flex-col items-center">
      <h2 className="bg-white px-5 font-bold text-lg -mt-9 text-center">
        Latest Posts
      </h2>
      <div className="flex flex-col my-3">
        {lastFiveBlogs.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-widget gap-3 py-3 border-b last:border-none"
          >
            <Link
              title={item.title || "Article"}
              href={`/${item.article_category.name
                ?.toLowerCase()
                ?.replaceAll(" ", "-")}/${item.title
                .replace(/ /g, "-")
                .toLowerCase()}`}
            >
              <div className="overflow-hidden relative min-h-20 w-full bg-black flex-1 rounded">
                <Image
                  title={item?.imageTitle || item?.title || "Article Thumbnail"}
                  alt={item?.tagline || item?.altText || "Article Thumbnail"}
                  src={
                    item.image ? `${imagePath}/${item.image}` : "/no-image.png"
                  }
                  fill
                  loading="lazy"
                  className="w-full h-full object-cover absolute top-0 hover:scale-125 transition-all"
                />
              </div>
            </Link>
            <div>
              <Link
                title={item.title || "Article Link"}
                href={`/${item.article_category.name
                  ?.toLowerCase()
                  ?.replaceAll(" ", "-")}/${item.title
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                <p className="font-semibold leading-tight hover:underline">
                  {item.title}
                </p>
              </Link>
              <div className="flex items-center gap-2 mt-1 justify-between text-gray-500">
                <p className="text-xs">{item.author}</p>
                <p className="text-xs whitespace-nowrap">{item.published_at}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-fit sticky top-0 flex flex-col gap-14">
      {widgets.map((item, index) => {
        if (!item.enable) return null;

        switch (item.name?.toLowerCase()) {
          case "about":
            return renderAbout();
          case "categories":
            return categories.length > 0 && renderCategories();
          case "article tags":
            return tag_list.length > 0 && renderTags();
          case "latest posts":
            return lastFiveBlogs.length > 0 && renderLatestPosts();
          default:
            return null;
        }
      })}
    </div>
  );
}
