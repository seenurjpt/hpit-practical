import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider data - each slide can have different text in the future
  const slides = [
    {
      id: 1,
      image: '/slider/1.jpg',
      title: 'Innovation',
      subtitle: 'At Every Step',
    },
    {
      id: 2,
      image: '/slider/2.jpg',
      title: 'Innovation',
      subtitle: 'At Every Step',
    },
    {
      id: 3,
      image: '/slider/3.jpg',
      title: 'Innovation',
      subtitle: 'At Every Step',
    },
    {
      id: 4,
      image: '/slider/4.jpg',
      title: 'Innovation',
      subtitle: 'At Every Step',
    },
    {
      id: 5,
      image: '/slider/5.jpg',
      title: 'Innovation',
      subtitle: 'At Every Step',
    },
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {/* Slides Container */}
        <div
          className="hero-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="hero-slide">
              <div
                className="hero-slide-image"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay"></div>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="hero-nav-btn hero-nav-prev"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="hero-nav-btn hero-nav-next"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default HeroSection;

