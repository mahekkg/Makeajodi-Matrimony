import React from 'react';
import { FaWhatsapp, FaPhone, FaMapMarker } from 'react-icons/fa';
const ToggleButton = () => {
  const handleOptionClick = (option) => {
    switch (option) {
      case 'whatsapp':
        window.location.href = 'https://wa.me/+919599018647';
        break;
      case 'call':
        window.location.href = 'tel:+919599018647';
        break;
      case 'maps':
        const mapLink = document.createElement('a');
        mapLink.href = 'https://www.google.com/maps/place/Make+A+Jodi/@28.6579111,77.19962,17z/data=!3m2!4b1!5s0x390cfd7b165bd8f7:0x44fea3c83db15032!4m6!3m5!1s0xc7b8e4f503a6c7:0xcefbc18c06bb66e4!8m2!3d28.6579064!4d77.2021949!16s%2Fg%2F11vf29cn49?entry=ttu';
        mapLink.target = '_blank';
        mapLink.rel = 'noopener noreferrer';
        mapLink.click();
        break;
      // Add more cases for additional options
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col gap-4 mt-1">
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
