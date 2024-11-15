'use client';
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai';
import { GrCart } from "react-icons/gr";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { Jura } from "next/font/google";
import { useAppSelector } from '../redux/hooks';

const unbounded = Jura({ subsets: ['latin'], weight: ['700'] });

const Navbar = ({setShowCart}: any) => {

    const cartCount = useAppSelector((state) => state.cartReducer.length);

    return (
        <div className='bg-white py-4 sticky top-0 z-50 shadow-lg'>
            <div className='container flex justify-between items-center'>
                <RxHamburgerMenu className='sm:hidden text-[26px]' />
                <Link href="/" className={`${unbounded.className} flex text-4xl font-semibold `}>
                    <TbDeviceWatchStats2 className='mt-[2px] mr-1' /> E-WATCH
                </Link>

                <ul className='gap-8 hidden sm:flex'>
                    <li>
                        <Link href="/" className='navLink'>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className='navLink'>
                        Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className='navLink'>
                        Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className='navLink'>
                        Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex gap-6 text-[26px]">
                    <div className='relative cursor-pointer' onClick={() => setShowCart(true)}>
                        <GrCart />
                        <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center'>
                            {cartCount}
                        </div>
                    </div>
                    <AiOutlineSearch />
                </div>
            </div>
        </div>
    )
}

export default Navbar