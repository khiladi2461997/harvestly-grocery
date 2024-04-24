import React from 'react';


const Footer = () => {
  return ( 
    <footer className="bg-gray-900 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                  <img  src="/harvestlyfaviconcolor.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Harvestly</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Contact</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">help@harvestly.com</a>
                      </li>
                      <li>
                          <a class="hover:underline"> +91 9999999999</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Address </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a  class="hover:underline ">2609, Bandra West, Mumbai, Maharashtra, India</a>
                      </li>
                      <li>
                          <a  class="hover:underline">  License No. 10020064002537</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">Harvestly™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              
           
          </div>
      </div>
    </div>
</footer>

    
  



            );
};

export default Footer;
{/*
    <footer ClassName="bg-gray-900 text-gray-400 ">
              <div className=" top-[2111px] absolute  bg-zinc-900 w-[1920px] h-[399px] overflow-hidden text-gray-scale-white">
          <div className="absolute top-[calc(50%_-_116.5px)] left-[calc(50%_-_654px)] w-[1004px] h-[177px]">
            <div className="absolute top-[calc(50%_-_88.5px)] left-[calc(50%_+_116.3px)] w-[385.7px] flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[150%] font-medium">Address</div>
              <img
                className="relative w-[26px] h-0.5"
                alt=""
                src="/line-14.svg"
              />
              <div className="w-[356px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border gap-[12px] text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%] inline-block w-[349px] h-[55px] shrink-0">
                  2609, Gururaj Marg, Opposite State Bank of India, Bandra West,
                  Mumbai, Maharashtra 400050, India
                </div>
                <img
                  className="relative w-[65px] h-[18px] object-cover"
                  alt=""
                  src="/image-1@2x.png"
                />
                <div className="relative leading-[150%] inline-block w-[207px]">
                  License No. 10020064002537
                </div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_88.5px)] left-[calc(50%_-_127.24px)] w-[143.14px] flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[150%] font-medium">Email</div>
              <img
                className="relative w-[26px] h-0.5"
                alt=""
                src="/line-141.svg"
              />
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm text-gray-scale-gray-400">
                <div className="relative leading-[150%]">
                  help@harvestly.com
                </div>
              </div>
            </div>
            <div className="absolute h-[66.1%] w-[29.7%] top-[14.12%] right-[70.3%] bottom-[19.77%] left-[0%] flex flex-col items-start justify-start gap-[16px] text-13xl">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative w-8 h-8 overflow-hidden shrink-0" />
                <div className="relative tracking-[-0.03em] leading-[38px] font-medium">
                  Harvestly
                </div>
              </div>
              <div className="relative text-sm leading-[150%] text-gray-scale-gray-400 inline-block w-[300px]">
                Harvestly provides fresh, hygienic, high quality ingredients and
                supplies to its customers
              </div>
            </div>
          </div>
          <div className="absolute top-[86px] left-[1417px] leading-[150%] font-medium">
            Follow us
          </div>
          <div className="absolute top-[calc(50%_-_29.5px)] left-[calc(50%_+_448px)] flex flex-row items-start justify-start gap-[8px]">
            <img
              className="relative w-10 h-10"
              alt=""
              src="/social-media.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media1.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media2.svg"
            />
            <img
              className="relative rounded-481xl w-10 h-10"
              alt=""
              src="/social-media3.svg"
            />
          </div>
          <img
            className="absolute top-[125px] left-[1420px] w-[26px] h-0.5"
            alt=""
            src="/line-15.svg"
          />
          <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_283px)] flex flex-col items-start justify-start gap-[12px]">
            <div className="relative leading-[150%] font-medium">Phone</div>
            <img
              className="relative w-[26px] h-0.5"
              alt=""
              src="/line-15.svg"
            />
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm text-gray-scale-gray-400">
              <div className="relative leading-[150%]">+9199999-99999</div>
            </div>
          </div>
          <div className="absolute w-full top-[calc(50%_+_119.5px)] right-[0%] left-[0%] bg-gray-100 shadow-[0px_-1px_0px_#333] flex flex-row items-center justify-between py-6 px-[300px] box-border text-sm text-gray-scale-gray-500">
            <div className="relative leading-[150%]">
              Harvestly © 2023. All Rights Reserved
            </div>
            <div className="relative leading-[150%] text-gray-scale-gray-400">
              Privacy Policy
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-2xs text-gray-scale-white">
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/methodvisa.svg"
              />
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/methoddiscover.svg"
              />
              <img
                className="relative w-[45px] h-[31.76px]"
                alt=""
                src="/methodmastercard.svg"
              />
              <div className="relative w-[65px] h-8">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_32.5px)] rounded-[5.29px] bg-gray-100 box-border w-[65px] h-8 border-[1px] border-solid border-gray-scale-gray-800" />
                <img
                  className="absolute top-[4px] left-[5px] w-[11px] h-[11px] overflow-hidden"
                  alt=""
                  src="/lock-1.svg"
                />
                <div className="absolute top-[4px] left-[18px] leading-[100%]">
                  Secure
                </div>
                <div className="absolute top-[16px] left-[0px] text-xs leading-[100%] font-semibold text-center inline-block w-[65px]">
                  Payment
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[1917.67px] h-[373px] overflow-hidden object-cover"
            alt=""
            src="/bg@2x.png"
          />
          <img
            className="absolute top-[111px] left-[300px] w-[38px] h-[38px] overflow-hidden"
            alt=""
            src="/harvestlyfaviconcolor.svg"
          />
        </div>
        
        </footer> */}