import React from "react";
import about1 from "../../assest/Images/About/about1.webp";
import about2 from "../../assest/Images/About/about-four-img-1.jpg";
import aboutShape1 from "../../assest/Images/About/about-four-shape-1.png";
import about3 from "../../assest/Images/About/about-four-img-2.jpg";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const About = () => {
  const divStyle = {
    backgroundImage: `url(${about1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh", // Adjust the height as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="relative pb-12">
      <div className="bg-cover h-screen bg-center " style={divStyle}>
        <div className="text-center justify-center items-center flex h-full">
          <h1 className="text-white text-4xl font-bold">
            About page <br />{" "}
            <span className="text-black text-lg">Home / About us</span>{" "}
          </h1>{" "}
          <br />
        </div>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-12 container mx-auto py-12 gap-10">
        <div className="col-span-2">
          <img
            src={aboutShape1}
            alt=""
            className="animate-bounce  mt-28 "
          ></img>
        </div>
        <div className="col-span-4 border md:bg-green-700">
          <img src={about2} alt="Contact" className=" h-full rounded-lg mb-4" />
        </div>

        <div className="absolute w-56 h-64 left-48 bottom-12 bg-green-600">
          <img src={about3} alt=""></img>
          <p className="text-center mt-9">The major voice of city government canada</p>
        </div>

        <div className="col-span-6 ">
          <span>
            <AiFillStar className="text-green-700" />
          </span>
          <p>WELCOME TO GOVITY</p>
          <p className="text-bold text-3xl">
            Meet Ideological leader for youth generation
          </p>
          <p>
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't slightly.
          </p>
          <div className="grid gap-4 py-8">
            <div className="flex shadow">
              <div className="bg-slate-400 hover:bg-green-600 rounded p-4 ">
                <span className="text-3xl text-green-400 ">
                  <AiOutlineLeft />
                </span>
              </div>
              <div className="ml-10">
                <p>Have any Question?</p>
                <p>
                  Free<span className="font-bold text-2xl">+925647518</span>
                </p>
              </div>
            </div>

            <div className="flex shadow">
              <span className="text-3xl bg-gray-300 text-green-400 hover:bg-green-600 p-4">
                <AiOutlineRight />
              </span>
              <div className="ml-10">
                <p>Write Email</p>
                <p>
                  <span className="font-bold text-2xl">+925647518</span>
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-outline hover:bg-green-600">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
