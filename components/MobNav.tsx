"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn } from "@/lib/animations";
import ReactDOM from "react-dom";

import Overlay from "./Overlay";
import Cats from "./Cats";

export default function MobNav({ show, onClose }: any) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const navContent = show ? (
    <Overlay onClick={onClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="w-full md:h-1/3 h-full my-32 mx-4 "
      >
        <Cats />
      </motion.div>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {navContent}
      </AnimatePresence>,
      //@ts-ignore
      document.getElementById("mob-nav")
    );
  } else {
    return null;
  }
}
