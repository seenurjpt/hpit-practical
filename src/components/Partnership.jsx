import React from "react";
import "./Partnership.css";
import ArrowButton from "./ArrowButton";

const Partnership = () => {
  return (
    <section className="partnership-section">
      <div className="partnership-container">
        <div className="partnership-content">
          {/* Left Side - Image with Decorative Elements */}
          <div className="partnership-image-wrapper">
            <img
              src="/partnership/partnership.jpg"
              alt="Partnership handshake"
              className="partnership-image"
            />
            {/* Decorative Elements */}
            <div className="partnership-decorative-dots">
              <img
                src="/partnership/dots.svg"
                alt="Decorative dots"
                className="partnership-dots"
              />
            </div>
            <div className="partnership-decorative-chevrons">
              <img
                src="/partnership/zigzag_lines.svg"
                alt="Decorative chevrons"
                className="partnership-chevrons"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="partnership-text-content">
            <h2 className="partnership-title text-efffect">
              The Power of{" "}
              <span className="">Partnership</span>
            </h2>
            <p className="partnership-description">
              True success is built on strong collaboration. By working closely
              with our clients, we turn shared goals into meaningful outcomes.
            </p>
            <ArrowButton text="Know More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;

