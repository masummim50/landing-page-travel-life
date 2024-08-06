import React from 'react';
import HeroContents from './HeroContents';
import Info from './Info';

const HeroSection = () => {
    const styling = {
        backgroundImage: `url('./main.jpg')`,
        width:"100%",
        backgroundSize: "cover",
        backgroundPosition:'center'
    }
    return (
        <div 
        style={styling}
        >
            <HeroContents/>
        </div>
    );
};

export default HeroSection;