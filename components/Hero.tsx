import React from "react";

export default function Hero() {
  return (
    <section className="bg-hero bg-cover h-[800px] -mt-24">
      <div className="container">
        <div className="flex flex-col justify-center  h-full">
          <div className="w-1/3 space-y-6 leading-6">
            <p className="wider text-gray-500 uppercase">new product</p>
            <h1 className="text-white ">XX99 MARK II HEADPHONES</h1>
            <p className="text-gray-300 tracking-wide pb-5">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div>
              <a href="/appointments" className="btn">
                see product
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
