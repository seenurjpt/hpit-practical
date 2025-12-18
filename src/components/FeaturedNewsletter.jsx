import React, { useState } from "react";
import "./FeaturedNewsletter.css";

const FeaturedNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className="featured-newsletter-section">
      <div className="featured-newsletter-container">
        {/* Section Title */}
        <h2 className="featured-newsletter-section-title text-efffect">Featured Newsletter</h2>

        <div className="featured-newsletter-content">
          {/* Left Side - Image with Decorative Elements */}
          <div className="featured-newsletter-image-wrapper">
            <img
              src="/newsletter/news_letter.jpg"
              alt="Business professionals at conference"
              className="featured-newsletter-image"
            />
            {/* Decorative Elements */}
            <div className="featured-newsletter-decorative-dots">
              <img
                src="/partnership/dots.svg"
                alt="Decorative dots"
                className="featured-newsletter-dots"
              />
            </div>
            <div className="featured-newsletter-decorative-chevrons">
              <svg
                width="24"
                height="40"
                viewBox="0 0 24 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8L8 12L12 16"
                  stroke="#FC0000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20L8 24L12 28"
                  stroke="#FC0000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Side - Text Content and Form */}
          <div className="featured-newsletter-text-content">
            <h3 className="featured-newsletter-title">
              Stay Ahead with the HPIT Edge
            </h3>
            <p className="featured-newsletter-description">
              Get the latest updates from HPIT, including expert perspectives,
              technology breakthroughs, and news that keeps you at the forefront
              of digital transformation.
            </p>
            <form
              className="featured-newsletter-form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                className="featured-newsletter-input"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="featured-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsletter;

