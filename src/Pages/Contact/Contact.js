import React from "react";
import contact1 from "../../assest/Images/Contact/contact1.webp";
import contact2 from "../../assest/Images/Contact/contact-page-img-1.jpg";

import { AiFillStar, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
const Contact = () => {
  const divStyle = {
    backgroundImage: `url(${contact1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh", // Adjust the height as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <div className="bg-cover h-screen bg-center " style={divStyle}>
        <div className="text-center justify-center items-center flex h-full">
          <h1 className="text-white text-4xl font-bold">
            Contact page <br />{" "}
            <span className="text-black text-lg">Home / Contact</span>{" "}
          </h1>{" "}
          <br />
        </div>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-12 container mx-auto py-12 gap-10">
        <div className="col-span-5 border md:bg-green-700">
          <img
            src={contact2}
            alt="Contact"
            className="md:w-96  h-full rounded-lg mb-4"
          />
        </div>

        <div className="col-span-6 ">
          <span>
            <AiFillStar className="text-green-700" />
          </span>
          <p>CITY GOVITY</p>
          <p className="text-bold text-3xl">Get in touch now</p>
          <p>
            lorem ipsum dolor sit amet consectetur notted adipis not icing elit
            sed do eiusmod tempor incidiunt
          </p>
          <div className="grid gap-4 py-8">
            <div className="flex shadow">
              <div className="bg-slate-400 hover:bg-green-600 rounded p-4 ">
                <span className="text-3xl text-green-400 ">
                  <FiPhoneCall />
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
                <AiOutlineMail />
              </span>
              <div className="ml-10">
                <p>Write Email</p>
                <p>
                  <span className="font-bold text-2xl">+925647518</span>
                </p>
              </div>
            </div>

            <div className="flex shadow">
              <span className="text-3xl p-4 bg-gray-300 text-green-400 hover:bg-green-600 rounded">
                <FiPhoneCall />
              </span>
              <div className="ml-10">
                <p>Visit Anytime</p>
                <p>
                  <span className="font-bold text-2xl">
                    30 broklyn golden street. New York
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-9">
        <div className="text-center">
          <span className="text-green-500 flex justify-center items-center">
            <AiFillStar className="" />
          </span>
          <p>CONTACT</p>
          <p className="text-bold text-3xl">
            Feel free to get in touch with jessica
          </p>
        </div>

        <div className="grid grid-cols-12 text-center pt-12 py-4">
          <div className="col-span-12">
            <div>
              <input
                className="bg-slate-200 p-3"
                placeholder="Your Name "
              ></input>
              <input
                className="bg-slate-200 p-3 ml-4"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="py-4 ">
              <input
                className="bg-slate-200 p-3 w-11/12 h-36"
                placeholder="Write Comment"
              />
            </div>
          </div>
        </div>
        <button className="btn btn-outline flex mx-auto ">
          Send a Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
