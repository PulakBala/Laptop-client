import React from 'react';
import img1 from '../../../assest/Images/CarouselBanner/img1.avif'
import img2 from '../../../assest/Images/CarouselBanner/img2.avif'
import img3 from '../../../assest/Images/CarouselBanner/img3.avif'
import img4 from '../../../assest/Images/CarouselBanner/img4.avif'

const CarouselBanner = () => {
    return (
        <div className="carousel w-full -z-50">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} alt='' className="w-full" />
          <div className="absolute transform -translate-y-1/2 right-2  bottom-0">
            <a href="#slide4" className="btn btn-default mr-5">❮</a> 
            <a href="#slide2" className="btn btn-default">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} alt='' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 right-2 bottom-0">
            <a href="#slide1" className="btn btn-default mr-5">❮</a> 
            <a href="#slide3" className="btn btn-default">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} alt='' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 right-2 bottom-0">
            <a href="#slide2" className="btn btn-default mr-5">❮</a> 
            <a href="#slide4" className="btn btn-default">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} alt='' className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 right-2 bottom-0">
            <a href="#slide3" className="btn btn-default mr-2">❮</a> 
            <a href="#slide1" className="btn btn-default">❯</a>
          </div>
        </div>
      </div>
    );
};

export default CarouselBanner;