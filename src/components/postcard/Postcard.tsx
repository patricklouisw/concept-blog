import React from "react";
import Image from "next/image";
import Link from "next/link";

// type Post = {
//   _id: string;
//   title: string;
//   content: string;
//   date_published: string;
//   img: string;
//   userId: string;
// };

const Postcard = ({ post }: any) => {
  return (
    <div className="flex flex-col gap-5 mb-5" key={post._id}>
      {/* Image Container */}
      <div className="flex">
        <div className="relative w-[90%] h-[400px]">
          <Image src={post.img} alt="post pic" fill className="object-cover" />
        </div>
        <span className="-rotate-90 text-xs m-auto w-[120px] h-[50px] italic tracking-widest">
          {new Date(post.createdAt).toString().slice(4, 16)}
        </span>
      </div>

      {/* Text Container */}
      <div className="flex flex-col gap-2">
        <h2 className="w-[90%] text-2xl mb-5 capitalize">{post.title}</h2>
        <p className="w-[90%] text-slate-500 text-base mb-5 line-clamp-2">
          {post.desc}
        </p>
        <Link href={`/blogs/${post.slug}`} className="underline uppercase">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
