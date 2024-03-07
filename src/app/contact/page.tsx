import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl lg:text-6xl text-center">Contact Us</h1>
      <div className="flex flex-col-reverse text-center gap-10 lg:gap-24 lg:flex-row lg:text-start">
        {/* Image Container */}
        <div className="flex-1 relative min-h-[500px] ">
          <Image
            src="/contact.png"
            alt="contact"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 flex flex-col">
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name and Surname"
              required
              className="rounded p-2 text-sm lg:p-4 lg:text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="rounded p-2 text-sm lg:p-4 lg:text-base"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone Number (Optional)"
              className="rounded p-2 text-sm lg:p-4 lg:text-base"
            />
            <textarea
              name="message"
              id=""
              cols={20}
              rows={7}
              placeholder="Message"
              className="rounded p-2 text-sm lg:p-4 lg:text-base"
            />
            <button
              type="submit"
              className="bg-blue-500 rounded p-2 text-sm lg:p-4 lg:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
