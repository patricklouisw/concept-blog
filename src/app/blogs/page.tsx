import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dummy_data } from "./dummy_data";

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {dummy_data.map((blog) => (
        <div className="flex flex-col gap-5 mb-5" key={blog.id}>
          {/* Image Container */}
          <div className="flex">
            <div className="relative w-[90%] h-[400px]">
              <Image
                src={blog.picture}
                alt="blog pic"
                fill
                className="object-cover"
              />
            </div>
            <span className="-rotate-90 text-xs m-auto w-[100px] h-[50px] italic tracking-widest">
              {blog.date_published}
            </span>
          </div>

          {/* Text Container */}
          <div className="flex flex-col gap-2">
            <h2 className="w-[90%] text-2xl mb-5 capitalize">{blog.title}</h2>
            <p className="w-[90%] text-slate-500 text-base mb-5 line-clamp-2">
              {blog.content}
            </p>
            <Link href={`/blogs/${blog.id}`} className="underline uppercase">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
