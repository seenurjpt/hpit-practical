import React, { useState } from "react";
import "./LatestInsights.css";
import ArrowButton from "./ArrowButton";

const LatestInsights = () => {
  const [activeFilter, setActiveFilter] = useState("Event");

  const filters = ["Event", "Press Release", "Latest News"];

  const insights = [
    {
      id: 1,
      title: "DIGITAL SUMMIT",
      description: "Shaping the future with innovation and collaboration.",
      image: "/insights/digit_ai_summit.jpg",
      category: "Event",
    },
    {
      id: 2,
      title: "CYBER FORM",
      description: "Insights on security and resilience from global experts.",
      image: "/insights/cyber_form.jpg",
      category: "Event",
    },
    {
      id: 3,
      title: "TECH EXPO",
      description: "Showcasing trends and breakthroughs across industries.",
      image: "/insights/tech_expo.jpg",
      category: "Event",
    },
  ];

  const filteredInsights = insights.filter(
    (insight) => insight.category === activeFilter
  );

  return (
    <section className='latest-insights-section'>
      <div className='latest-insights-container'>
        {/* Header */}
        <div className='latest-insights-header'>
          <div className='latest-insights-header-content'>
            <h2 className='latest-insights-title'>
              Explore Our <span className='title-highlight'>Latest</span>{" "}
              Insights
            </h2>
            <p className='latest-insights-description'>
              Explore our latest insights to stay ahead of the curve with fresh
              perspectives, expert analysis, and emerging trends across
              industries.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className='latest-insights-filters'>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`latest-insights-filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className='latest-insights-cards'>
          {filteredInsights.map((insight) => (
            <div key={insight.id} className='latest-insights-card'>
              <div className='latest-insights-card-image-wrapper'>
                <img
                  src={insight.image}
                  alt={insight.title}
                  className='latest-insights-card-image'
                />
                <div className='latest-insights-card-overlay'></div>
              </div>
              <div className='latest-insights-card-content'>
                <h3 className='latest-insights-card-title'>{insight.title}</h3>
                <p className='latest-insights-card-description'>
                  {insight.description}
                </p>
                <div className='latest-insights-card-button'>
                  <ArrowButton text='Learn more' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
