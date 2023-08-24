import React from "react";
import feature1 from "../../../assest/Images/FeaturesOne/feature-1-1.jpg";
import feature2 from "../../../assest/Images/FeaturesOne/feature-1-2.jpg";
import feature3 from "../../../assest/Images/FeaturesOne/feature-1-3.jpg";

const FeatureOne = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition duration-500 cursor-pointer p-4">
      <div className="relative group bg-blue-200 p-4">
        <div>
          <img src={feature1} alt=""></img>
        </div>
        <div className="absolute left-[150px] bottom-[110px]  z-40 bg-white w-24 h-24 rounded-full  flex justify-center items-center mx-auto">
          Icon
        </div>

        <div className="absolute bottom-[16px] left-[53px] bg-white w-72 h-32 text-center flex justify-center items-center  mx-auto ">
          <h2>History & Establisment</h2>
        </div>

        <div className="hidden absolute z-40 w-72 h-96 bottom-[16px] left-[53px] mx-auto transition  duration-500  transform   group-hover:block hover:hidden bg-white">
          <div className="bg-blue-600 text-center h-48 p-2 text-3xl py-6 text-white">
            <p>Icon</p>
            <h2 className="mt-4">History & Establisment</h2>
          </div>
          <div className="ml-1">
            <p className="mt-6">
              Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id
              quam sed eros luctus sit ame.
            </p>
            <button className="btn btn-outline w-64 ml-3 mt-12">Read More ...</button>
          </div>
        </div>
      </div>


      <div className="relative group bg-blue-200 p-4">
        <div>
          <img src={feature2} alt=""></img>
        </div>
        <div className="absolute left-[150px] bottom-[110px]  z-40 bg-white w-24 h-24 rounded-full  flex justify-center items-center mx-auto">
          Icon
        </div>

        <div className="absolute bottom-[16px] left-[53px] bg-white w-72 h-32 text-center flex justify-center items-center  mx-auto ">
          <h2>History & Establisment</h2>
        </div>

        <div className="hidden absolute z-40 w-72 h-96 bottom-[16px] left-[53px] mx-auto transition  duration-2000  transform   group-hover:block hover:hidden bg-white">
          <div className="bg-blue-600 text-center h-48 p-2 text-3xl py-6 text-white">
            <p>Icon</p>
            <h2 className="mt-4">History & Establisment</h2>
          </div>
          <div className="ml-1">
            <p className="mt-6">
              Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id
              quam sed eros luctus sit ame.
            </p>
            <button className="btn btn-outline w-64 ml-3 mt-12">Read More ...</button>
          </div>
        </div>
      </div>



      <div className="relative group bg-blue-200 p-4">
        <div>
          <img src={feature3} alt=""></img>
        </div>
        <div className="absolute left-[150px] bottom-[110px]  z-40 bg-white w-24 h-24 rounded-full  flex justify-center items-center mx-auto">
          Icon
        </div>

        <div className="absolute bottom-[16px] left-[53px] bg-white w-72 h-32 text-center flex justify-center items-center  mx-auto ">
          <h2>History & Establisment</h2>
        </div>

        <div className="hidden absolute z-40 w-72 h-96 bottom-[16px] left-[53px] mx-auto transition  duration-2000  transform   group-hover:block hover:hidden bg-white">
          <div className="bg-blue-600 text-center h-48 p-2 text-3xl py-6 text-white">
            <p>Icon</p>
            <h2 className="mt-4">History & Establisment</h2>
          </div>
          <div className="ml-1">
            <p className="mt-6">
              Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id
              quam sed eros luctus sit ame.
            </p>
            <button className="btn btn-outline w-64 ml-3 mt-12">Read More ...</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default FeatureOne;
