import React from 'react';
import DN from '../assests/Nishadeepak.jpeg'
import GR from '../assests/gyanendraRabina.jpeg'
import BB from '../assests/bharatBharkha.jpeg'

const Customers = () => {
  return (
    <div id='Customers' className="timeline-container">
      <h1>MakeAJodi's Happy Clients</h1>
      <p className='text-lg md:text-lg lg:text-xl mb-8 '>If like thousands of couples, you too met your one-and-only on <a href="http://makeajodi.com/" target="_blank" rel="noopener noreferrer">Makeajodi</a> , we'd love to hear all about it. It's our favorite part of what we do!  </p>

      <ul className="timeline">
        <li style={{ '--accent-color': '#FBCA3E' }}>
          <div className="image" style={{ backgroundImage: `url(${GR})` }}></div>
          <div className="title">
            <p>Gyanendra & Rabina</p>
          </div>
          <div className="descr">
            First of all, I want to thank the entire <a href="http://makeajodi.com/" target="_blank" rel="noopener noreferrer">Makeajodi</a> team for making me meet my soulmate. We both liked each other’s profile on MakeAJodi, and that’s how our conversation started. We both got happily married on 27/11/2022. Credit goes to you guys.
          </div>
        </li>
        {/* ---------------------------------------- */}
        <li style={{ '--accent-color': '#41516C' }}>
          <div className="image" style={{ backgroundImage: `url(${BB})` }}></div>
          <div className="title">
            <p>Bharat & Barkha</p>
          </div>
          <div className="descr">
            We met through <a href="http://makeajodi.com/" target="_blank" rel="noopener noreferrer">Makeajodi</a>. Recently, we celebrated our 1st anniversary. Both families are also happy and share a special bond. Thanks, <a href="http://makeajodi.com/" target="_blank" rel="noopener noreferrer">Makeajodi</a> personalized team.
          </div>
        </li>
        {/* ---------------------------------------- */}
        <li style={{ '--accent-color': '#41516C' }}>
          <div className="image" style={{ backgroundImage: `url(${DN})` }}></div>
          <div className="title">
            <p>Deepak & Nisha</p>
          </div>
          <div className="descr">
            Since I have been searching for the right match for the last 8 months and I was lucky to find it with the help of <a href="http://makeajodi.com/" target="_blank" rel="noopener noreferrer">Makeajodi</a>, I like to thank <a href="http://makeajodi.com/" target="_blank" rel="noopener noreferrer">Makeajodi</a> for meeting me with Nisha.
          </div>
        </li>
        {/* Add more timeline items as needed */}
      </ul>

    </div>
  );
};

export default Customers;
