// FAQSection.js
import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Is there any age limit on this site?',
      answer: 'There is no age limit on MakeAJodi; love knows no boundaries, and we welcome individuals of all ages to find their perfect match on our platform.',
    },
    {
      question: 'Does an online matrimonial website useful?',
      answer:'Yes, online matrimonial websites are useful as they provide a convenient platform for individuals to connect, explore with MakeAJodi and meet with potential matches, and facilitate the process of finding a life partner based on preferences and compatibility.'
    },
    {
      question: 'Is our data safe?',
      answer:
        'MakeAJodi prioritizes the security and privacy of your data, implementing robust measures to ensure its safety. Your information is handled with utmost confidentiality, and the platform employs encryption and other security protocols to safeguard your data from unauthorized access.',
    },
    {
      question: 'Is there any registration time limit?',
      answer:
        'There is no registration time limit on MakeAJodi.com; individuals can register at their convenience to begin their journey in finding a compatible life partner.',
    },
    {
      question: 'Is this site best for marriage?',
      answer:
        'MakeAJodi.com strives to be a reliable platform for individuals seeking marriage by providing a convenient and secure space to connect with potential life partners. However, the "best" site for marriage depends on individual preferences and experiences. It\'s advisable to explore the features and user reviews to determine if MakeAJodi aligns with your expectations and requirements for a matrimonial platform.',
    },
    {
      question: 'Are there any registration charges on this site?',
      answer:
        'For the most accurate and up-to-date information regarding registration charges on MakeAJodi.com, please contact their customer support.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id='FAQ'>
      <section className="py-8 md:px-40 px-8">
        <div className="container mx-auto pb-10">
          <h2 className="text-4xl md:text-3xl font-bold mb-8 text-center text-[#a20405]">FAQs of Best Matrimonial Services in Delhi </h2>
          <div className="grid gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded p-3 cursor-pointer ${
                  openIndex === index ? 'bg-[#a20405] text-white' : 'bg-white text-[#383838]'
                }`}
                onClick={() => handleToggle(index)}
                style={{
                  maxHeight: openIndex === index ? '1000px' : '100px',
                  overflow: 'hidden',
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && <p className="text-white mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
