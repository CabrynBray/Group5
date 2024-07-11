'use client';
import { motion } from "framer-motion";

import React from "react";
import { images } from "./constants"
// import left from "../public/carousel/left.svg";
// import right from "../public/carousel/right.svg";
import Link from "next/link";

import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};


const Reviews = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        Handcrafted Haven Reviews
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {" "}
              {elem.desc}
              
            </div>
          </motion.div>

          {/* <button className="">
            order now
          </button> */}
          <Link
            href="/products"
            className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10"
          >
            <span>Order Now</span>
          </Link>

          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src="/carousel/left.svg" 
              alt="left-button" 
              height="24"
              width="24"
              />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src="/carousel/right.svg" 
              alt="right-button"
              height="24"
              width="24"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;