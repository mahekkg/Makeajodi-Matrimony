import React from 'react';
import backgroundPage from '../assests/backgroundPage.jpg';
import aryasamaj from '../assests/aryasamaj.jpeg';
import shivMandir from '../assests/shivmandir.jpeg';

const Centers = () => {
  return (
    <section
      id='Centers'
      className='flex flex-col items-center justify-center min-h-screen'
      style={{
        backgroundImage: `url(${backgroundPage})`, // Replace with your image URL
        backgroundSize: 'cover',
      }}
    >
      <h2 className='text-2xl font-bold mt-2 text-[#383838] text-center title'>
        Our Centers
      </h2>

      {/* Images with Captions */}
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
          <img
            src={shivMandir}
            alt='Center 1'
            className='w-full h-auto md:max-w-full rounded-md mb-2'
          />
          <p className='text-center text-[#383838] font-semibold'>
            Shiv Mandir, Beriwala Bagh, Hari Nagar, New Delhi
          </p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
          <img
            src={aryasamaj}
            alt='Center 2'
            className='w-full h-auto md:max-w-full rounded-md mb-2'
          />
          <p className='text-center text-[#383838] font-semibold'>
            Arya Samaj Mandir, Model Basti, Shidhipura, Karol Bagh, New Delhi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Centers;
