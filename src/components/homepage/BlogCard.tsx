import Image from "next/image";
import React from "react";

const BlogCard = ({n}:{n:number}) => {
  return (
    <div className="group col-span-1 bg-white rounded-md h-auto md:h-[250px] flex flex-col md:flex-row overflow-hidden gap-2 hover:shadow-md cursor-pointer">
      <div className="image w-full md:w-[35%] relative">
        <Image
          src={`/assets/images/sq${n}.jpg`}
          alt=""
          sizes="100vw"
          height={0}
          width={0}
          objectFit="fill"
          objectPosition="center"
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div className="info w-full md:w-[65%] flex h-full flex-col justify-center gap-5">
        <h2 className="font-bold text-sm md:text-2xl px-3 ">
          Beautiful Italy! Lets Traveling
        </h2>
        <p className="text-xs md:text-sm px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing, possimus?
        </p>
        <div className="px-3 py-3">
          <button className="group-hover:min-w-[100%] min-w-[1%] group-hover:bg-teal-600 group-hover:text-white transition-all bg-blue-300/20 px-5 py-2 rounded hover:shadow-md font-semibold text-xs md:text-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
