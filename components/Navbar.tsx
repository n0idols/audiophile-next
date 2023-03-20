"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "headphones",
    href: "/categories/headphones",
  },
  {
    title: "speakers",
    href: "/categories/speakers",
  },
  {
    title: "earphones",
    href: "/categories/earphones",
  },
];

export default function Navbar() {
  const [isMob, setMob] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={pathname === "/" ? `bg-transparent` : `bg-black`}>
      <div className="container py-4">
        <div className="flex justify-between">
          {/* LOGO */}
          <div>
            <a href="/" className="text-2xl font-extrabold  ">
              audiophile
            </a>
          </div>
          {/* Primary Nav */}
          <div className="hidden items-center justify-center space-x-6 text-sm font-light md:flex uppercase">
            {navLinks.map((link) => (
              <a href={link.href}>{link.title}</a>
            ))}
          </div>

          {/* secondary nav */}
          <div className=" hidden items-center space-x-4 text-sm font-light md:flex">
            <a href="/account">cart</a>
          </div>

          {/* mob button */}
          <button
            onClick={() => setMob(!isMob)}
            className="flex items-center md:hidden"
          >
            menu
          </button>
        </div>
      </div>
      {/* mob nav */}
      {isMob ? (
        <div className="absolute flex h-1/2 w-full flex-col justify-center space-y-4 bg-green-200 px-8 text-6xl  md:hidden">
          <a className="mob" href="/services">
            Services
          </a>
          <a className="mob" href="/appointments">
            Appointments
          </a>
          <a className="mob" href="/about">
            How it Works
          </a>
          <a className="mob" href="/account">
            Account
          </a>
        </div>
      ) : (
        <></>
      )}
    </nav>
    // <nav className="navbar">
    //   <a href="/">
    //     <h1 className="text-6xl font-bold">Autofy</h1>
    //   </a>
    //   <div className="flex w-1/2 items-center justify-end space-x-8 bg-slate-200">

    //   </div>
    // </nav>
  );
}
