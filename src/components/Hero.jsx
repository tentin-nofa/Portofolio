import React from 'react'
import profilePhoto from '../assets/profile-photo.jpg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="section hero-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Cybersecurity · UI/UX Design · Developer</p>
            <h1 className="hero-name">
              Tentin Nofa
              <br />
              Tuzika
            </h1>
            <svg
              className="hero-shield"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <p className="hero-desc">
              Informatics student at President University. I bridge the gap
              between robust software development and offensive/defensive
              cybersecurity intuition to build secure digital infrastructures.
            </p>
            <a href="/cv.pdf" download className="btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              Download CV
            </a>
          </div>
          <div className="hero-visual">
            <div className="orb-ring">
              <div className="orb-core">
                <img
                  src={profilePhoto}
                  alt="Tentin Nofa Tuzika"
                  className="profile-photo-img"
                />
              </div>
              <div className="orb-badge top">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="orb-badge bottom">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="5" cy="18" r="2" />
                  <circle cx="19" cy="18" r="2" />
                  <path d="M12 8v5M12 13l-5 3M12 13l5 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}