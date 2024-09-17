import React, { useState } from 'react'

function Header() {
    const [brandName, setBrandName] = useState("Amrit Pal Singh");
    const [actionButton, setActionButton] = useState(
        {
            title: 'Hire me',
            link: '/hire-me'
        }
    )
    const [links, setLinks] = useState([{
        title: 'Home',
        link: '/home',
        id: 1
    },
    {
        title: 'About',
        link: '/about',
        id: 2
    },
    {
        title: 'Skills',
        link: '/skills',
        id: 3
    },
    {
        title: 'Portfolio',
        link: '/portfolio',
        id: 4
    },
    {
        title: 'Contact',
        link: '/contact',
        id: 5
    },
    ])

    return (
        <>
            <div className='main flex justify-between h-20 items-center border px-16 bg-gray-100 '>
                <div className=''>
                    <h1 className='md:text-2xl font-bold'>{brandName}</h1>
                </div>

                <div className='space-x-6'>
                    {/* <a href='' className='hover:text-orange-600'>Home</a>
                    <a href='' className='hover:text-orange-600'>About</a>
                    <a href='' className='hover:text-orange-600'>Skills</a>
                    <a href='' className='hover:text-orange-600'>Portfolio</a>
                    <a href='' className='hover:text-orange-600'>Contact</a> */

                        links.map((link, key) => {
                            return <a href={link.link} key={link.id} > {link.title}</a>
                        })
                    }
                </div>
                <div >
                    <a className=' sm:px-3 sm:py-2  bg-orange-600 rounded-full shadow' href={actionButton.link}>{actionButton.title}</a>
                </div>

            </div >


        </>
    )
}

export default Header 
