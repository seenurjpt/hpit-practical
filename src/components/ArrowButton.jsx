import React from "react";

const ArrowButton = ({ text, href = "#", className = "" }) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-0 text-white font-medium cursor-pointer group w-fit ${className}`}
    >
      <span className='text-xl'>{text}</span>

      <div className='relative flex mt-[8px]  items-center justify-center w-14 h-14 group-hover:scale-105 transition-transform duration-300'>
        <div className='w-12 h-12 rounded-full flex items-center justify-center relative'>
          <img src='/icons/Arrow.svg' alt='arrow' className='w-5 h-5' />
        </div>

        <svg className='absolute inset-0 w-full h-full -rotate-142 pointer-events-none'>
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
