import React from 'react';
// import packageImage from '../assests/packageBg.jpeg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook,  faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const StickyNavbar = () => {
    return (
        <>
            {/* Contact Section */}
            <div className='fixed w-full h-[35px] flex justify-between items-center px-8 bg-[#A20405] text-white z-50 '>
                {/* Connect with us div hidden on narrow screens */}
                <div className=' md:flex'>
                    {/* Add your contact number here */}
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-nav">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>

                        +91 9599018646 / +91 9599018647 </p>
                </div>

                <div className='md:flex items-center hidden'>
                    <a href='mailto:info@makeajodi.com' className='cursor-pointer'>
                        <p>info@makeajodi.com</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default StickyNavbar;

