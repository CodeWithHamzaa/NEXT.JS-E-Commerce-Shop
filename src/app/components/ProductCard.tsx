import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/features/cartSlice';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    img: string;
    sale: boolean | undefined
}

const ProductCard = ({ id, name, price, img, sale }: IProduct) => {

    const router = useRouter();

    const dispatch = useAppDispatch();

    const getRatting = () => {
        const randomNumber = (min: number, max: number) => {
            return Math.ceil(Math.random() * (max - min) + min);
        };

        switch (randomNumber(0, 5)) {
            case 0:
                return (
                    <div className='flex justify-center text-[#6346f3] pt-4 pb-2'>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 1:
                return (
                    <div className='flex justify-center text-[#6346f3] pt-4 pb-2'>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 2:
                return (
                    <div className='flex justify-center text-[#6346f3] pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 3:
                return (
                    <div className='flex justify-center text-[#6346f3] pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                );
            case 4:
                return (
                    <div className='flex justify-center text-[#6346f3] pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                );
            case 5:
                return (
                    <div className='flex justify-center text-[#6346f3] pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                );

            default:
                return <div></div>
        }
    };

    const addProductToCart = (e: React.FormEvent) => {
        e.stopPropagation();

        const payload = {
            id,
            name,
            price,
            img,
            quantity: 1
        }

        dispatch(addToCart(payload));
    };

    return (
        <div className='group cursor-pointer pb-10' onClick={() => router.push(`/details/${id}`)}>
            <div className='relative pb-10'>
                <Image className='w-full' width={1000} height={1132} src={img} alt={name}
                />

                {sale && (
                    <div className='bg-red-600 inline-block tracking-wider absolute top-1.5 z-10 left-0 text-[14px] text-white rounded-md px-2 py-0.5 m-4'>
                        SALE!
                    </div>

                )}

                <div
                    className="bg-gray-100 w-10 h-10 z-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="fill-gray-800 inline-block group-hover:fill-red-600" viewBox="0 0 64 64">
                        <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div className='absolute top-0 left-0 w-full h-full bg-[#00000035] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer'>
                    <div className='absolute bottom-0 right-[28%] sm:right-[15%] md:right-[8%] lg:right-[5%] xl:right-[19%] xxl:right-[18%] flex items-center justify-center pb-4'>
                        <div
                            className='bg-[#694ef2] w-full text-white hover:text-black hover:bg-gray-100 transition ease-in duration-200 border-[3px] hover:scale-105 font-medium z-10 border-[#694ef2] focus:outline-none flex items-center justify-center gap-3 py-2 px-6 rounded-lg text-[22px] sm:text-[18px] md:text-[16px] lg:text-[18px] place-items-center uppercase' onClick={addProductToCart}
                        >
                            <FiShoppingCart className='font-semibold text-[24px]' /> Add to cart
                        </div>
                    </div>
                </div>
            </div>

            {getRatting()}
            <h2 className='font-medium pb-3 hover:text-accent'>{name}</h2>
            <p className='text-gray-600 font-light'>${price}.00</p>
        </div>

    );
};

export default ProductCard;