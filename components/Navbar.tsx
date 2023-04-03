"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/Cart";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

import CartModal from "./CartModal";
import CategoryList from "./CategoryList";
import Cats from "./Cats";
import { Bars3Icon } from "@heroicons/react/20/solid";

export const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "headphones",
    href: "/headphones",
  },
  {
    title: "speakers",
    href: "/speakers",
  },
  {
    title: "earphones",
    href: "/earphones",
  },
];

export default function Navbar() {
  const { cart, show, toggleCart, closeCart } = useCart();

  const [isMob, setMob] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <CartModal show={show} onClose={closeCart} />

      <nav className={pathname === "/" ? `bg-transparent` : `bg-black `}>
        <div className="container py-6 text-white">
          <div className="flex justify-between">
            {" "}
            {/* mob button */}
            <button
              onClick={() => setMob(!isMob)}
              className="flex items-center lg:hidden"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            {/* LOGO */}
            <div>
              <a href="/" className="text-2xl font-extrabold  ">
                audiophile
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden items-center justify-center space-x-8 text-sm font-light lg:flex uppercase wide">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={pathname === link.href ? `text-primary` : ``}
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* secondary nav */}
            <div className="flex items-center space-x-4 text-sm font-light">
              <button onClick={toggleCart}>
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
              <div>{cart ? cart.length : null}</div>
            </div>
          </div>
        </div>
        {/* mob nav */}
        {isMob ? (
          <div className="absolute flex h-1/2 w-full flex-col justify-center space-y-4 bg-green-200 px-8 text-6xl  md:hidden">
            <Cats />
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
