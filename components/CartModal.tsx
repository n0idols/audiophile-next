"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/lib/Cart";
import formatMoney from "@/lib/formatMoney";

import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import Overlay from "./Overlay";

const container = `max-w-6xl flex justify-end mx-auto px-4 w-full`;
const themodal = `w-full md:w-1/2 lg:w-1/3`;
const drawerstyle = `h-auto flex flex-col mt-28`;
const drawerheader = ` bg-white flex justify-between items-center p-8 rounded-t-xl`;
const drawerbody = `bg-white h-full px-4 overflow-y-auto b`;
const drawerfooter = `bg-white px-8 rounded-b-xl`;
const checkoutbtnDesk = `hidden md:flex btn btn-primary  my-4 w-full py-2 justify-center justify-center text-center`;
const checkoutbtn = `md:hidden btn btn-primary my-4 py-2 px-20 flex justify-center `;

export default function CartModal({ show, onClose }: any) {
  const [isBrowser, setIsBrowser] = useState(false);
  const { cart, closeCart, totalCartPrice, emptyCart } = useCart();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onMenuChange = () => {
    closeCart();
    // router.push("/menu");
  };

  const slideIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const drawerContent = show ? (
    // <div onClick={() => onClose()} className={overlay}>
    <Overlay onClick={onClose}>
      <div className={container}>
        <motion.div
          variants={slideIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className={themodal}
        >
          <div className={drawerstyle}>
            <div className={drawerheader}>
              <h2 className="text-xl uppercase font-bold tracking-widest">
                Cart ({cart.length}){" "}
              </h2>

              <div>
                <button onClick={emptyCart} className="underline text-gray-500">
                  Remove all
                </button>
              </div>
            </div>
            <div className={drawerbody}>
              <div>
                {cart.length === 0 ? (
                  <div className="space-y-4">
                    <h2>Your cart is empty!</h2>

                    <button className="btn" onClick={onMenuChange}>
                      add items
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="h-full z-50">
                      {cart.map(
                        (cartItem: any, index: Key | null | undefined) => {
                          return (
                            <div key={index}>
                              <CartItem item={cartItem} />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={drawerfooter}>
              <div className="flex justify-between my-4">
                <h2 className="uppercase text-gray-500 ">total</h2>
                <h2 className="font-semibold">{formatMoney(totalCartPrice)}</h2>
              </div>
              <a href="/checkout" className="btn w-full block mb-8 text-center">
                checkout
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {drawerContent}
      </AnimatePresence>,
      //@ts-ignore
      document.getElementById("drawer-root")
    );
  } else {
    return null;
  }
}
