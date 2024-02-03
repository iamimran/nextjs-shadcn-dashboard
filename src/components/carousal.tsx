"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const logos = [
  {
    url: "/images/logo/logo1.svg",
    alt: "logo1",
  },
  {
    url: "/images/logo/logo2.svg",
    alt: "logo2",
  },
  {
    url: "/images/logo/logo3.svg",
    alt: "logo3",
  },
  {
    url: "/images/logo/logo4.svg",
    alt: "logo4",
  },
  {
    url: "/images/logo/logo5.svg",
    alt: "logo5",
  },
  {
    url: "/images/logo/logo6.svg",
    alt: "logo6",
  },
  {
    url: "/images/logo/logo7.svg",
    alt: "logo7",
  },
  {
    url: "/images/logo/logo8.svg",
    alt: "logo8",
  },
  {
    url: "/images/logo/logo9.svg",
    alt: "logo9",
  },
  {
    url: "/images/logo/logo10.svg",
    alt: "logo10",
  },
  {
    url: "/images/logo/logo11.svg",
    alt: "logo11",
  },
  {
    url: "/images/logo/logo12.svg",
    alt: "logo12",
  },
  {
    url: "/images/logo/logo13.svg",
    alt: "logo13",
  },
  {
    url: "/images/logo/logo14.svg",
    alt: "logo14",
  },
  {
    url: "/images/logo/logo15.svg",
    alt: "logo15",
  },
];

const Carousal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentImageIndex((prev) =>
      //   prev === logos.length - 1 ? 0 : prev + 1
      // );
      setCurrentImageIndex((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="items-center justify-center flex text-3xl font-boldmd:pb-10 px-10 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
        More than 100+ brands have built their business with Bird Software
      </div>
      <div className="grid grid-cols-3 p-4 md:flex">
        <AnimatePresence custom={currentImageIndex}>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.3,
                scale: index === currentImageIndex ? 1.3 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center h-30 w-30"
              exit={{ opacity: 0 }}
              custom={currentImageIndex}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={100}
                height={100}
                layout="responsive"
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousal;
