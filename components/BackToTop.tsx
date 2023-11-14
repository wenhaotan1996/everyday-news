"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const triggerHeight = 500;

export default function BackToTop({}: Props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [onScroll]);
  function onScroll() {
    setShow((window.scrollY ?? 0) >= triggerHeight);
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="fixed bottom-4 self-center rounded-lg bg-orange-400/90 px-4 py-2 font-bold capitalize text-white"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          back to top
        </motion.button>
      )}
    </AnimatePresence>
  );
}
