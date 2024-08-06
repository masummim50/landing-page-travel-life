import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

// {imageLink}:{imageLink:string}
const TopCard = ({
  fullWidth,
  imageLink,
  name,
  price,
  review,
}: {
  fullWidth?: boolean;
  imageLink: string;
  name: string;
  price: number;
  review: number;
}) => {
  return (
    <div
      className={`w-full ${
        fullWidth && "col-span-2 md:col-span-1"
      } bg-blue-200 rounded-lg h-[300px] md:h-[400px] relative overflow-hidden group`}
    >
      <Image
        className="group-hover:scale-110 transition-all"
        src={imageLink}
        alt=""
        height={0}
        width={0}
        objectFit="fill"
        sizes="100vw"
        style={{ height: "100%", width: "100%" }}
      />
      <div className="bg-white/20 text-white py-2 px-2 backdrop-blur-sm rounded-l-full absolute top-5 right-0 flex items-center gap-2">
        <FaStar className="text-orange-500"/> {review}
      </div>
      <div className="bg-white/20 text-white px-2 py-5 backdrop-blur-sm rounded-l-lg absolute bottom-0 left-0 w-full flex flex-row">
        <div className="info">
          <div className="font-bold text-white">{name}</div>
          <p className="line-clamp-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            fuga, voluptatibus voluptas quaerat nisi totam.
          </p>
        </div>
        <div className="flex items-center">
          <div className="bg-white/20 rounded-sm px-1 py-0 flex items-center min-h-0">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
