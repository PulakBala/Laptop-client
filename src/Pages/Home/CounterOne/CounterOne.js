import React from "react";
const CounterOne = () => {
  return (
    <div className="relative py-12">
      <div className=" w-44 mx-auto animate-bounce ">
        <div className="border p-7 border-blue-700 rounded-full">
          <div className="border border-blue-700 p-6 rounded-full">
            <div className="border border-blue-700 bg-blue-700 rounded-full p-4">
              Video
            </div>
          </div>
        </div>
      </div>
      <p className="text-3xl text-black w-96 text-center mx-auto pb-16">
        We help you solve your city government problems
      </p>
      <div className=" bg-blue-500 grid grid-cols-3 h-64 place-content-center p-4">
        <div>
          <h2 className="text-4xl ">82K</h2>
          <p className="text-xl">Total people lived in our city</p>
        </div>
        <div>
          <h2 className="text-4xl ">4th</h2>
          <p className="text-xl"> average home costs of ownership</p>
        </div>
        <div>
          <h2 className="text-4xl ">26%</h2>
          <p className="text-xl">Private & domestic garden land</p>
        </div>
      </div>

      <div className="absolute bottom-[270px] right-0 grid grid-cols-12  h-42   place-content-center z-30">
        <div className="col-span-3 bg-black">
          <p className="text-xl text-white">Recent Documents</p>
        </div>
        <div className="flex col-span-3 bg-white">
          <div className="">
            <span>icon</span>
            <p className="">Vehicle Parking License</p>
            <p>Download the license details file</p>
          </div>
          <div>
            <span>icon</span>
          </div>
        </div>

        <div className="flex col-span-3 bg-gray-700">
          <div>
            <span>icon</span>
            <h2 className="">City Board Application</h2>
            <p>Download the license details file</p>
          </div>
          <div>
            icon
          </div>
        </div>

      </div>
    </div>
  );
};

export default CounterOne;
