import React from 'react'
import robotSkillsImg from '../assets/robot-skills.png'

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
              <img src={robotSkillsImg} alt="Robot mascot" className="skill-orb-img" />
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