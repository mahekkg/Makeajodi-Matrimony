import React from 'react';

const Packages = () => {
  return (
    <div id='Packages'>
      <div className='relative flex flex-col bg-[#f6e6e6]'>
        <div className='container mx-auto text-[#383838] text-center z-10 my-8 md:my-16 lg:my-14 px-4 md:px-8 lg:px-16'>
          <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold mb-4'>MakeAJodi Service Packages</h2>
          <p className='text-lg md:text-lg lg:text-xl mb-8 '>
            Elevate your membership to premium status and unlock the unparalleled advantages of seamless connections. Upgrade now to enjoy an enhanced experience with exclusive features that amplify your networking possibilities. </p>
        </div>
        <div className="container mx-auto flex flex-wrap justify-around text-white">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
            <div className="bg-[#a20405] shadow-md rounded-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Gold Plan</h2>
              <ul className="list-disc pl-5 mb-4 leading-6 l:leading-8">
                <li>Receive 2-3 curated profiles weekly</li>
                <li>Tailored for mid-income families</li>
                <li>Enjoy a generous 6-month validity period</li>
                <li>Showcase your full profile for maximum visibility</li>
                <li>Rest easy with 100% verified families</li>
                <li>Boost your profile for enhanced visibility</li>
                {/* <li></li> */}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-[#a20405] shadow-md rounded-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Platinum Plan</h2>
              <ul className="list-disc pl-5 mb-4 leading-6 l:leading-8">
                <li>Assigned relationship manager for personalized assistance</li>
                <li>Access 2-3 exclusive profiles weekly</li>
                <li>Ideal for upper-class families</li>
                <li>Benefit from a substantial 6-month validity period</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
