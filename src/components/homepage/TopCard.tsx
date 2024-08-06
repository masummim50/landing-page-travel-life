import Image from "next/image";
import React from "react";
// {imageLink}:{imageLink:string}
const TopCard = ({fullWidth, imageLink }: {fullWidth?:boolean, imageLink: string }) => {
  return (
    <div className={`w-full ${fullWidth && 'col-span-2 md:col-span-1'} bg-blue-200 rounded-lg h-[300px] md:h-[400px] relative overflow-hidden`}>
      <Image
        src={imageLink}
        alt=""
        height={0}
        width={0}
        objectFit='fill'
        sizes="100vw"
        style={{ height: "100%", width: "100%" }}
      />
      <div className="bg-white/20 text-white p-6 backdrop-blur-sm rounded-l-lg absolute top-5 right-0 w-[50%]">Review</div>
      <div className="bg-white/20 text-white p-6 backdrop-blur-sm rounded-l-lg absolute bottom-2 left-0 w-full">Info about this place</div>
    </div>
  );
};

export default TopCard;
