// Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Modal from 'react-modal';
import Form from './Elements/Form';
import logo from '../assests/logo.png';

export default function Navbar() {
    const navItem = ['About Us', 'Packages', 'Customers', 'FAQ', 'Contact', 'Centers'];
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Social Media and Main Navbar Section */}
            <div className='fixed w-full h-[70px] flex justify-between items-center px-6 bg-[#F9F4F4] z-50 mt-[35px]'>

                <div className='mr-auto'>
                    {/* Wrap the img tag with Link */}
                    <Link to="Home" spy={true} smooth={true} duration={1000}>
                        <img src={logo} alt="Logo" className="h-[40px] cursor-pointer" />
                    </Link>
                </div>

                <div className='text-xl font-normal hidden md:flex space-x-6 shadow-[#040c16] ml-auto'>
                    <ul className='flex space-x-6 '>
                        {navItem.map((item, index) => (
                            <li key={index} className='cursor-pointer'>
                                <Link to={item} spy={true} smooth={true} duration={500}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <button type='button'
                        onClick={openModal} className='bg-[#95090B] text-[#FFFFFF] px-4 py-2 cursor-pointer rounded hover:bg-[#800809] m-6'>
                        Register Now
                    </button>
                </div>

                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#F9F4F4] text-black flex flex-col justify-center items-center'}>
                    <ul>
                        {navItem.map((item, index) => (
                            <li key={index} className='py-6 text-2xl cursor-pointer'>
                                <Link onClick={handleClick} to={item} spy={true} smooth={true} duration={500}>
                                    {item}
                                </Link>
                            </li>
                        ))}

                        {/* Register Now Button for Mobile */}
                        <li className='py-6 text-2xl'>
                            <button
                                type='button'
                                onClick={openModal}
                                className='flex justify-between text-[#FFFFFF] bg-[#A20405] px-2 py-2 mt-5 mb-14 rounded hover:bg-[#800809]'
                            >
                                Register Now
                            </button>
                        </li>
                    </ul>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel='Registration Modal'
                        className='Modal  '
                        overlayClassName='Overlay'
                    >
                        <div className='bg-[#A20405] p-4'>
                            <form className=''>
                                {/* ... (your registration form) */}
                                <Form />
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
}
