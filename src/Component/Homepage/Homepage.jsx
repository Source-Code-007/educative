import React from 'react';
import bannerImg from '../../assets/img/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Homepage = () => {
    let services = [
        {
            course: 'Popular Course',
            description: 'Lorem ipsum dolor sit, amet consectetur elit.'
        },
        {
            course: 'Modern Library',
            description: 'Lorem ipsum dolor sit, amet consectetur elit.'
        },
        {
            course: 'Qualified Teacher',
            description: 'Lorem ipsum dolor sit, amet consectetur elit.'
        },
        {
            course: 'Education is Power',
            description: 'Lorem ipsum dolor sit, amet consectetur elit.'
        },
        {
            course: 'Online Education',
            description: 'Lorem ipsum dolor sit, amet consectetur elit.'
        },
        {
            course: 'Educative Platform',
            description: 'Lorem ipsum dolor sit, amet consectetur elit.'
        },
    ]
    return (
        <>
        {/* Banner */}
            <section className='h-screen bg-no-repeat bg-cover bg-slate-800 bg-blend-overlay flex justify-center items-center' style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className='w-3/6 mx-auto space-y-6 text-center text-slate-50'>
                    <h2 className='font-bold text-5xl'>Best University In This Region Join With Us Today.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempore laudantium pariatur ipsa delectus odit sequi dolor.</p>
                    <button className='rounded-lg py-3 px-5 font-bold text-xl bg-emerald-500'>Learn More</button>
                </div>
            </section>
            {/* Services */}
            <section className='py-12 space-y-4 text-lg max-w-7xl mx-auto'>
                <h3 className='font-bold text-2xl w-4/6 xl:w-3/6 mx-auto text-center'>Checkout Our Features To Know Why We Are Best In This Business</h3>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        services.map((service, ind) => {
                            return <div key={ind} className='rounded-lg shadow-lg py-10 px-8 text-center'>
                                <span className='text-emerald-500 text-4xl'> <FontAwesomeIcon icon={faCoffee} /> </span>
                                <h2 className='font-bold'>{service.course}</h2>
                                <h4 className='text-slate-800'>{service.description}</h4>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Homepage;