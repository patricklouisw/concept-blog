import Link from "next/link";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col text-center lg:flex-row lg:text-start gap-24">
      {/* Text */}
      <div className="flex flex-col gap-12 flex-1">
        <h1 className="lg:text-8xl text-6xl">Creative Thoughts Agency.</h1>

        <p className="text-md lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          blanditiis. Numquam a voluptas iure consequatur eum reiciendis ipsam
          error doloribus in voluptatibus. Doloremque eum adipisci dolores ex?
          Cumque, officiis esse?
        </p>

        <div className="flex gap-5 justify-center lg:justify-start">
          <Link
            href={"/"}
            className="p-5 min-w-32 cursor-pointer border-none rounded bg-[#3673fd] text-white"
          >
            Learn More
          </Link>
          <Link
            href={"/"}
            className="p-5 min-w-32 cursor-pointer border-none rounded bg-white text-black text-center"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/brands.png"
            alt="brands pic"
            width={500}
            height={50}
            className="grayscale"
          />
        </div>
      </div>

      {/* Image */}
      <div className="flex flex-1 relative min-h-72">
        <Image src="/hero.gif" alt="Home pic" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Home;
