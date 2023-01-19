import React from 'react';
import banner1 from '../../../Assets/Banners/banner1.png';
import banner2 from '../../../Assets/Banners/banner2.png';

const Banner = () => {
    return (
        <div className="carousel relative slide w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner2} alt='bannerImg-1' className="w-full h-[80vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <h2 className='absolute text-3xl left-8 lg:left-20 top-16 lg:top-1/3 lg:text-5xl font-bold text-white bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] p-10 rounded-lg border-2 border-white shadow-lg shadow-white'>Book A Meeting <br /> For 60 Minutes</h2>
                <button className='absolute btn btn-primary px-10 hover:scale-125 hover:bg-white hover:border-primary hover:shadow-primary duration-500 border-2 border-white rounded-lg top-48 lg:top-2/3 left-32 lg:left-40 shadow-lg shadow-white'>Book</button>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner1} alt='bannerImg-2' className="w-full h-[80vh]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <h2 className='absolute text-3xl left-8 lg:left-20 top-16 lg:top-1/3 lg:text-5xl font-bold text-white bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] p-10 rounded-lg border-2 border-white shadow-lg shadow-white'>Book A Meeting <br /> For 60 Minutes</h2>
                <button className='absolute btn bg-orange-200 text-black px-10 hover:scale-125 hover:bg-white hover:border-black duration-500 border-2 border-white rounded-lg top-48 lg:top-2/3 left-32 lg:left-40 shadow-lg shadow-white'>Book</button>
            </div>
        </div>
    );
};

export default Banner;