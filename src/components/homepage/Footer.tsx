import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-500/20  mt-7">
      {/* container for white part */}
      <div className="relative max-w-[1100px] mx-auto">
        {/* newsletter */}
        <div className="bg-white shadow-md flex px-2 py-5 rounded-md absolute w-full top-[-15%] left-0">
          <div className="w-full md:w-1/2">
            <p className="text-orange-400 font-semibold text-xs">SUBSCRIBE</p>
            <h2 className="font-bold text-md">Our NewsLetter</h2>
          </div>
          <div className="w-full md:w-1/2">
            <p>Get Notification</p>
            <div className=" flex">
              <input
                type="text"
                placeholder="Enter your Email"
                className="flex-1 outline-none py-2 px-2 bg-gray-500/20 rounded-lg"
              />
              <button className=" px-4 py-2 rounded-lg bg-teal-700 text-white font-semibold hover:bg-teal-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* other info */}
        <div className="pt-[100px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente delectus, suscipit ipsam dignissimos sunt officiis, officia laudantium ullam quo ut corporis tempora eligendi doloribus repellendus voluptate? Ea reprehenderit quidem minima optio qui perferendis ut consectetur odio possimus, cupiditate amet laudantium quis labore, perspiciatis officia veniam accusantium sequi corrupti, ducimus asperiores voluptatem saepe a? Ducimus quisquam eum, error deleniti fuga, doloremque sequi a inventore iusto, odit molestiae ad nulla unde? Nesciunt tempora delectus minus? Pariatur magni ex doloribus maxime et repudiandae necessitatibus, nostrum omnis eligendi cumque dolorem quidem aut nemo culpa rem ut non. Voluptatem quia dicta mollitia, sint fugit odio rem inventore perspiciatis at vero quo dolorum molestias dignissimos consequatur autem, facilis ex nesciunt fugiat, consequuntur quos pariatur sed saepe dolores placeat? Quod nobis porro ea aut aliquam quos numquam ratione adipisci, tempore eum maxime magnam veritatis, vitae, quia itaque facilis corporis officia libero unde sunt quibusdam. Quaerat tempore minima laborum neque atque. Explicabo in non adipisci dolorem ad magni laboriosam, blanditiis earum recusandae voluptate ipsam quos fuga quisquam voluptas fugiat debitis excepturi atque consectetur consequatur nemo porro molestias perspiciatis dolore? Illum deleniti repudiandae quidem consequatur distinctio excepturi facilis. Eveniet aut nobis mollitia at, sunt odit obcaecati dicta excepturi?</div>
      </div>
      {/* rest of the info here */}

      
      <div className="bg-teal-700 text-center text-white py-4 mt-[100px]">
            <p>copyright info</p>
        </div>
    </div>
  );
};

export default Footer;
