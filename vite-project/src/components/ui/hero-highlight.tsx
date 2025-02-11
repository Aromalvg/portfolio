"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
  
    // Debugging
    console.log("Mouse X:", clientX - left, "Mouse Y:", clientY - top);
  
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  
  return (
    <div
      className={cn(
        "relative h-screen w-screen flex items-center justify-center group",
        containerClassName
      )}
      style={{
        background: "linear-gradient(90deg, rgba(0,0,0,1) 2%, rgba(61,27,96,1) 50%, rgba(0,0,0,1) 100%)"
      }}
        
      onMouseMove={handleMouseMove}
    >
      {/* Fullscreen Dot Background */}
      <div className="absolute inset-0 bg-dot-thick-gray-800 dark:bg-dot-thick-gray-800 pointer-events-none" />
      
      {/* Hover Effect (Change to white or lighter gray) */}
      <motion.div
        className="pointer-events-none bg-dot-thick-white dark:bg-dot-thick-gray-200 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 1%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
