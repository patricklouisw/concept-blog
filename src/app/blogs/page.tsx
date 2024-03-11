import React, { cache } from "react";
import { dummy_data } from "./dummy_data";
import Postcard from "@/components/postcard/Postcard";

// type Post = {
//   id: string;
//   title: string;
//   content: string;
//   date_published: string;
//   picture: string;
//   author: string;
// };

const getData = async () => {
  // Refresh Data every 1 hour
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Blogs = async () => {
  // FETCH DATA WITH AN API
  let posts = await getData();

  // if (posts.length == 0) {
  //   posts = dummy_data;
  // }

  return (
    <div className="grid grid-cols-3 gap-5">
      {posts.map((post: any) => (
        <Postcard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Blogs;
