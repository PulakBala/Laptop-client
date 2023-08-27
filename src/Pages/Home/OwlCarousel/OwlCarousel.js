import React from "react";
import Carousel from "react-multi-carousel";
import img1 from "../../../assest/Images/infinity carosel/portfolio-1-1.jpg";
import img2 from "../../../assest/Images/infinity carosel/portfolio-1-2.jpg";
import img3 from "../../../assest/Images/infinity carosel/portfolio-1-3.jpg";
import img4 from "../../../assest/Images/infinity carosel/portfolio-1-4.jpg";
import img5 from "../../../assest/Images/infinity carosel/portfolio-1-5.jpg";

import { AiFillStar } from "react-icons/ai";

const OwlCarousel = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-12 mb-10">
        <div className="col-span-6 text-3xl ml-12">
          <span>
            <AiFillStar />
          </span>
          <h2>RECENT WORK</h2>
          <h2>Explore city beautiful <br/> highlights portfolio</h2>
        </div>
        <div className="col-span-4">
          <p>
            Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
            Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh
            egestas tempus turpis, sit amet mattis magna varius non.
          </p>
        </div>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={false}
        className="h-96 cursor-auto"
        containerClass="container-with-dots"
        dotListClass=""
        draggable={true}
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div>
          <img src={img1} alt=""></img>
        </div>

        <div>
          <img src={img2} alt=""></img>
        </div>

        <div>
          <img src={img3} alt=""></img>
        </div>

        <div>
          <img src={img4} alt=""></img>
        </div>

        <div>
          <img src={img5} alt=""></img>
        </div>
      </Carousel>
    </div>
  );
};

export default OwlCarousel;
