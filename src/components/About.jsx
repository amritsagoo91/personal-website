import React, { useState } from 'react'
import bannerImage2 from '../assets/IMG_2.png'

function About() {
    const [data, setData] = useState({
        image: bannerImage2,
        titlle: "React Developer",
        desc1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem neque doloremque optio eveniet exercitationem nisi.
                Et unde commodi dolor officiis!`,
        desc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, ex! Reprehenderit quod dolor inventore dignissimos eum repellendus,
                deserunt omnis aut! Repellat eveniet quo quaerat delectus animi!
                Quia est excepturi rerum!`,

        actionbutton: {
            title: "Read More",
            link: '/read-more'
        }
    }

    )
    return (
        <>
            <div className="main-container py-16 border bg-gray-100">
                <h1 className='text-center text-4xl font-bold underline pb-16'>About Me</h1>
                <div className='flex items-center'>
                    <div className='w-full main-container flex justify-center'>

                        <img src={bannerImage2} alt="bannerImage2" className='w-1/2 rounded-full shadow-lg ' />
                    </div>


                    <div className='w-full  flex justify-center' >
                        <div className='space-y-5 w-2/3'>
                            <h1 className='text-4xl semi-bold'>{data.titlle}</h1>
                            <p>
                                {data.desc1}
                            </p>

                            <p>
                                {data.desc2}
                            </p>
                            <button className='bg-orange-500 px-3 py-2 shadow-lg rounded-full '>{data.actionbutton.title}...</button>
                        </div>

                    </div>
                </div>

            </div >



        </>
    )
}

export default About
