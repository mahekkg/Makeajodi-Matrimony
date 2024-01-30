import React from 'react';
import consult from '../assests/consult.jpg';

const FeatureSection = () => {
  return (
    <div className='bg-[#fff] text-[#333333] py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl md:text-xl lg:text-3xl font-medium tracking-wider uppercase mb-8' style={{ color: '#A20405' }}>
          Personalized Matchmaking Service
        </h2>
        {/* Conditionally render the image for medium and larger screens */}
        
          <img
            src={consult}
            alt='Features'
            className='mx-auto mb-8 md:mb-12 lg:mb-16 h-auto md:h-[25rem] lg:h-[30rem] p-2 rounded-3xl'
          />
        
      </div>
      <div className='container mx-auto flex flex-wrap justify-around'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4 flex items-stretch'>
          <div className='bg-[#f6e6e6] shadow-md rounded-md p-6 mb-8 flex flex-col justify-between'>
            
            {/* ---------------- */}

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            {/* ---------------- */}
            <h3 className='text-xl font-semibold mb-4' style={{ color: '#A20405' }}>
              Connect with Our Highly Experienced Advisor
            </h3>
            <p className='flex-grow'>Communicate directly with our highly experienced advisor who manages your profile.</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4 flex items-stretch'>
          <div className='bg-[#f6e6e6] shadow-md rounded-md p-6 mb-8 flex flex-col justify-between'>
            {/* ---------------- */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            {/* ---------------- */}

            <h3 className='text-xl font-semibold mb-4' style={{ color: '#A20405' }}>
              Communicate Your Preferences
            </h3>
            <p className='flex-grow'>Schedule a consultation to express and discuss your expectations in a prospective partner.</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4 flex items-stretch'>
          <div className='bg-[#f6e6e6] shadow-md rounded-md p-6 mb-8 flex flex-col justify-between'>
            
            {/* ---------------- */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            {/* ---------------- */}
            <h3 className='text-xl font-semibold mb-4' style={{ color: '#A20405' }}>
              Choose from Handpicked Profiles
            </h3>
            <p className='flex-grow'>We carefully shortlist profiles that match your criteria for offline interaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
