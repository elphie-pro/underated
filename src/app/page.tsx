"use client"
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#252423] h-screen overflow-hidden font-custom">
      <div className=" w-full block lg:max-w-[85rem] md:max-w-[50rem]  mx-auto my-3 px-4 py-6 md:py-6 h-screen">
        <div className="flex justify-between md:gap-5">
          {/* left side */}
              <div className="flex flex-col justify-between">
                {/* Navbar */}
                <div className="hidden md:block">
                  <ul className="flex gap-5 font-bold text-xl text-white cursor-pointer items-center">
                      <li className="px-2 p-1 justify-center flex rounded-xl md:text-sm lg:text-lg">
                      <Link href="/">Collection</Link>
                    </li>
                    <li className="md:text-sm lg:text-lg">
                      <Link href="/">Visuals</Link>
                    </li>
                    <li className=" md:text-sm lg:text-lg">
                      <Link href="/">The Brand</Link>
                    </li>
                  </ul>
                </div>
                {/* logo */}
                <div>
                  <Image src="/logo.svg" alt="" width={20} height={20} className="xl:w-full lg:w-[25rem] mt-[-5rem]"/>
                </div>
                {/* write up */}
                <div className="flex flex-col gap-14">
                    <div className="">
                      <div className="absolute xl:text-lg xl:mt-[-9rem] lg:text-sm lg:mt-[-5rem]">
                        <h2>Empowering and giving the spotlight to creatives <br />
                        <span className="ml-2">who don’t always get the recognition they deserve</span></h2>
                      </div>
                    </div>
                    <div className="text-right xl:text-lg lg:text-sm">
                      <div className="absolute xl:mt-[-7rem] lg:mt-[-4.5rem]">
                          <h2>Underated exists for the artists, designers, photographers, <br />
                           <span className="ml-[3rem]">filmmakers, digital creators and creatives in general</span>    <br />
                                                      <span className="ml-5">whose talents are real but overlooked.</span>         </h2>
                      </div>
                      
                    </div>
                    
                </div>
            </div>
            {/* middle */}
              <div>
                  <Image src="/Rectangle 16.svg" alt="" width={20} height={20} className="w-[40rem] translate-x-[rem]"/>
              </div>
          {/* right side */}
              <div className="flex flex-col gap-[17rem]">
              <div className="hidden md:block">
                  <ul className="flex gap-2 font-extrabold xl:text-xl lg:text-lg md:text-sm text-white cursor-pointer items-center">
                      <li className="p-1 h-9 bg-[#BE4A4A] px-2 justify-center align-center items-center flex rounded-xl">
                      <Link href="/">underated.mag</Link>
                    </li>
                    <button className="ml-[rem]">
                      <Image src='/Group 34.svg' alt="" width={20} height={20} className="xl:w-full md:w-[3rem]" />
                    </button>
                  </ul>
                </div>
                <div className="flex gap-10 justify-center items-center xl:mt-0 lg:mt-[-7rem] xl:ml-[-8rem] lg:ml-[-5rem]">
                    <div className="xl:w-[10rem] xl:h-[10rem] md:w-[5rem] md:h-[5rem] lg:w-[8.5rem] lg:h-[8.5rem] bg-[#A11A1A] rounded-2xl">

                    </div>
                    <div className="xl:w-[10rem] xl:h-[10rem] md:w-[5rem] md:h-[5rem] lg:w-[8.5rem] lg:h-[8.5rem] bg-[#000] border-5 border-white rounded-2xl">

                    </div>
                </div>
              </div>
        </div>
        
          
      </div>
    </div>
  );
}