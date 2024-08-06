import React from 'react';
import TopCard from './TopCard';

const PopularDestinations = () => {
    return (
        <div className='my-10'>
            <div className='max-w-[1100px] mx-auto'>
                <div className="texts text-center">
                    <p className="text-orange-400">Top Destinations</p>
                    <p className="font-bold text-2xl">Popular Destinations</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, odit officia laboriosam culpa <br/> dignissimos perspiciatis fuga deserunt delectus. Corporis, aperiam?</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-2">
                    <TopCard imageLink='/assets/images/top2.jpg'/>
                    <TopCard imageLink='/assets/images/top1.jpg'/>
                    <TopCard fullWidth={true} imageLink='/assets/images/top3.jpg'/>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;