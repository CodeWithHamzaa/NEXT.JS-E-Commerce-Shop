import React from 'react';
import FeatureCard from './FeatureCard';

const data = [
    {
        img: '/money.png',
        title: 'Secure Payment',
        desc: 'Fully protected when paying online'
    },
    {
        img: '/free-delivery.png',
        title: 'Free Delivery',
        desc: 'Shop now for fast, free delivery.'
    },
    {
        img: '/money-back.png',
        title: 'Money Back Guarantee',
        desc: 'Enjoy risk-free shopping with money-back guarantee.'
    },
    
]

const Features = () => {
    return (
        <div className='container pt-16'>
            <div className='grid md:grid-col-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
                {data.map(item => (
                    <FeatureCard 
                        key={item.title}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Features