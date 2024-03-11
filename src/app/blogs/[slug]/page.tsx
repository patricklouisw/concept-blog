import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";

// type BlogData = {
//   id: string;
//   title: string;
//   content: string;
//   date_published: string;
//   picture: string;
//   author: string;
// };

const fetchData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const blog_data = await fetchData(slug);

  return (
    <div className="flex flex-row gap-12 mt-10">
      {blog_data.img && (
        <div className="relative w-1/3 h-screen">
          <Image
            src={blog_data.img}
            alt="blog pic"
            fill
            className="object-contain object-top"
          />
        </div>
      )}

      <div className="flex flex-col gap-10">
        <div>
          <Link href="/blogs" className="p-2 rounded bg-gray-500">
            Back
          </Link>
        </div>

        <h1 className="text-7xl font-bold tracking-wide">{blog_data.title}</h1>
        <div className="flex flex-row gap-10">
          <Suspense
            fallback={
              <p className="p-2 bg-slate-100/10 rounded text-center animate-bounce">
                Loading user...
              </p>
            }
          >
            <PostUser userId={blog_data.userId} />
          </Suspense>

          <div className="flex flex-col justify-between">
            <span className="text-gray-400 font-bold">Published</span>
            <p>{new Date(blog_data.createdAt).toString().slice(4, 16)}</p>
          </div>
        </div>
        <p>{blog_data.desc}</p>
      </div>
    </div>
  );
};

export default Blog;
