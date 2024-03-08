"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dummy_data } from "../dummy_data";
import { usePathname } from "next/navigation";

type BlogData = {
  id: number;
  title: string;
  content: string;
  date_published: string;
  picture: string;
  author: string;
};

const Blog = () => {
  const path_list = usePathname().split("/");
  const id = parseInt(path_list[path_list.length - 1]);

  const blog_data: BlogData = dummy_data.filter((blog) => blog.id == id)[0];
  console.log(blog_data);

  return (
    <div className="flex flex-row gap-12 mt-10">
      {/* Image Container */}
      <div className="relative w-1/3 h-screen">
        <Image
          src={blog_data.picture}
          alt="blog pic"
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Text Container */}
      <div className="w-2/3 flex flex-col gap-10">
        <div>
          <Link href="/blogs" className="p-2 rounded bg-gray-500">
            Back
          </Link>
        </div>

        <h1 className="text-7xl font-bold tracking-wide">{blog_data.title}</h1>
        <div className="flex flex-row gap-10">
          <Image
            src={"/noavatar.png"}
            alt="profile pic"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col justify-between">
            <span className="text-gray-400 font-bold">Author</span>
            <p>{blog_data.author}</p>
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-gray-400 font-bold">Published</span>
            <p>{blog_data.date_published}</p>
          </div>
        </div>
        <p>{blog_data.content}</p>
      </div>
    </div>
  );
};

export default Blog;
