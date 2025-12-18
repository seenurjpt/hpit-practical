import React from "react";
import "./LetsMakeGreat.css";
import ArrowButton from "./ArrowButton";

const LetsMakeGreat = () => {
  return (
    <section className='lets-make-great-section'>
      <div className='lets-make-great-container'>
        {/* Background Image */}
        <div className='lets-make-great-image-wrapper'>
          <img
            src='/something_great/something_great.jpg'
            alt='Team collaboration'
            className='lets-make-great-image'
          />
        </div>

        {/* Text Content Overlay */}
        <div className='lets-make-great-text-content'>
          <h2 className='lets-make-great-title'>
            Let's Make Something
            <br />
            Great Together!
          </h2>
          <div className='lets-make-great-cta'>
            <ArrowButton text='Connect HPIT' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsMakeGreat;
