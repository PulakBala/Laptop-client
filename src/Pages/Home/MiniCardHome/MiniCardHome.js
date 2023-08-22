import React from 'react';

const MiniCardHome = () => {
    
    return (
       <div className='bg-sky-950'>
        <div className="flex space-x-4 py-12 justify-around bg-sky-950 ">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className="relative p-4 gap-12 bg-white shadow-md rounded-md transition-transform hover:scale-105 hover:bg-gray-100 h-32"
          >
            <div className="absolute top-0 right-0 p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 hover:bg-gray-600 hover:scale-125"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-4.553a2 2 0 00-2.828-2.828L12 7l-4.553-4.553a2 2 0 00-2.828 2.828L7 10l-4.553 4.553a2 2 0 002.828 2.828L12 13l4.553 4.553a2 2 0 002.828-2.828L17 12l4.553-4.553a2 2 0 00-2.828-2.828L12 7"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-lg">Card Title</h3>
            <p className="text-gray-500">Card content goes here.</p>
          </div>
        ))}
      </div>
     <h2 className='text-white text-center py-2'>Get our quick services from the municipal. View all services</h2>
       </div>
    );
};

export default MiniCardHome;