// FAQSection.js
import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Is there any age limit on this site?',
      answer: '----',
    },
    {
      question: 'Does an online matrimonial website useful?',
      answer:'----'
    },
    {
      question: 'Is our data safe?',
      answer:
        '----',
    },
    {
      question: 'Is there any registration time limit?',
      answer:
        '----',
    },
    {
      question: 'Is this site best for marriage?',
      answer:
        '----',
    },
    {
      question: 'What is the maximum number of interests, can send per day?',
      answer:
        '----',
    },
    {
      question: 'Are there any registration charges on this site?',
      answer:
        '----',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id='FAQ'>
    <section  className="py-8 md:px-40 px-8">
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
