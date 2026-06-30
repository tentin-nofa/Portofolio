import React from 'react'

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
                <svg viewBox="0 0 160 200" fill="none">
                  {/* body */}
                  <ellipse cx="80" cy="150" rx="42" ry="38" fill="#1c1c22" stroke="#ec5ec0" strokeWidth="2" />
                  <rect x="68" y="135" width="24" height="20" rx="6" fill="#ec5ec0" opacity="0.85" />

                  {/* right arm - peace sign (static) */}
                  <g>
                    <path d="M118 138 Q140 120 134 96" stroke="#ec5ec0" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <path d="M134 96 l-4 -14 M134 96 l8 -12" stroke="#ec5ec0" strokeWidth="6" strokeLinecap="round" />
                  </g>

                  {/* left arm - waving */}
                  <g className="robot-wave-arm" style={{ transformOrigin: '44px 138px' }}>
                    <path d="M44 138 Q22 118 28 92" stroke="#ec5ec0" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <g transform="translate(28,92)">
                      <path d="M0 0 l-3 -12 M0 0 l3 -13 M0 0 l8 -10 M0 0 l11 -5" stroke="#ec5ec0" strokeWidth="5" strokeLinecap="round" />
                    </g>
                  </g>

                  {/* head */}
                  <g>
                    <path d="M40 70 Q40 16 80 16 Q120 16 120 70 L120 90 Q120 108 80 108 Q40 108 40 90 Z" fill="#1c1c22" stroke="#ec5ec0" strokeWidth="2" />
                    <circle cx="34" cy="56" r="10" fill="#1c1c22" stroke="#ec5ec0" strokeWidth="2" />
                    <circle cx="126" cy="56" r="10" fill="#1c1c22" stroke="#ec5ec0" strokeWidth="2" />
                    <rect x="50" y="38" width="60" height="42" rx="10" fill="#0a0a0d" />
                    <circle cx="68" cy="58" r="3.5" fill="#ec5ec0" />
                    <circle cx="92" cy="58" r="3.5" fill="#ec5ec0" />
                    <path d="M68 70 Q80 78 92 70" stroke="#ec5ec0" strokeWidth="3" strokeLinecap="round" fill="none" />
                  </g>
                </svg>
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