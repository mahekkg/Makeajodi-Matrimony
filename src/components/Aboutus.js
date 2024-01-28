import React, { useState } from 'react';
import Carousel from './Carousel';
import Modal from 'react-modal';
import Form from './Elements/Form';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Aboutus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='About Us'>
      <div className='container mx-auto p-10 mt-8 text-[#383838]'>
        <div className='text-center'>
          <h1 className='md:text-4xl text-2xl font-bold mb-4'>Best Matrimony in Delhi/NCR</h1>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <p className='text-center text-l md:text-xl '>
            Welcome to MakeAJodi Services. India's most esteemed Matchmaker provides 360-degree solutions with an enormous
            number of profiles across diverse communities. Since 2020, MakeAJodi has been working religiously in fabricating
            the unbreakable bond for every match seeker. All the profiles are handled very sensitively with proper analysis of
            requirements between two individuals and their families. The enthusiast team takes immense care that all the profiles
            are 100% genuine to make perfect amalgamation and successfully convert. Our online matrimonial services serve a hefty
            marshaling of decent people with different interests, family backgrounds, and job profiles. We strive for perfectionism
            to cultivate the relationship in a bond of a lifetime.
          </p>
        </div>
        <Carousel />
      </div>
      <div className='flex justify-center'>
        <button
          type='button'
          onClick={openModal}
          className='flex justify-between text-[#FFFFFF] bg-[#A20405] px-2 py-2 mt-5 mb-14 rounded hover:bg-[#800809]'
        >
          Register Now
        </button>
      </div>

      {/* Modal */}
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
            
            
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Aboutus;
