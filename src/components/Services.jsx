import React, { useState } from 'react'

function Services() {

    const [services, setServices] = useState([
        {
            id: 1,
            icon: 'fa-brands fa-internet-explorer',
            title: 'Web Development',
            description: `'Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatum harum reiciendis recusandae porro unde facilis ut pariatur ea quam. Voluptate.'`,
            actionButton: {
                title: "check",
                link: "#"
            }

        },
        {
            id: 2,
            icon: 'fa-brands fa-android',
            title: 'Android Development',
            description: `'Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatum harum reiciendis recusandae porro unde facilis ut pariatur ea quam. Voluptate.'`,
            actionButton: {
                title: "check",
                link: "#"
            }
        },
        {
            id: 3,
            icon: '',
            title: 'Backend Development',
            description: `'Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatum harum reiciendis recusandae porro unde facilis ut pariatur ea quam. Voluptate.'`,
            actionButton: {
                title: "check",
                link: "#"
            }
        }
    ])

    return (
        <>
            <div className="main-cotainer py-14">
                <h1 className='text-4xl font-bold underline text-center'>
                    MyService
                </h1>
                <div className='services-container flex justify-between space-x-3 px-10 mt-12'>


                    {
                        services.map((service, key) => {
                            return (
                                <div className='cursor-pointer hover:bg-gray-200 service1 p-5 text-center bg-slate-200 space-y-3 shadow-xl rounded-lg'>
                                    <i className={`text-4xl ${services.icon}`}></i>
                                    <h1 className='text-3xl'>{service.title}</h1>
                                    <p>{service.description}</p>
                                    <button className='bg-orange-600 px-3 py-2 rounded-full shadow-lg'>
                                        <a href={service.actionButton.link}>{service.actionButton.title}</a>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Services
