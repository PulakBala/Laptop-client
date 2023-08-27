import React from 'react';
import img1 from '../../../assest/Images/CarouselBanner/img3.avif'
const InfinityCarosel = () => {
    return (
        <div className="w-full bg-red-100">
        <div className="h-[200px] m-auto overflow-hidden relative w-auto">
            <ul className="flex w-[calc(250px*14)] animate-scroll">
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
                <li className="w-[250px]"><img src={img1} alt=''></img></li>
            </ul>
        </div>
</div>
    );
};

export default InfinityCarosel;