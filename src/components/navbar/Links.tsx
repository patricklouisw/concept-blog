"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const listOfLinks = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
];

const auth = {
  loginRegister: {
    title: "Blog",
    path: "/blogs",
  },
  logout: {
    title: "Blog",
    path: "/blogs",
  },
};

const Links = () => {
  const pathname = usePathname();
  const [session, setSession] = useState(false);
  const [admin, setAdmin] = useState(false);

  return (
    <div className="flex gap-16">
      {listOfLinks.map((link) => (
        <Link
          key={`nav_` + link.title.toLowerCase()}
          className={`px-3 py-2 rounded-full

          ${
            pathname == link.path
              ? "bg-white text-black scale-105"
              : "hover:bg-white hover:text-black hover:scale-105"
          } `}
          href={link.path}
        >
          {link.title}
        </Link>
      ))}

      {/* Only show button if user is admin */}
      {session && admin && (
        <Link
          key={`nav_admin`}
          className={`px-3 py-2 rounded-full

          ${
            pathname == "/admin"
              ? "bg-white text-black scale-105"
              : "hover:bg-white hover:text-black hover:scale-105"
          } `}
          href="/admin"
        >
          Admin
        </Link>
      )}

      {session ? (
        <Link
          key={`nav_logout`}
          className={`px-3 py-2 bg-white text-black hover:bg-gray-200`}
          href={pathname}
          onClick={() => setSession(!session)}
        >
          Logout
        </Link>
      ) : (
        <Link
          key={`nav_login`}
          className={`px-3 py-2 bg-white text-black hover:bg-gray-200`}
          href={pathname}
          onClick={() => setSession(!session)}
        >
          Login / Register
        </Link>
      )}
    </div>
  );
};

export default Links;
