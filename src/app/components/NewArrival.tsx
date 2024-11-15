'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Data from "@/app/utils/productData";
import ProductCard, { IProduct } from './ProductCard';

const tabsData = ["All", "Smart", "Digital", "Classic", "Kids"];

const NewArrival = () => {
    const [selectTab, setSelectTab] = useState(0);
    const [data, setData] = useState([]);

    const shuffleArray = (array: any) => {
        return array
        .map((value: any) => ({ value, sort: Math.random() }))
        .sort((a: any, b: any) => a.sort - b.sort)
        .map(({ value}: any) => value);
    };

    useEffect(() => {
        setData(shuffleArray(Data).slice(0, 8));
    }, []);

    const handleTab = (index: number) => {
        const category = tabsData[index].toLowerCase();
        setSelectTab(index);

        if (category === "all") {
            setData(shuffleArray(Data).slice(0, 8));
            return
        }

        const filterData = Data.filter((item) => item.category.includes(category));
        setData(shuffleArray(filterData));
    };

    return (
        <div className='container pt-28 pb-24'>
            <div className='text-center'>
                
                <h2 className='font-semibold text-6xl pt-4'>New Arrival</h2>

                <ul className='flex flex-col sm:flex-row gap-4 sm:gap-10 tracking-wider justify-center pt-10 uppercase font-medium text-[17px]'>
                    {tabsData.map((tab, index) => (
                        <li
                            key={tab}
                            className={`${selectTab === index && 'border-b-4 border-accent'
                                } cursor-pointer hover:text-[#6346f3]`}
                            onClick={() => handleTab(index)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8'>
                    {data.map((item: IProduct) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            sale={item.sale}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewArrival