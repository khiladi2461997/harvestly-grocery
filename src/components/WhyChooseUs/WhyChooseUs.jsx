import React from "react";
import Wcheck from "../assets/Wcheck.svg";
import { Link } from "react-router-dom";
import Arrow from "../assets/move-right.svg";

const WhyChooseUs = () => {
  return (
    <div className="block max-w-full mb-28 px-10 md:px-20 xl:px-50 mt-20 ml-20 md:ml-28 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="grid grid-cols-2 gap-2">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image24@2x.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image23@2x.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col justify-between p-6 md:p-8 lg:p-10 leading-normal">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Healthy & natural food for lovers of healthy food.
        </h5>
        <p class="mb-4 font-normal text-lg text-gray-700 dark:text-gray-400">
          Imagine a world where healthy eating is not only convenient but also
          enticing. Our health food ecommerce platform aims to make this
          vision a reality.
        </p>
        <Link to="/shop">
        <button className="w-[191px] h-[51px] relative bg-green-600 rounded-[53px] mt-16">
          <div className="left-[40px] top-[16px] absolute text-white text-base font-semibold font-Poppins leading-tight">
                      Shop now
                    </div>
            <div className=" w-[15px] h-8 left-[136px] top-[19.48px] absolute">
                    <img className="text-gray-100" src={Arrow} alt="Icon" />
                    </div>
          </button>
        </Link>
      </div>
    </a>
  </div>
  
  );
};

export default WhyChooseUs;

{
  /*
    <div className="w-[1920px] h-[617px] relative">
      <div className="left-[1084px] top-[96px] absolute flex-col justify-start items-start gap-[26px] inline-flex">
        <div className="text-zinc-900 text-[40px] font-semibold font-['Poppins'] leading-[48px]">
          100% Trusted
          <br />
          Organic Food Store
        </div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-[100px]" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="w-[500px] text-zinc-900 text-lg font-medium font-['Poppins'] leading-[27px]">
              Healthy & natural food for lovers of healthy food.
            </div>
          </div>
          <div className="pl-[34px] justify-start items-start inline-flex">
            <div className="w-[500px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
              Ut quis tempus erat. Phasellus euismod bibendum magna non
              tristique. Pellentesque semper vestibulum elit sed condimentum.
              Nunc pretium fermentum interdum.{" "}
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-[100px]" />
              <div className="w-4 h-4 left-[4px] top-[4px] absolute" />
            </div>
            <div className="w-[504px] text-zinc-900 text-lg font-medium font-['Poppins'] leading-[27px]">
              Every day fresh and quality products for you.
            </div>
          </div>
          <div className="pl-8 justify-start items-start inline-flex">
            <div className="w-[504px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
              Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
              posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
              felis. Sed vestibulum nisl sit amet sapien.
            </div>
          </div>
        </div>
        
          {" "}
          <Link to="/shop">
          <button className="px-10 py-4 bg-green-600 rounded-[43px] justify-center items-center gap-4 inline-flex">
            <div className="text-white text-base font-semibold font-['Poppins'] leading-tight">
              Shop Now
            </div>
            <div className="w-[15px] h-3 relative"></div>
          </button>
          </Link>

        
      </div>
      <div className="w-[2189px] h-[558px] left-[-304px] top-[24px] absolute">
        <div className="origin-top-left -rotate-180 w-[570.73px] h-[297px] left-[570.73px] top-0 absolute"></div>
      </div>
      <div className="w-[809px] h-[513px] left-[235px] top-[24px] absolute">
        <img
          className="w-[31.19px] h-[104.69px] left-[316.18px] top-[80.20px] absolute origin-top-left rotate-[140deg] blur-sm"
          src="/image22@2x.png"
        />
        <img
          className="w-[444px] h-[457px] left-[345px] top-[56px] absolute rounded-lg"
          src="/image23@2x.png"
        />
        <img
          className="w-[276px] h-[400px] left-[45px] top-[56px] absolute rounded-lg"
          src="/image24@2x.png"
        />
        <img
          className="w-[60px] h-[88px] left-[42.23px] top-[384px] absolute origin-top-left rotate-45"
          src="/image25@2x.png"
        />
      </div>
    </div>
  */
}
