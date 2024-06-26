"use client";

import React from "react";

import {
  ANIMATEDTEXT1,
  ANIMATEDTEXT2,
  ANIMATEDTEXT3,
  ANIMATEDTEXT4,
  ANIMATEDTEXT5,
  ANIMATEDTEXT6,
  ANIMATEDTEXT7,
  ANIMATEDTEXT8,
  GALLERY,
  MARQUEEMOTION,
  STATS,
  TIMER,
  TITLEIMAGE,
  TYPINGTEXT,
  VIDEOBLOCK,
} from "@/clientComponents/motionDiv";

import MAJOREVENTS from "@/clientComponents/majorCard";
import CELEBRITYCARD from "@/clientComponents/celebrityCard";
import TRANSITION_WRAPPER from "@/clientComponents/transition";
import PRIORSPONSORS from "@/clientComponents/priorSponsor";
import TITLETEXTANIMATION from "@/clientComponents/titleTextAnimation";
import TRIGGER from "@/clientComponents/trigger";
import TRIGGERTWO from "@/clientComponents/triggerTwo";
import TAG_PARA from "@/clientComponents/tagParagraph";

const HOME_OBJECT = () => {
  return (
    <>
      <div className="w-full flex relative justify-center">
        <div className="mt-[50px]">
          <TITLETEXTANIMATION />
          <div className=" p-[5px] h-[40px] mt-[30px] scrollDown-animation rounded-full border-[1px] border-gray-500">
            <div className="w-[8px]  aspect-square bg-black rounded-full" />
          </div>
        </div>
      </div>
      <MARQUEEMOTION />
      <div className="mt-[50px]">
        <div>
          <VIDEOBLOCK />
        </div>
      </div>
      <div className="mt-[50px]">
        <TYPINGTEXT title="Flashback" />
        <div className="block max-[450px]:hidden">
          <ANIMATEDTEXT3 />
        </div>
        <div className="hidden max-[450px]:block">
          <ANIMATEDTEXT6 />
        </div>
        <div className="hidden max-[450px]:block">
          <ANIMATEDTEXT7 />
        </div>
      </div>
      <div>
        <STATS />
      </div>
      <div className="mt-[50px]">
        <TRIGGER />
      </div>
      <div className="m-[20px] mt-[50px]">
        <ANIMATEDTEXT8 />
        <PRIORSPONSORS />
      </div>
      <div className="px-[20px]">
        <ANIMATEDTEXT5 />
        <MAJOREVENTS />
      </div>
      <div className="mt-[80px]">
        <TRIGGERTWO />
      </div>
    </>
  );
};

const HOME = () => {
  return TRANSITION_WRAPPER(HOME_OBJECT);
};

export default HOME;
