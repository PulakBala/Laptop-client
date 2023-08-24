import React from "react";
import service1 from '../../../assest/Images/OnlineService/services-one-img-1.png'
import {FaAngleRight} from 'react-icons/fa'
const ServicesOne = () => {
  return (
    <div className="grid grid-cols-12 py-12">

        <div className=" col-span-8 z-30 shadow-xl">
         <div className="bg-blue-500 h-12"> <p className="p-2 ml-16 text-2xl">Explore Online services & resourse</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mx-auto">
              <ul className="py-5 grid gap-3">
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
              </ul>
            </div>
            <div>
            <ul className="py-5 grid gap-3">
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
                <li className="flex justify-around hover:before:bg-slate-700 cursor-pointer hover:bg-blue-100 w-80 hover:text-blue-600 transition duration-500 transform">Parking Permission <span className="mt-1 animate-ping"> <FaAngleRight/></span></li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className=" col-span-4"><img className="mt-9" src={service1} alt=""></img></div>

    </div>
  );
};

export default ServicesOne;
