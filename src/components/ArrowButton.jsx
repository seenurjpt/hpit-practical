import React from "react";

const ArrowButton = ({ text, href = "#", className = "" }) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-0 text-white font-medium cursor-pointer group w-fit ${className}`}
    >
      <span className='text-lg md:text-xl'>{text}</span>

      <div className='relative flex mt-[8px] items-center justify-center w-10 h-10 md:w-14 md:h-14 group-hover:scale-105 transition-transform duration-300'>
        <div className='w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center relative'>
          <img src='/icons/Arrow.svg' alt='arrow' className='w-4 h-4 md:w-5 md:h-5' />
        </div>

        <svg 
          className='absolute inset-0 w-full h-full -rotate-142 pointer-events-none'
          viewBox="0 0 56 56"
        >
          <circle
            cx='28'
            cy='28'
            r='24'
            fill='transparent'
            stroke='#ff3131'
            strokeWidth='2'
            strokeDasharray='220'
            strokeDashoffset='100' // Partial arc
            strokeLinecap='round'
          />
        </svg>
      </div>
    </a>
  );
};

export default ArrowButton;
