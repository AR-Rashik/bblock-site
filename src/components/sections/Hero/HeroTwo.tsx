import React from "react";
import Image from "next/image";

export default function HeroTwo() {
  return (
    <div className="bg-gray-100 overflow-y-hidden py-12">
      {/* Code block starts */}
      <div>
        <div className="w-full px-6">
          <div className="container relative mx-auto mt-8 flex flex-col items-center rounded-lg bg-primary pb-24 pt-12 sm:pb-32 sm:pt-24 md:pb-48 lg:pb-56 xl:pb-64">
            <Image
              width={100}
              height={100}
              className="absolute right-0 top-0 mr-2 mt-2 lg:mr-12 lg:mt-12"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
              alt="bg"
            />
            <Image
              width={100}
              height={100}
              className="absolute bottom-0 left-0 mb-2 ml-2 lg:mb-12 lg:ml-12"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
              alt="bg"
            />
            <div className="mb-5 w-11/12 sm:mb-10 sm:w-2/3">
              <h1 className="text-center text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                The Freedom to Create the Pages You Want
              </h1>
            </div>
            <div className="mb-10 flex items-center justify-center sm:mb-20">
              <button className="hover:bg-transparent ring-offset-indigo-700 text-indigo-700 rounded border bg-white px-4 py-1 text-sm transition duration-150 ease-in-out hover:border-white	hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-8 sm:py-3 lg:text-xl">
                Get Started
              </button>
              <button className="hover:text-indigo-600 hover:border-indigo-600 bg-transparent ring-offset-indigo-700 hover:bg-indigo-700-800 ml-3 rounded border border-white px-4 py-1 text-sm text-white transition duration-150 ease-in-out hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:ml-6 sm:px-8 sm:py-3 lg:text-xl">
                Learn More
              </button>
            </div>
          </div>
          <div className="container mx-auto -mt-20 flex justify-center sm:-mt-40 md:-mt-56">
            <div className="relative w-11/12 sm:w-2/3">
              <Image
                width={1000}
                height={1000}
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/hero/h_2.png"
                alt="Sample Page"
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
}
