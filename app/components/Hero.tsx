import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="px-6 max-w-[1024px] h-screen flex flex-col ">
        <h1 className="self-stretch text-white text-3xl font-bold leading-8">
          The easiest way to manage driving school
        </h1>
        <div className="flex flex-row w-full justify-center items-center gap-32">
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="bg-violet-600 rounded-lg justify-center items-center flex">
              <div className="px-6 py-4 rounded-lg justify-center items-center gap-2 flex">
                <div className="text-center text-white text-base font-semibold  leading-normal">
                  Get Started
                </div>
              </div>
            </div>
            <div className="rounded-lg justify-center items-center flex">
              <div className="px-6 py-4 rounded-lg justify-center items-center gap-2 flex">
                <FaRegCirclePlay color="#7C3AED" />
                <div className="text-center text-violet-600 text-base font-semibold   leading-normal">
                  Watch Video
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="Mobile.svg" alt="mobile" width={320} height={640} />
      </div>
    </>
  );
}

export default Hero;
