import React from "react";
import {AiFillStar , AiFillYoutube, AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'
import {GrFacebook} from 'react-icons/gr'
import team1 from '../../../assest/Images/TeamOne/tema1.avif'

const TeamOne = () => {
  return (
    <div className="container mx-auto">
      <dv className='text-center text-xl'>
        <span className="flex justify-center pt-4 text-blue-600"><AiFillStar/></span>
        <h4>Our Team Members</h4>
        <h1 className="text-3xl">Meet great city council members</h1>
      </dv>

      <div className="grid grid-cols-1 md:grid-cols-3 py-12 ">
        <div className="bg-white shadow-2xl rounded-t-full w-8/12 p-2 text-center hover:scale-105 hover:border-blue-400 border-t-4 border-b-4">
            <img src={team1} alt="" className="rounded-t-full rounded w-26 "></img>
            <h1 className="text-2xl">Barson king</h1>
            <h2>mayor</h2>
            <ul className="flex justify-around mt-2 ">
                <li className="hover:scale-150 hover:bg-black text-blue-800"><GrFacebook/></li>
                <li className="hover:scale-150 hover:bg-black text-red-800"><AiFillYoutube/></li>
                <li className="hover:scale-150 hover:bg-black text-blue-800"><AiFillLinkedin/></li>
                <li className="hover:scale-150 hover:bg-black text-blue-800"><AiOutlineTwitter/></li>
            </ul>
        </div>
        <div className="bg-white shadow-2xl rounded-t-full w-8/12 p-2 text-center hover:scale-105 hover:border-blue-400 border-t-4 border-b-4">
            <img src={team1} alt="" className="rounded-t-full rounded w-26 "></img>
            <h1 className="text-2xl">Barson king</h1>
            <h2>mayor</h2>
            <ul className="flex justify-around mt-2 ">
                <li className="hover:scale-150 hover:bg-black text-blue-800"><GrFacebook/></li>
                <li className="hover:scale-150 hover:bg-black text-red-800"><AiFillYoutube/></li>
                <li className="hover:scale-150 hover:bg-black text-blue-800"><AiFillLinkedin/></li>
                <li className="hover:scale-150 hover:bg-black text-blue-800"><AiOutlineTwitter/></li>
            </ul>
        </div>
        <div className="bg-white shadow-2xl rounded-t-full w-8/12 p-2 text-center hover:scale-105 hover:border-blue-400 border-t-4 border-b-4">
            <img src={team1} alt="" className="rounded-t-full rounded w-26 "></img>
            <h1 className="text-2xl">Barson king</h1>
            <h2>mayor</h2>
            <ul className="flex justify-around mt-2 ">
                <li className="hover:scale-150 hover:bg-black text-blue-800"><GrFacebook/></li>
                <li className="hover:scale-150 hover:bg-black text-red-800"><AiFillYoutube/></li>
                <li className="hover:scale-150 hover:bg-black text-blue-800"><AiFillLinkedin/></li>
                <li className="hover:scale-150 hover:bg-black text-blue-800"><AiOutlineTwitter/></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
