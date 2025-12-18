import React from "react";
import "./JoinOurTeam.css";

const JoinOurTeam = () => {
  const cards = [
    {
      id: 1,
      title: "WHY HPIT",
      description: "A place where innovation and growth come together.",
      image: "/join_team/why_hpit.jpg",
    },
    {
      id: 2,
      title: "WHAT WE OFFER",
      description: "Benefits and opportunities to help you excel.",
      image: "/join_team/what_we_offer.jpg",
    },
    {
      id: 3,
      title: "JOB SEARCH",
      description: "Find roles that fit your skills and passion.",
      image: "/join_team/job_search.jpg",
    },
  ];

  return (
    <section className='join-team-section'>
      <div className='join-team-container'>
        {/* Header */}
        <div className='join-team-header'>
          <div className='join-team-header-content'>
            <h2 className='join-team-title'>
              Join <span className='text-efffect'>Our</span> Team
            </h2>
            <p className='join-team-description'>
              We're always looking for passionate, driven individuals to grow
              with us. At our core, we value collaboration, creativity, and a
              commitment to excellence.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='join-team-cards'>
          {cards.map((card) => (
            <div key={card.id} className='join-team-card'>
              <div className='join-team-card-image-wrapper'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='join-team-card-image'
                />
                <div className='join-team-card-overlay'></div>
              </div>
              <div className='join-team-card-content'>
                <h3 className='join-team-card-title'>{card.title}</h3>
                <p className='join-team-card-description'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className='join-team-navigation'>
          <button
            className='join-team-nav-btn join-team-nav-prev'
            aria-label='Previous'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 18L9 12L15 6'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            className='join-team-nav-btn join-team-nav-next'
            aria-label='Next'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 18L15 12L9 6'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
