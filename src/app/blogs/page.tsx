import React from "react";
import Link from "next/link";
import Image from "next/image";

const dummy_data = [
  {
    id: 1,
    title: "Test",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic esse eos cumque ipsam praesentium dolorum eveniet, saepe tempora. Voluptatem voluptatibus quibusdam non nam temporibus labore. Non hic aliquid accusantium.",
    date_published: "Jan 4 2024",
    picture:
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Test 1",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic esse eos cumque ipsam praesentium dolorum eveniet, saepe tempora. Voluptatem voluptatibus quibusdam non nam temporibus labore. Non hic aliquid accusantium.",
    date_published: "Jan 4 2024",
    picture:
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Test 2",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic esse eos cumque ipsam praesentium dolorum eveniet, saepe tempora. Voluptatem voluptatibus quibusdam non nam temporibus labore. Non hic aliquid accusantium.",
    date_published: "Jan 4 2024",
    picture:
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Test 3",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic esse eos cumque ipsam praesentium dolorum eveniet, saepe tempora. Voluptatem voluptatibus quibusdam non nam temporibus labore. Non hic aliquid accusantium.",
    date_published: "Jan 4 2024",
    picture:
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Test 4",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic esse eos cumque ipsam praesentium dolorum eveniet, saepe tempora. Voluptatem voluptatibus quibusdam non nam temporibus labore. Non hic aliquid accusantium.",
    date_published: "Jan 4 2024",
    picture:
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

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
