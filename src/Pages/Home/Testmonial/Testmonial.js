import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import img1 from "../../../assest/Images/Testmonials/testimonial-one-shape-1.png";
import img2 from "../../../assest/Images/Testmonials/testimonial-1-2.jpg";
const Testmonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="">
      <div className="text-center text-3xl py-10">
        <span>icon</span>
        <h2>OUR TESMONIALS</h2>
        <h2>People are appreciating our city & work?</h2>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true} // Enables infinite loop
        autoPlay={false} // Enable auto-play
        autoPlaySpeed={3000} // Auto-play interval in milliseconds
        arrows={false}
      >
        {/* Add your carousel items */}
        <div className=" container mx-auto py-12">
          <h2>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. lterative approaches to corporate strategy data
            foster to collaborative thinking
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="absolute ml-44 mt-10">
                <span>icon</span>
                <h2>Aleesha brown</h2>
                <h2>CEO-Co Founder</h2>
              </div>
              <span className="absolute right-0 p-12">icon</span>
            </div>
            <img
              src={img2}
              alt=""
              className="absolute bottom-[38px] rounded-full h-32 w-32 left-[15px]"
            />
          </div>
        </div>


        <div className=" container mx-auto py-12">
          <h2>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. lterative approaches to corporate strategy data
            foster to collaborative thinking
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="absolute ml-44 mt-10">
                <span>icon</span>
                <h2>Aleesha brown</h2>
                <h2>CEO-Co Founder</h2>
              </div>
              <span className="absolute right-0 p-12">icon</span>
            </div>
            <img
              src={img2}
              alt=""
              className="absolute bottom-[38px] rounded-full h-32 w-32 left-[15px]"
            />
          </div>
        </div>
    


        <div className=" container mx-auto py-12">
          <h2>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. lterative approaches to corporate strategy data
            foster to collaborative thinking
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="absolute ml-44 mt-10">
                <span>icon</span>
                <h2>Aleesha brown</h2>
                <h2>CEO-Co Founder</h2>
              </div>
              <span className="absolute right-0 p-12">icon</span>
            </div>
            <img
              src={img2}
              alt=""
              className="absolute bottom-[38px] rounded-full h-32 w-32 left-[15px]"
            />
          </div>
        </div>


     <div className=" container mx-auto py-12">
          <h2>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. lterative approaches to corporate strategy data
            foster to collaborative thinking
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex">
              <div>
                <img src={img1} alt="" />
              </div>
              <div className="absolute ml-44 mt-10">
                <span>icon</span>
                <h2>Aleesha brown</h2>
                <h2>CEO-Co Founder</h2>
              </div>
              <span className="absolute right-0 p-12">icon</span>
            </div>
            <img
              src={img2}
              alt=""
              className="absolute bottom-[38px] rounded-full h-32 w-32 left-[15px]"
            />
          </div>
        </div>
        {/* ... */}
      </Carousel>
    </div>
  );
};

export default Testmonial;
