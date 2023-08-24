import React from 'react';
import AbouteOneImg1 from '../../../assest/Images/AboutOne/about-one-img-1.jpg'
import AboutOneImg2 from '../../../assest/Images/AboutOne/about-one-img-2.jpg'
const AboutOne = () => {
    return (
    
        <div className='p-4 md:p-14 py-10 md:py-20 ml-2 md:ml-22'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='relative'>
            <div className='mb-4 md:mb-0'>
              <img className='' src={AbouteOneImg1} alt='' />
            </div>
            <div className='mb-4 md:mb-0'>
              <img className='absolute right-0 bottom-[-3px]' src={AboutOneImg2} alt='' />
            </div>
            <div className='absolute right-6 top-12 md:top-20 animate-bounce'>
              <div className='border p-7 border-blue-700'>
                <div className='border border-blue-700 p-6'>
                  <div className='border border-blue-700 bg-blue-700 p-4'>Video</div>
                </div>
              </div>
            </div>
            <div className='absolute flex gap-5 right-10 md:right-40 bottom-[-53px] md:w-64 h-32 border bg-gray-50 shadow-xl rounded-lg'>
              <div className='top-0 left-0 bottom-0 bg-blue-500 w-2'></div>
              <div>
                <h4>Icon</h4>
              </div>
              <div>
                <h4>Mayor Office</h4>
                <h4>+880153696**</h4>
              </div>
            </div>
          </div>
          <div className='md:col-span-1'>
            <icon>icon</icon>
            <h6 className='text-xs md:text-sm'>WELCOME TO GOVITY</h6>
            <h1 className='text-3xl md:text-4xl font-medium py-4 md:py-6'>Meet Ideological leader for the youth generation</h1>
            <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected humor or randomised words which don't look even slightly.</p>
            <div className='flex gap-2 md:gap-4 py-4 md:py-6'>
              <icon>icon</icon>
              <h1 className='text-blue-500 text-xl md:text-2xl'>Great city & place to develop your career & business.</h1>
            </div>
            <br />
            <hr className='my-4 md:my-8' />
            <br />
            <p>There are many variations of passages of available but the majority have suffered alteration in some form.</p>
            <div className='flex mt-8 gap-4'>
              <button className='btn btn-outline'>Discover More</button>
              <p>Something</p>
            </div>
          </div>
        </div>
      </div>
      

    );
};

export default AboutOne;