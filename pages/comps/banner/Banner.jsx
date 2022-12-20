import React from "react";

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&w=1000&q=80')]">
      <div className="container py-36">
        <h1 className="text-4xl text-gray-800 font-medium capitalize">
          Best collectoin for
        </h1>
        <h1 className="text-4xl text-gray-800 font-medium mb-4 capitalize">
          Home Decoreation
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>sed nihil sapiente provident sit voluptate veritatis eaque</p>
        <p className="mb-[4rem]">
          sed nihil sapiente provident sit voluptate veritatis eaque
        </p>
        <a
          href="#"
          className="bg-primary text-white py-3 px-5 border border-primary rounded-md font-medium hover:bg-white hover:text-primary transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
