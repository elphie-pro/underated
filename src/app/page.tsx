"use client"
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#252423] h-screen overflow-hidden">
      <div className=" w-full block lg:max-w-[85rem] md:max-w-[45rem] mx-auto my-3 px-4 py-6 md:py-6 pb-0">
        <div className="flex justify-between">
          {/* left side */}
              <div className="flex flex-col justify-between">
                {/* Navbar */}
                <div className="hidden md:block">
                  <ul className="flex gap-5 font-bold text-xl text-white cursor-pointer items-center">
                      <li className="w-30 h-9 bg-[#BE4A4A] p-1 justify-center flex rounded-xl">
                      <Link href="/">Collection</Link>
                    </li>
                    <li>
                      <Link href="/">Visuals</Link>
                    </li>
                    <li>
                      <Link href="/">The Brand</Link>
                    </li>
                  </ul>
                </div>
                {/* logo */}
                <div>
                  <Image src="/logo.svg" alt="" width={20} height={20} className="w-full"/>
                </div>
                {/* write up */}
                <div className="flex flex-col gap-14 mb-8">
                    <div className="text-xl">
                      <h2>Empowering and giving the spotlight to creatives <br />
                    who don’t always get the recognition they deserve</h2>
                    </div>
                    <div>
                      <h2>Underated exists for the artists, designers, photographers, <br />
                     filmmakers, digital creators and creatives in general <br />
                                           whose talents are real but overlooked.
                    </h2>
                    </div>
                    
                </div>
            </div>
            {/* middle */}
              <div>
                  <Image src="/Rectangle 16.svg" alt="" width={20} height={20} className="w-[40rem]"/>
              </div>
          {/* right side */}
              <div>
              <div className="hidden md:block">
                  <ul className="flex gap-2 font-extrabold text-xl text-white cursor-pointer items-center">
                      <li className="w-full h-9 bg-[#BE4A4A] px-2 justify-center align-center items-center flex rounded-xl">
                      <Link href="/">underated.mag</Link>
                    </li>
                    <button className="">
                      <Image src='/Group 34.svg' alt="" width={20} height={20} className="w-full"/>
                    </button>
                  </ul>
                </div>
              </div>
        </div>
        
          
      </div>
    </div>
  );
}