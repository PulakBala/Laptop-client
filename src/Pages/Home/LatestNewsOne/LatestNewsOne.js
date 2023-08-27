import React from 'react';
import latest1 from '../../../assest/Images/LatestNews/news-1-1.jpg'
import latest3 from '../../../assest/Images/LatestNews/news-1-2.jpg'
import latest4 from '../../../assest/Images/LatestNews/news-1-3.jpg'
import latest2 from '../../../assest/Images/LatestNews/news-one-user-img.jpg'
const LatestNewsOne = () => {
    return (
        <div className='container mx-auto py-12'>
            <div className='text-center'>
                <span>icon</span>
                <h2 className='text-xl '>LATEST NEWS</h2>
                <h2 className='text-3xl pb-8 font-bold'>Latest news & articles from the blog</h2>
            </div>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-4 shadow-xl'>
                    <img src={latest1} alt=''></img>
                    <div className='p-4 bg-white shadow'>
                        <div className='flex pt-4'>
                            <img className='rounded-full' src={latest2} alt=''></img>
                            <h2 className='ml-8'>by <br/> Admin</h2>
                            <span className='ml-5 mr-6'>icon</span>
                            <p>Comments</p>
                        </div>
                        <h1 className='text-2xl my-4'>Support local business to bounce back</h1>
                        <hr/>
                        <p className='mt-4 hover:text-blue-600'>Read More <span>icon</span></p>
                    </div>
                </div>
                <div className='col-span-4 shadow-xl'>
                    <img src={latest3} alt=''></img>
                    <div className='p-4 bg-white shadow'>
                        <div className='flex pt-4'>
                            <img className='rounded-full' src={latest2} alt=''></img>
                            <h2 className='ml-8'>by <br/> Admin</h2>
                            <span className='ml-5 mr-6'>icon</span>
                            <p>Comments</p>
                        </div>
                        <h1 className='text-2xl my-4'>Support local business to bounce back</h1>
                        <hr/>
                        <p className='mt-4 hover:text-blue-600'>Read More <span>icon</span></p>
                    </div>
                </div>

                <div className='col-span-4 shadow-xl'>
                    <img src={latest4} alt=''></img>
                    <div className='p-4 bg-white shadow'>
                        <div className='flex pt-4'>
                            <img className='rounded-full' src={latest2} alt=''></img>
                            <h2 className='ml-8'>by <br/> Admin</h2>
                            <span className='ml-5 mr-6'>icon</span>
                            <p>Comments</p>
                        </div>
                        <h1 className='text-2xl my-4'>Support local business to bounce back</h1>
                        <hr/>
                        <p className='mt-4 hover:text-blue-600'>Read More <span>icon</span></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LatestNewsOne;