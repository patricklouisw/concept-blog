import React from "react";
import Image from "next/image";

const fetchData = async (userId: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("trouble fetching user data");
  }
};

const PostUser = async ({ userId }: any) => {
  const user = await fetchData(userId);

  return (
    <>
      <div className="relative w-[60px] h-[60px]">
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          alt="profile pic"
          fill
          className="object-cover rounded-full "
        />
      </div>

      <div className="flex flex-col justify-between">
        <span className="text-gray-400 font-bold">Author</span>
        <p>{user.username}</p>
      </div>
    </>
  );
};

export default PostUser;
