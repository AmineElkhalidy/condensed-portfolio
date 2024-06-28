"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import React from "react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "h-10 w-10 rounded-md z-50 inline-flex justify-center items-center fixed bottom-4 bg-sky-700/70 transition-all duration-300 hover:bg-sky-700",
        isVisible ? "right-4" : "right-[-100%]"
      )}
    >
      <FaArrowUp className="text-white" />
    </button>
  );
};

export default BackToTop;
