import React from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg'

function Expertise() {
    return (
        <>
            <div className='mt-2 ' >
                <h1 className='mb-16 text-4xl font-bold underline text-center '>My Expertise</h1>
                {/*Box sextion*/}
                <div className="box-container flex py-16 items-center  " style={{
                    backgroundImage: `url(${bannerBackground})`,
                    backgroundSize: 'cover'
                }}>
                    {/*Text-Container */}
                    <div className="flex justify-center text-white">
                        <div className='w-2/3 text-center space-y-4'>
                            <h1 className='text-4xl font-semibold'>i love these technologies</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium unde nesciunt quos. Fuga similique animi beatae impedit optio, in iusto sapiente cum, asperiores nihil natus possimus nemo, molestias facilis eos!</p>
                            <button className='text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg'>Hire me</button>
                        </div>
                    </div>
                    {/*Skill-Container */}
                    <div className='flex justify-center'>
                        <div className='flex h-fit space-x-3 flex-wrap w-2/3 justify-center'>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1  rounded-full  hover:bg-orange-500'>core java</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>J2EE</p>
                            <p className='bg-slate-300 w-fit px-3 py-2   mt-1 rounded-full  hover:bg-orange-500'>Hibernate</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>Spring</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>Spring boot</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>ReactJS</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>Java Script</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>NextJS</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>TailwindCSS</p>
                            <p className='bg-slate-300 w-fit px-3 py-2   mt-1 rounded-full  hover:bg-orange-500'>Angular</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>State management</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>AWS</p>
                            <p className='bg-slate-300 w-fit px-3 py-2  mt-1 rounded-full  hover:bg-orange-500'>docker</p>

                        </div>


                    </div>


                </div>



            </div>

        </>
    )
}

export default Expertise
