import React from 'react'

const education = [
  {
    period: '2024 - 2027 (Expected)',
    title: 'President University',
    detail: 'Informatics, Candidate for S.Kom · GPA: 3.65/4.00',
    note: 'Awarded Jababeka Scholarship 75%',
  },
  {
    period: '2021 - 2024',
    title: 'SMA LTI IGM Palembang',
    detail: 'Natural Sciences · 89.97/100',
    note: 'Best Student in CS/Informatics for 3 years',
  },
]

const pillsLeft = ['Network Security (Cisco)', 'Linux (Ubuntu/Kali)', 'Web Application Pentesting']
const pillsRight = ['Python', 'PHP / Laravel', 'Database (MySQL)']
const toolbar = ['OWASP Juice Shop', 'C++ / Java', 'Lua', 'Git / GitHub', 'JavaScript']

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="skills-grid">
        <div>
          <p className="eyebrow">🎓 Education</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: '0.6rem 0 0' }}>
            Academic Journey
          </h2>
          <div className="timeline">
            {education.map((e) => (
              <div className="timeline-item" key={e.title}>
                <span className="timeline-dot"></span>
                <div className="edu-card">
                  <p className="period">{e.period}</p>
                  <h3>{e.title}</h3>
                  <p className="detail">{e.detail}</p>
                  <p className="note">{e.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">⚡ Stack & Tools</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: '0.6rem 0 0' }}>
            Skill & Language
          </h2>
          <div className="skill-pills">
            <div className="pill-col">
              {pillsLeft.map((p) => (
                <div className="skill-pill" key={p}>
                  {p}
                </div>
              ))}
            </div>
            <div className="skill-orb">
              <svg viewBox="0 0 200 200" fill="none">
                <defs>
                  <radialGradient id="orbGlow" cx="50%" cy="42%" r="60%">
                    <stop offset="0%" stopColor="#2a1530" />
                    <stop offset="100%" stopColor="#0a0a0d" />
                  </radialGradient>
                  <linearGradient id="ringMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8e8ee" />
                    <stop offset="50%" stopColor="#9a9aa8" />
                    <stop offset="100%" stopColor="#e8e8ee" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="96" fill="url(#orbGlow)" />
                <circle cx="100" cy="100" r="78" fill="none" stroke="url(#ringMetal)" strokeWidth="2" />
                <circle cx="100" cy="100" r="64" fill="none" stroke="#ec5ec0" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.6" />
                {Array.from({ length: 16 }).map((_, i) => {
                  const angle = (i / 16) * Math.PI * 2
                  const x = 100 + Math.cos(angle) * 70
                  const y = 100 + Math.sin(angle) * 70
                  return <circle key={i} cx={x} cy={y} r="2" fill="#ec5ec0" opacity="0.7" />
                })}
                <path
                  d="M100 50l30 12v22c0 22-13 36-30 44-17-8-30-22-30-44V62l30-12z"
                  fill="none"
                  stroke="#ec5ec0"
                  strokeWidth="2.5"
                />
                <path
                  d="M88 100l9 9 17-17"
                  fill="none"
                  stroke="#ec5ec0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pill-col">
              {pillsRight.map((p) => (
                <div className="skill-pill" key={p}>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="toolbar">
            {toolbar.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
