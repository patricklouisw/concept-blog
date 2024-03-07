import Link from "next/link";
import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24">
      <div className="text-3xl font-bold tracking-wider">Macaw</div>
      <Links />
    </div>
  );
};

export default Navbar;
