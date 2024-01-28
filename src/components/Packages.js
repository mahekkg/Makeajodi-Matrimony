import React, { useState } from 'react';
import Modal from 'react-modal';
import Form from './Elements/Form';

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='Packages'>
      <div className='relative flex flex-col bg-[#f6e6e6]'>
        <div className='container mx-auto text-[#383838] text-center z-10 my-8 md:my-16 lg:my-14 px-4 md:px-8 lg:px-16'>
          <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-4'>MakeAJodi Service Packages</h2>
          <p className='text-lg md:text-lg lg:text-xl mb-8 '>
            Elevate your membership to premium status and unlock the unparalleled advantages of seamless connections. Upgrade now to enjoy an enhanced experience with exclusive features that amplify your networking possibilities.
          </p>
        </div>

        <div className="container mx-auto flex flex-wrap justify-around text-white">
          <div className="w-full md:w-1/2 lg:w-1/5 p-4 lg:ml-[20%] ">
            <div className="bg-[#a20405] shadow-md rounded-md h-5/6 p-6  mb-8 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold mb-4">Gold Plan</h2>
              <ul className="list-disc pl-5 mb-4 leading-6 l:leading-8">
                <li>2-3 profiles in a week</li>
                <li>Mid Income Families</li>
                <li>6 Months Validity</li>
                <li>Full visible profiles</li>
                <li>100% verified families</li>
                <li>Boost your profile</li>
              </ul>
              <button
                type='button'
                onClick={openModal}
                className='flex justify-between text-[#a20405] bg-[#f6e6e6] px-2 py-2 rounded'
              >
                Upgrade Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5 p-4 lg:mr-[20%] ">
            <div className="bg-[#a20405] shadow-md rounded-md h-5/6 p-6 mb-8 flex flex-col  items-center">
              <h2 className="text-xl font-semibold mb-4">Platinum Plan</h2>
              <ul className="list-disc pl-5 mb-4 leading-6 l:leading-8">
                <li>Relationship Manager</li>
                <li>2-3 profiles in a week</li>
                <li>Upper Class Family </li>
                <li>6 Months Validity</li>
              </ul>
              <button
                type='button'
                onClick={openModal}
                className='flex justify-between text-[#a20405] bg-[#f6e6e6] px-2 py-2 mt-10  rounded '
              >
                Upgrade Now
              </button>
            </div>
          </div>
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
          <Form />
        </div>
      </Modal>
    </div>
  );
};

export default Packages;
