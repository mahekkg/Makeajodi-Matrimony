import React from 'react';
import backgroungPage from '../assests/backgroundPage.jpg'

const ContactForm = () => {
  return (
    <section id='contact'
      className='flex items-center justify-center min-h-screen'
      style={{
        backgroundImage: `url(${backgroungPage})`, // Replace with your image URL
        backgroundSize: 'cover',
      }}
    >
      <form className=' p-4 m-5 w-full md:w-2/3 lg:w-1/2 xl:w-1/3'>
        <h2 className='text-2xl font-bold mb-4 text-[#383838] text-center title'>
            Contact Us 
        </h2>

        {/* Name Input with required attribute */}
        <div className='mb-4'>
          <label htmlFor='name' className='block text-[#383838] text-sm font-semibold mb-2'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full p-2 border border-gray-300 rounded-md text-[#383838]'
            required
          />
        </div>

        {/* Email and Phone Number Fields (side by side) with required and pattern attributes */}
        <div className='flex mb-4'>
          <div className='flex-1 mr-2'>
            <label htmlFor='email' className='block text-[#383838] text-sm font-semibold mb-2'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 border border-gray-300 rounded-md text-[#383838]'
              required
            />
          </div>
          <div className='flex-1 ml-2'>
            <label htmlFor='phone' className='block text-[#383838] text-sm font-semibold mb-2'>
              Phone Number:
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              className='w-full p-2 border border-gray-300 rounded-md text-[#383838]'
              pattern='[0-9]{10}' // Validating 10-digit phone number
              required
            />
          </div>
        </div>

        {/* Dropdowns (side by side) */}
        <div className='flex mb-4'>
          <div className='flex-1 mr-2'>
            <label htmlFor='dropdown1' className='block text-[#383838] text-sm font-semibold mb-2'>
              Select Seeking Match *
            </label>
            <select
              id='dropdown1'
              name='dropdown1'
              className='w-full p-2 border border-gray-300 rounded-md text-[#383838]'
              required
            >
              <option value=''>Options</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>
          </div>
          <div className='flex-1 ml-2'>
            <label htmlFor='dropdown2' className='block text-[#383838] text-sm font-semibold mb-2'>
              Select Martial Status *
            </label>
            <select
              id='dropdown2'
              name='dropdown2'
              className='w-full p-2 border border-gray-300 rounded-md text-[#383838]'
              required
            >
              <option value=''>Options</option>
              <option value='single'>Single</option>
              <option value='widow'>Widow</option>
              <option value='divorced'>Divorced</option>
            </select>
          </div>
        </div>

        {/* Register Button */}
        <button
          type='submit'
          className='text-[#FFFFFF] bg-[#A20405] px-2 py-2 w-full rounded hover:bg-[#800809]'
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
