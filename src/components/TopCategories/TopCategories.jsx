import React, { useState } from "react";
import Heading from "../Heading";

const TopCategories = () => {
  const CategoriesData = [
    {
      class:
        "rounded-[4981px] flex flex-col items-center justify-start p-[16px] bg-cover bg-no-repeat bg-top icon3",
      class2: "relative w-10 h-10 overflow-hidden flex-shrink-0",
      img: "/vegetable.svg",
      name: "Vegetables",
    },
    {
      class:
        "rounded-[4981px] flex flex-col items-center justify-start p-[16px] bg-cover bg-no-repeat bg-top icon5",
      class2: "relative w-10 h-10 overflow-hidden flex-shrink-0",
      img: "/fruits-1.svg",
      name: "Fruits",
    },
    {
      class:
        "rounded-[4981px] flex flex-col items-center justify-start p-[16px] bg-cover bg-no-repeat bg-top icon6",
      class2: "relative w-10 h-10 overflow-hidden flex-shrink-0",
      img: "/softdrink-1.svg",
      name: "Water and Drinks",
    },
    {
      class:
        "rounded-[4981px] flex flex-col items-center justify-start p-[16px] bg-cover bg-no-repeat bg-top icon7",
      class2: "relative w-10 h-10 overflow-hidden flex-shrink-0",
      img: "/snacks-1.svg",
      name: "Dairy Products",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
     <div>
      <div className="block max-w-36 px-10 ml-20 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="grid gap-4 px-2">
          <div>
            <Heading title="Top Categories"/>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-10">
          {CategoriesData.map((service, index) => (
            <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
            <img className={service.class2} src={service.img} alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{service.name}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{service.headline}</span>
            
        </div>
           </div>
          ))}
        </div>
      </div>
      </div>
    
  );
};

export default TopCategories;

{
  /*
    <div className="mt-28">
      <div className="heading8 mb-4">
        <div className="normal text-2xl font-semibold font-poppins" style={{ color: '#1A1A1A' }}>
          Shop by Categories
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="feature8 bg-gray-100 shadow-inner flex items-start justify-start gap-20 text-center">
          {CategoriesData.map((service, index) => (
            <div
              className="feature9 flex flex-col items-center"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`${service.class} rounded-full ${hoveredIndex === index ? 'bg-gray-300' : 'bg-green-200'} p-2`}
              >
                <img
                  className={service.class2}
                  alt=""
                  src={service.img}
                  style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                />
              </div>
              <div className="info41">
                <div className="free-shipping text-gray-900 font-semibold">
                  {service.name}
                </div>
                <div className="free-shipping-with text-gray-400 text-sm">
                  {service.headline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          */
}
