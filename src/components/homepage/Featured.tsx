import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return (
        <div className='max-w-[1100px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 px-2 items-center mb-16'>
            {/* <div className="md:w-[50%] min-h-[300px] relative">
                    <Image src={"/main.jpg"} height={300} width={300} alt='image' className='rounded-lg absolute top-0 left-[5%]'/>
                    <Image src={"/main.jpg"} height={300} width={300} alt='image' className='rounded-lg absolute top-[10%] left-[15%]'/>
            </div> */}
            <div className=" w-full h-full col-span-1 flex items-start justify-center mb-10">
                <div className="relative bg-red-300">
                    <Image src={"/assets/images/house.jpg"} height={300} width={300} alt='image' className='rounded-lg'/>
                    <Image src={"/assets/images/house.jpg"} height={300} width={300} alt='image' className='rounded-lg absolute top-16 left-16'/>
                </div>
            </div>
            <div className="w-full">
                <p className="text-sm text-orange-400">Featured</p>
                <h2 className='text-[45px] font-semibold leading-10'>Investigate all corners of the world with us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum numquam cumque? Eveniet magnam dolor accusamus excepturi iste dolore asperiores ducimus officia error illo poquid iusto libero, at sint sapiente enim?</p>
                <button className="bg-teal-600 px-5 py-2 rounded-md hover:bg-teal-800  relative z-0 hover:text-white">
            Explore Now
          </button>
            </div>
        </div>
    );
};

export default Featured;