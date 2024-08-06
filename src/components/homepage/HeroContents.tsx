import React from 'react';
import Header from './Header';
import Info from './Info';

const HeroContents = () => {
    return (
        <div className='max-w-[1100px] mx-auto px-2 pb-10'>
            <Header/>
            <Info/>
        </div>
    );
};

export default HeroContents;