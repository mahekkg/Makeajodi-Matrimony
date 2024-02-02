import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import Modal from 'react-modal';
import PrivacyPolicy from '../components/PrivacyPolicy'

Modal.setAppElement('#root'); // Set the root element for accessibility

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-[#272727] text-white p-3">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">

        {/* Disclaimer Section */}
        <div className="footer-section mb-2 md:mb-0 cursor-pointer">
          <Link to={PrivacyPolicy} onClick={openModal} className="text-l text-white">Privacy Policy</Link>
        </div>

        {/* Terms and Conditions Section */}
        <div className="footer-section mb-2 md:mb-0">
          <p className="text-l text-white">Terms and Conditions</p>
        </div>

        {/* Social Media Icons Section */}
        <div className="md:flex items-center">
        
          <a href="https://www.facebook.com/makeajodi" target="_blank" rel="noopener noreferrer" className='text-xl mr-4 p-2 cursor-pointer'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/makeajodi/" target="_blank" rel="noopener noreferrer" className='text-xl mr-4 p-2 cursor-pointer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* <a href="//" target="_blank" rel="noopener noreferrer" className='text-xl mr-4 p-2 cursor-pointer'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="//" target="_blank" rel="noopener noreferrer" className='text-xl mr-4 p-2 cursor-pointer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a> */}
        </div>

        {/* Copyright Section */}
        <div className="footer-section">
          <p className="text-l">Copyright © 2021 All rights reserved.</p>
        </div>

      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Registration Modal'
        className='Modal-privacy  '
        overlayClassName='Overlay'
      >
        <div className='bg-[#A20405] px-1 py-4'>
          
            <PrivacyPolicy/>            
            
          </div>
      </Modal>

    </footer>
  );
};

export default Footer;
