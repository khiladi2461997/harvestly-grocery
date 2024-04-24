import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import Arrow from "../assets/move-right.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center ">

<div className="w-full flex items-center max-w-fit bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   

    <a href="#">
        <img className="left-0 p-8 rounded-t-lg"  src="/image30@2x.png" alt="product image" />
    </a>
    <div className="px-5 pb-5">
    
        <a href="#">
        <p
                    className="fresh-healthy-container text-72 font-bold text-gray-100 text-left inline-block w-full"
                    style={{
                      color: "#00B207",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      lineHeight: "14px",
                      letterSpacing: "0.28em",
                      wordWrap: "break-word",
                    }}
                  >
                    Welcome to Harvestly
                  </p>
            
            <div
                    className="fresh-healthy-container text-72 font-bold text-gray-100 text-left inline-block w-full"
                    style={{
                      color: "#1A1A1A",
                      fontSize: "72px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: "86.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    Fresh & Healthy
                    <br />
                    Organic Food
                  </div>
        </a>
     
            
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div style={{ marginBottom: "40px" }}>
                  <span
                    style={{
                      color: "#1A1A1A",
                      fontSize: "32px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "38.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    Sale up to{" "}
                  </span>
                  <span
                    style={{
                      color: "#FF8A00",
                      fontSize: "32px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: "38.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    30% OFF
                  </span>
                </div> 
                
                
                
            </div>
           
            
           
        </div>
        <div
                  className="free-shipping-on absolute top-50 text-14 font-Poppins text-gray-scale-gray-500"
                  style={{
                    color: "#808080",
                    fontSize: 20,
                    fontFamily: "Poppins",
                  }}
                >
                  Free shipping on all your order. we deliver, you enjoy
                </div>
        <div className="flex items-center justify-between">
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
    </div>
</div>
</div>
    
  );
};

export default Hero;
{/*
    <nav>
      <div className="header1 absolute top-20 left-0  h-120 font-body-tiny-body-tiny-400 text-gren-gray-scale-700 bg- w-[1000px]">
        <div className="bg absolute top-120 left-0 w-screen h-640">
          <div className="bg1 top-0 left-0 bg-gren-gray-scale-50 w-screen h-640" />
          <img
            className="top-icon absolute top-563 left-1646 w-113.09 h-132.12 object-cover"
            alt=""
            src="/top@2x.png"
          />

          <div className="tracker absolute top-604 left-989 justify-start gap-gap-5xs">
            <div className="tracker-child relative rounded-full bg-gren-gray-scale-200 w-12 h-12" />
            <div className="tracker-item relative rounded-full bg-branding-success w-12 h-12" />
            <div className="tracker-child relative rounded-full bg-gren-gray-scale-200 w-12 h-12" />
          </div>
          <div className="flex justify-center items-center h-screen w-3/4 mx-auto">
            <div className="mr-32" style={{ transform: "translateX(-200px)" }}>
              <img
                className="w-[742px] h-[498px]"
                alt=""
                src="/image30@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="w-3/4" style={{ transform: "translateX(200px)" }}>
            <div
              className="info45 relative mx-auto w-596 h-376"
              style={{ left: "50%", transform: "translateX(25%)" }}
            >
              <div className="heading9 absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-194 text-center">
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "-200px",
                  }}
                >
                  <p
                    className="fresh-healthy-container text-72 font-bold text-gray-100 text-left inline-block w-full"
                    style={{
                      color: "#00B207",
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      lineHeight: "14px",
                      letterSpacing: "0.28em",
                      wordWrap: "break-word",
                    }}
                  >
                    Welcome to Harvestly
                  </p>
                  <div
                    className="fresh-healthy-container text-72 font-bold text-gray-100 text-left inline-block w-full"
                    style={{
                      color: "#1A1A1A",
                      fontSize: "72px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: "86.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    Fresh & Healthy
                    <br />
                    Organic Food
                  </div>
                </div>
              </div>
              <div className="description2 absolute top-222 left-0 w-363 h-71 text-heading-05-heading-05-600">
                <div style={{ marginBottom: "40px" }}>
                  <span
                    style={{
                      color: "#1A1A1A",
                      fontSize: "32px",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      lineHeight: "38.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    Sale up to{" "}
                  </span>
                  <span
                    style={{
                      color: "#FF8A00",
                      fontSize: "32px",
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      lineHeight: "38.40px",
                      wordWrap: "break-word",
                    }}
                  >
                    30% OFF
                  </span>
                </div>

                <div
                  className="free-shipping-on absolute top-50 text-14 font-Poppins text-gray-scale-gray-500"
                  style={{
                    color: "#808080",
                    fontSize: 20,
                    fontFamily: "Poppins",
                  }}
                >
                  Free shipping on all your order. we deliver, you enjoy
                </div>
                <br />
                <Link to="/shop">
                  <button className="w-[191px] h-[51px] relative bg-green-600 rounded-[53px] mt-16">
                    <div className="left-[40px] top-[16px] absolute text-white text-base font-semibold font-Poppins leading-tight">
                      Shop now
                    </div>
                    <div className="w-[15px] h-3 left-[136px] top-[19.48px] absolute"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
                </nav> */}