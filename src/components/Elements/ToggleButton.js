import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarker } from 'react-icons/fa';

const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Handle the click for each option, e.g., open a new link
    switch (option) {
      case 'whatsapp':
        window.open(`https://wa.me/+${+919599018646}`);
        break;
      case 'call':
        window.open(`tel:+${+919599018646}`);
        break;
      case 'maps':
        window.open('https://www.google.com/maps/place/Make+A+Jodi/@28.6579111,77.19962,17z/data=!3m2!4b1!5s0x390cfd7b165bd8f7:0x44fea3c83db15032!4m6!3m5!1s0xc7b8e4f503a6c7:0xcefbc18c06bb66e4!8m2!3d28.6579064!4d77.2021949!16s%2Fg%2F11vf29cn49?entry=ttu', '_blank');
        break;
      // Add more cases for additional options
      default:
        break;
    }
    // Close the options after clicking
    setIsOpen(false);
  };

  const handleDocumentClick = (event) => {
    // Close options if a click occurs outside the ToggleButton component
    if (!event.target.closest('.fixed.bottom-6.right-6')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add click event listener to the document
    document.addEventListener('click', handleDocumentClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className={`bg-[#a20405] text-white p-4 rounded-full focus:outline-none ${
          isOpen ? 'hidden' : ''
        }`}
        onClick={toggleOptions}
      >
        +
      </button>
      <div className={`${isOpen ? '' : 'hidden'} flex flex-col gap-4 mt-2`}>
        <button
          className="bg-green-500 text-white p-2 rounded-md"
          onClick={() => handleOptionClick('whatsapp')}
        >
          <FaWhatsapp />
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleOptionClick('call')}
        >
          <FaPhone />
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={() => handleOptionClick('maps')}
        >
          <FaMapMarker />
        </button>
        {/* Add more buttons for additional options */}
      </div>
    </div>
  );
};

export default ToggleButton;
