import React from 'react'
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="px-3 py-5 bg-neutral-100 lg:py-10">
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                    <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
                    <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
                    <button className="text-lg md:text-2xl bg-black text-white py-2 px-6 mt-10 hover:bg-transparent border-[2px] hover:border-black hover:text-black transition-all duration-300">Shop Now</button>
                </div>
                <div className="order-1 lg:order-2">
                    <Image
                        className="object-cover"
                        src="/banner/watch.png"
                        alt="Summer Sale"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero