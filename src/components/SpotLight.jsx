import React from "react";
import "./SpotLight.css";
import ArrowButton from "./ArrowButton";

const SpotLight = () => {
  const cards = [
    {
      id: 1,
      title: "NEWS ARTICLES",
      type: "text",
      content:
        "Ensuring consistent, affordable, and efficient delivery of energy to meet growing demand.",
      gradient: "linear-gradient(180deg, #2b44ff 0%, #8e2de2 100%)", // Vibrant blue to purple
      gridClass: "card-news",
    },
    {
      id: 2,
      title: "BLOGS",
      type: "image",
      image: "/spotlight/blogs.jpg",
      gridClass: "card-blogs",
    },
    {
      id: 3,
      title: "CASE STUDY",
      type: "image",
      image: "/spotlight/case_study.jpg",
      gridClass: "card-case",
    },
    {
      id: 4,
      title: "REPORT REPORT",
      type: "image",
      image: "/spotlight/report.jpg",
      gridClass: "card-report",
    },
    {
      id: 5,
      title: "SUCCESS STORY",
      type: "image",
      image: "/spotlight/success_story.jpg",
      gridClass: "card-success",
    },
  ];

  return (
    <section className='spotlight-section'>
      <div className='spotlight-container'>
        <div className='spotlight-header'>
          <h2 className='spotlight-title title-highlight'>SpotLight</h2>
          <p className='spotlight-subtitle'>
            SpotLight showcases the people, projects, and ideas driving
            innovation and impact across HPIT
          </p>
        </div>

        <div className='spotlight-content'>
          {/* Graphic - Column 1 */}
          <div className='spotlight-graphic'>
            <img
              src='/spotlight/graphic_purple.svg'
              alt='Abstract graphic'
              className='spotlight-graphic-image'
            />
          </div>

          {/* Map through cards */}
          {cards.map((card) => (
            <div key={card.id} className={`spotlight-card ${card.gridClass}`}>
              <div
                className='spotlight-card-inner'
                style={
                  card.type === "text" ? { background: card.gradient } : {}
                }
              >
                {card.type === "image" && (
                  <>
                    <img
                      src={card.image}
                      alt={card.title}
                      className='spotlight-card-img'
                    />
                    <div className='spotlight-card-overlay'></div>
                  </>
                )}

                <div className='spotlight-card-content'>
                  <div>
                    <h3 className='spotlight-card-label'>{card.title}</h3>
                    {card.type === "text" && (
                      <p className='spotlight-card-description'>{card.content}</p>
                    )}
                  </div>
                  <div className='spotlight-card-button'>
                    <ArrowButton text='Learn more' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotLight;
