import React from 'react';
import { Jost, Delius } from "next/font/google";
import Image from 'next/image';

const jost = Jost({ subsets: ['latin'], weight: ['400', '500'] });
const delius = Delius({ subsets: ['latin'], weight: ['400'] });

const WeeklySection = () => {
    return (
        <div className="container mx-auto px-4 mb-20">
            <section className="px-3 py-5 lg:py-8">
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold md:text-6xl text-[#6346f3]">A face for every mood!</p>
                        <p className="text-4xl font-bold md:text-6xl">Style it as you like!</p>
                        <button className="inline-block font-medium mt-10 py-[14px] px-[40px] border-[2px] leading-[1] border-black text-[14px] uppercase tracking-[5px] hover:border-[2px] hover:bg-black hover:text-white transition-all duration-300">Shop Now</button>
                    </div>
                    <div className="order-1 lg:order-2 w-full h-auto">
                        <Image
                            className="object-cover"
                            src="/brand.jpg"
                            alt="Summer Sale"
                            width={1800}
                            height={1800}
                        />
                    </div>
                </div>
            </section>

            <h3 className={`${delius.className} text-[32px] sm:text-[42px] md:text-[52px] text-[#222222] font-bold text-center mt-[40px] sm:mt-[50px]  mb-6 sm:mb-8 md:mb-9`}>
                It's SMART' <span className='px-[3px] sm:px-[5px] text-white bg-[#222222] rounded-xl font-extrabold m-[1px] sm:m-[2px]'>O</span>CLOCK
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
                <div className="relative bg-gray-100 overflow-hidden">
                    <div className="overflow-hidden">
                        <Image
                            src="/weekly1.jpg"
                            alt="Leather Watch Banner"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover hover:scale-[1.04] transition-all duration-[.8s] ease-linear"
                        />
                    </div>
                    <div className={`${jost.className} absolute left-[20px] sm:left-[40px] md:left-[50px] bottom-[40px] sm:bottom-[60px] md:bottom-[80px]`}>
                        <p className="text-[14px] sm:text-[18px] md:text-[20px] text-[#222222] uppercase mb-2 sm:mb-3">Weekly Offer</p>
                        <h3 className="text-[24px] sm:text-[30px] md:text-[35px] text-[#222222] font-medium mb-[15px] sm:mb-[20px] md:mb-[25px]">Leather Watch</h3>
                        <a
                            href="#"
                            className="inline-block font-medium py-[10px] sm:py-[12px] md:py-[14px] px-[20px] sm:px-[30px] md:px-[40px] border-[2px] leading-[1] border-black text-[12px] sm:text-[14px] uppercase tracking-[2px] sm:tracking-[3px] hover:border-[2px] hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>

                <div className="relative bg-gray-100 overflow-hidden">
                    <div className="overflow-hidden">
                        <Image
                            src="/weekly2.jpg"
                            alt="Metal Watch Banner"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover hover:scale-[1.04] transition-all duration-[.8s] ease-linear"
                        />
                    </div>
                    <div className={`${jost.className} absolute left-[20px] sm:left-[40px] md:left-[50px] bottom-[40px] sm:bottom-[60px] md:bottom-[80px]`}>
                        <p className="text-[14px] sm:text-[18px] md:text-[20px] text-[#222222] uppercase mb-2 sm:mb-3">Weekly Offer</p>
                        <h3 className="text-[24px] sm:text-[30px] md:text-[35px] text-[#222222] font-medium mb-[15px] sm:mb-[20px] md:mb-[25px]">Metal Watch</h3>
                        <a
                            href="#"
                            className="inline-block font-medium py-[10px] sm:py-[12px] md:py-[14px] px-[20px] sm:px-[30px] md:px-[40px] border-[2px] leading-[1] border-black text-[12px] sm:text-[14px] uppercase tracking-[2px] sm:tracking-[3px] hover:border-[2px] hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default WeeklySection