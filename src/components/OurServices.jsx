import React from "react";
import "./OurServices.css";
import ArrowButton from "./ArrowButton";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description:
        "Find your dream property with our expert local guidance.",
      image: "/our_services/ai.jpg",
      textPosition: "left",
    },
    {
      id: 2,
      title: "Cloud",
      description:
        "A cloud is a visible mass of tiny water droplets or ice crystals suspended in the Earth's atmosphere.",
      image: "/our_services/cloud.jpg",
      textPosition: "right",
    },
    {
      id: 3,
      title: "Cyber",
      description:
        "The word cyber relates to computers, digital technology, networks, and virtual systems.",
      image: "/our_services/cyber.jpg",
      textPosition: "left",
    },
    {
      id: 4,
      title: "Quantum",
      description:
        "The word quantum comes from physics and refers to the smallest possible unit of energy or matter.",
      image: "/our_services/quantum.jpg",
      textPosition: "right",
    },
    {
      id: 5,
      title: "5G Technology",
      description:
        "5G Technology is the latest standard for mobile networks, designed to deliver ultra-fast internet speeds and increase device connectivity.",
      image: "/our_services/5g_tech.jpg",
      textPosition: "left",
    },
  ];

  return (
    <section className="our-services-section">
      <div className="our-services-container">
        {/* Header */}
        <div className="our-services-header">
          <h2 className="our-services-title text-efffect">Our Services</h2>
          <p className="our-services-description">
            These case studies highlight the challenges our clients faced, the
            tailored solutions we provided, and the measurable results achieved.
          </p>
        </div>

        {/* Services List */}
        <div className="our-services-list">
          {services.map((service) => (
            <div
              key={service.id}
              className={`our-service-item our-service-item-${service.textPosition}`}
            >
              <div className="our-service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="our-service-image"
                />
                <div className="our-service-overlay"></div>
              </div>
              <div
                className={`our-service-content our-service-content-${service.textPosition}`}
              >
                <h3 className="our-service-title text-efffect">{service.title}</h3>
                <p className="our-service-description">{service.description}</p>
                <ArrowButton text="View Case Study" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

