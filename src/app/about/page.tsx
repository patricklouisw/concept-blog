import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-24 text-center lg:flex-row lg:text-start">
      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-12">
        <h4 className="text-blue-500 font-bold text-xl">About Agency</h4>
        <h2 className="lg:text-6xl font-bold text-4xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p className="text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          molestias autem blanditiis reprehenderit molestiae minus iure aut
          labore, officia sint quae maiores maxime? Tenetur aspernatur modi
          laboriosam iste asperiores quod.
        </p>
        <div className="flex">
          <div className="flex-1">
            <h3 className="lg:text-3xl text-blue-500 font-bold text-2xl">
              10 K+
            </h3>
            <p>Year of experience</p>
          </div>
          <div className="flex-1">
            <h3 className="lg:text-3xl text-blue-500 font-bold text-2xl">
              234 K+
            </h3>
            <p>People Reached</p>
          </div>
          <div className="flex-1">
            <h3 className="lg:text-3xl text-blue-500 font-bold text-2xl">
              5 K+
            </h3>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative min-h-72">
        <Image src={"/about.png"} alt="about" fill className="object-contain" />
      </div>
    </div>
  );
};

export default About;
