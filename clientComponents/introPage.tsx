"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cursorTwo, naac_logo, skit_logo, swamiji_logo } from "@/public";
import { TITLEIMAGE } from "./motionDiv";
import INTROPAGE_CARD from "./introPageCard";

const INTROPAGE = () => {
  const [pageDisplay, setPageDisplay] = useState(false);
  const [buttonArrow, setButtonArrow] = useState(false);

  const squareNumber: number[] = [];
  for (let i = 0; i < 1000; i++) {
    squareNumber.push(i);
  }
  return (
    <>
      <div
        className="w-full min-h-screen fixed  flex justify-center items-center z-50 top-0 left-0 bg-white duration-500 "
        style={pageDisplay ? { top: "-130%" } : { top: "0px" }}
      >
        <div className="text-center my-[20px]">
          <div className="flex justify-center">
            <div className=" w-full ">
              <div className=" flex justify-center items-center ">
                <div>
                  <Link href="https://skit.ac.in" target="blank">
                    <Image
                      src={naac_logo}
                      alt="skitlogo"
                      className="w-[70px] sm:w-[80px]"
                    />
                  </Link>
                </div>
                <div className="w-[1px] h-[20px] mx-[10px] bg-black" />
                <div>
                  <Link href="https://skit.ac.in" target="blank">
                    <Image
                      src={skit_logo}
                      alt="skitlogo"
                      className="w-[70px] sm:w-[80px]"
                    />
                  </Link>
                </div>
                <div className="w-[1px] h-[20px] mx-[10px] bg-black" />
                <div>
                  <Link href="https://skit.ac.in" target="blank">
                    <Image
                      src={swamiji_logo}
                      alt="skitlogo"
                      className="w-[55px] sm:w-[65px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="leading-tight  mx-[20px]">
                <span className="font-semibold text-[14px]   sm:text-[16px]">
                  Swami Keshvanand Institute of Technology,
                  <br className="hidden sm:block" />
                  Management and Gramothan, Jaipur
                </span>
              </div>
            </div>
          </div>
          <div className="text-[13px] sm:text-[14px] my-[20px]">
            <span>welcomes you to</span>
          </div>
          <div className="flex justify-center items-center  w-full my-[50px] px-[20px] ">
            {/* <TITLEIMAGE /> */}
            {/* <Image src */}
            <Image
              src="https://res.cloudinary.com/denl2iizs/image/upload/v1700624760/pravah2k24/text/ssthzscie5vb7oscyznw.png"
              alt="hello"
              className="w-[300px]  md:w-[450px]"
              width={500}
              height={500}
              // style={{ display: index === currentIndex ? "block" : "none" }}
            />
            {/* <INTROPAGE_CARD /> */}
          </div>
          <div className="flex justify-center mt-[30px]">
            <button
              className="pr-[14px] py-[12px] pl-[24px] text-[13px] sm:text-[14px] rounded-full duration-200 shadow-[#787878] font-semibold bg-black
               text-white"
              onClick={() => {
                setPageDisplay(!pageDisplay);
              }}
              onMouseEnter={() => setButtonArrow(!buttonArrow)}
              onMouseLeave={() => setButtonArrow(!buttonArrow)}
            >
              <div className="flex justify-center items-center gap-2">
                <div>
                  <span>Explore</span>
                </div>
                <div className="w-[20px] lg:w-0 block lg:hidden rounded-full overflow-hidden duration-300">
                  <Image src={cursorTwo} alt="cursorTwo" />
                </div>
                <div
                  className={`hidden lg:block rounded-full overflow-hidden duration-300 ${
                    buttonArrow ? "w-[20px] " : "w-0 "
                  } `}
                >
                  <Image src={cursorTwo} alt="cursorTwo" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default INTROPAGE;
