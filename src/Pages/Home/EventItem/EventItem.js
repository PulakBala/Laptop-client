import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import event1 from '../../../assest/Images/EventImg/event-1-1.jpg'
import event2 from '../../../assest/Images/EventImg/event-1-2.jpg'
const EventItem = () => {
    const backgroundImage1 = [
        {img :'../../../assest/Images/EventImg/event-1-2.jpg'}
    ];
    console.log(backgroundImage1)
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-8 mx-auto py-4 '>
              <div className='py-7'>
              <span><AiFillStar/></span>
                <h2>LATEST EVENTS</h2>
                <h3>Upcoming city activities & events schedule</h3>
              </div>
                <div className='flex p-2 shadow-2xl'>
                    <div>
                        <img className='rounded-full' src={event1} alt=''></img>
                    </div>
                    <div className='mt-7 ml-9'>
                        <h2>Celebration</h2>
                        <div className='flex py-5'>
                            <span>icon</span>
                            <p>08:00am - 05:00pm</p>
                            <span>icon</span>
                            <p>New hyde park, NY 11040</p>
                        </div>
                        <h2 className='font-bold'>The City photography new contest</h2>
                    </div>
                </div>

                <div className='flex p-2 shadow-2xl py-12'>
                    <div>
                        <img className='rounded-full' src={event2} alt=''></img>
                    </div>
                    <div className='mt-7 ml-9'>
                        <h2>Celebration</h2>
                        <div className='flex py-5'>
                            <span>icon</span>
                            <p>08:00am - 05:00pm</p>
                            <span>icon</span>
                            <p>New hyde park, NY 11040</p>
                        </div>
                        <h2 className='font-bold'>The City photography new contest</h2>
                    </div>
                </div>
            </div>
            <div className='col-span-4 py-12'>
                <div className='h-72 text-2xl bg-lime-100 p-10'>
                    <span className=''>icon</span>
                    <h2 className='py-5'>Subscribe to <br/> our newslete for <br/> daily updates</h2>
                    <p>Get latest news & events details</p>
                </div>
                <div className='bg-blue-500 p-10 '>
                    <div><input className='py-2' placeholder='Email Address'/> </div><br/>
                    <div><button className='btn btn-outline'>Subscribe</button></div>
                    <br/>
                    <p>Never share your email with others</p>
                </div>
            </div>
        </div>
    );
};

export default EventItem;