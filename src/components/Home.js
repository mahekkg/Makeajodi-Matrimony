import React, { useState } from 'react';
import backgroundHome from '../assests/backgroundHome.jpeg'
import Form from './Elements/Form';
import Modal from 'react-modal';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <section className="hero" style={{ backgroundImage: `url(${backgroundHome})` }}>
            <div className='absolute top-0 w-full h-full p-10 mt-[] flex flex-col md:flex-row justify-center text-white  '>

                {/* Left Content */}
                <div className='md:w-1/2 max-w-[600px] m-auto  z-10 text-left overflow-y-auto'>
                    <p className='font-bold text-3xl md:text-4xl mt-10 drop-shadow-2xl text-left'>Best Matrimony for High Class Family's Rishtey</p>
                    <p className='max-w-[600px] drop-shadow-2xl py-4 text-xl '>
                        MakeAJodi is a personalized matchmaking services for Punjabi, Agarwal, Brahmin, Rajput and Sikh Rishtey (brides & grooms). MakeAJodi have been putting their heart and soul in searching for the most suitable match for every match seeker.
                    </p>
                    <button
                        type='button'
                        onClick={openModal}
                        className='flex justify-between text-[#FFFFFF] bg-[#A20405] px-2 py-2 mt-5 mb-14 rounded hover:bg-[#800809]'
                    >
                        Register Now
                    </button>
                </div>


                {/* Right Form (Hidden on smaller screens) */}
                <div className='md:w-1/3 max-w-[1400px] m-auto p-4 hidden md:block z-10'>
                    <Form />
                </div>
            </div>
            <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Registration Modal'
        className='Modal  '
        overlayClassName='Overlay'
      >
        <div className='bg-[#A20405] px-1 py-4'>
          <form className=''>
            {/* ... (your registration form) */}
            <Form/>
            
            {/* <button
              type='button'
              className='bg-[#FFFFFF] text-[#A20405] px-2 py-2 w-full rounded'
              onClick={closeModal}
            >
              Close
            </button> */}
          </form>
        </div>
      </Modal>
        </section>
    );
};

export default Home;