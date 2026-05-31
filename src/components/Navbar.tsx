"use client"
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <div className=" w-full block lg:max-w-[85rem] md:max-w-[50rem]  mx-auto my-3 px-4 py-6 md:py-6">
            <div className="flex justify-between">
                {/* pages */}
                    <div className="hidden md:block">
                        <ul className="flex gap-5 font-bold text-xl text-white cursor-pointer items-center">
                            <li className="bg-[#BE4A4A] px-2 p-1 justify-center flex rounded-xl md:text-lg lg:text-lg">
                            <Link href="/collection">Collection</Link>
                            </li>
                            <li className="md:text-sm lg:text-lg">
                            <Link href="/">Visuals</Link>
                            </li>
                            <li className=" md:text-sm lg:text-lg">
                            <Link href="/">The Brandd</Link>
                            </li>
                        </ul>
                    </div>
                    {/* logo */}
                    <div>
                         <Image src="/logo.svg" alt="" width={20} height={20} className="xl:w-[12rem] lg:w-[25rem] mt-[-3rem]"/>
                    </div>
                    {/* mag */}
                    <div>
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
                    </div>
            </div>
            
        </div>
    );
}