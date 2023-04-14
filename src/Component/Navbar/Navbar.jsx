import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navbar = [
        {
          label: 'Home',
          path: '/'
        },
        {
          label: 'About',
          path: '/about'
        },
        {
          label: 'Course',
          path: '/course'
        },
        {
          label: 'Contact',
          path: '/contact'
        },
        {
          label: 'Signup',
          path: '/signup'
        }
      ];
      
    return (
        <nav className='bg-slate-800 py-3 text-slate-50 text-lg'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 justify-between'>
                <div>
                    <h2 className='text-3xl font-bold'>Educative</h2>
                </div>
                <div className='flex items-center justify-center'>
                    <ul className='flex gap-5'>
                        {
                            navbar.map((nav, ind) => <li key={ind}><Link to={nav.path}>{nav.label}</Link></li>)
                        }
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;