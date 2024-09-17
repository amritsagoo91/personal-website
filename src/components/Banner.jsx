import React, { useEffect, useRef } from 'react'
import bannerImage from '../assets/IMG_1.png'
import bannerBackground from '../assets/banner_wallpaper.svg'
import Typed from "typed.js";

function Banner() {

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front End Developer", "Back End Developer", "HVAC Technician", "Uber Driver"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, [])


    return (

        <div className='main-container flex items-center' style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: 'cover'
        }}>
            <div className="py-10 w-1/2 flex justify-center items-center text-white">

                <div className='w-2/3 space-y-2 ms-10'>
                    <h3 className=' text-2xl font-semibold ' >Hi, i am</h3>
                    <h1 className=' text-4xl font-bold'>Amrit Pal Singh</h1>
                    <h2 className=' text-2xl font-semibold'>and I am <span className='font-bold' ref={el}></span></h2>
                    <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aut ad sit nam quibusdam, ipsam voluptates in voluptatibus ab hic consectetur neque? Possimus accusamus, hic repudiandae quidem nostrum delectus dicta vero provident quo aspernatur consequuntur at fugiat blanditiis earum ea magnam quos suscipit reprehenderit, minima aliquam magni in! Dolorum, modi?</p>

                    <div className='icons-container md:space-x-5  flex '>
                        <a href='#' className="hover:bg-orange-600 bg-gray-800 size-16 rounded-full flex items-center justify-center">
                            <i className="fa-brands text-4xl  fa-facebook"></i>
                        </a>
                        <a href='#' className="hover:bg-orange-600 bg-gray-800 size-16 rounded-full flex items-center justify-center">
                            <i className="fa-brands text-4xl  fa-instagram"></i>
                        </a>
                        <a href='#' className="hover:bg-orange-600 bg-gray-800 size-16 rounded-full flex items-center justify-center">
                            <i className="fa-brands text-4xl  text-4xl  fa-linkedin-in"></i>
                        </a>
                        <a href='#' className="hover:bg-orange-600 bg-gray-800 size-16 rounded-full flex items-center justify-center">
                            <i className="fa-brands text-4xl  fa-github"></i>
                        </a>



                    </div>

                    <br />
                    <a className=' px-3 py-2 rounded-full bg-orange-500 shadow-lg' href="">Contact me</a>
                </div>

            </div>

            <div className=" w-1/2 flex justify-center my-2">
                <img src={bannerImage} className=' w-1/2 rounded-full shadow-lg' alt="" />
            </div>
        </div >

    )
}

export default Banner
