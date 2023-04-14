import React from 'react';
import cover from '../../assets/img/topCover.jpg'

const About = () => {
    return (
        <div>
            <figure className='h-72 bg-cover bg-no-repeat bg-center flex justify-center items-center text-slate-50' style={{backgroundImage: `url(${cover})`}}>
                <h2 className='font-bold text-4xl py-6 px-8 bg-slate-900 rounded-lg'>About Us</h2>
            </figure>
        </div>
    );
};

export default About;