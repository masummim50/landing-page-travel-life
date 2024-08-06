import React from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div className='bg-blue-200/40 mb-[110px]'>
            <div className="max-w-[1100px] mx-auto px-2 py-10">
                <div className="info text-center pt-10">
                    <p className="text-orange-300 text-sm">BLOGS</p>
                    <p className="font-bold text-2xl">Our Blogs</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit beatae rem ex <br/> sed odio corrupti totam fugit soluta omnis tenetur.</p>
                </div>
                <div className="blogs-container grid grid-cols-2 gap-4 py-8">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
        </div>
    );
};

export default Blogs;