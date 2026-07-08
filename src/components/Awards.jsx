import React from 'react'

const awards = [
  {
    label: 'PU CTF 2025',
    title: 'Rank 6th / 30 Teams',
    desc: 'Digital Forensic - Tukang Bengkel Servel. Conducted vulnerability assessments and attack path analysis.',
    tags: ['Forensics', 'Mitigation'],
  },
  {
    label: 'PU CTF 2026',
    title: 'Rank 16th / 38 Teams',
    desc: 'Ethical Hacking - High Cortisol. Analyzed phishing artifacts, malware indicators, and event logs.',
    tags: ['Ethical Hacking', 'OSINT'],
  },
  {
    label: 'OWASP Juice Shop',
    title: 'Advanced Web Pentesting Labs',
    desc: 'Solved a targeted selection of challenges across multiple tiers, successfully exploiting advanced (4-Star & 5-Star) web vulnerabilities.',
    tags: ['Web Pentesting', 'OWASP Top 10'],
  },
]

export default function Awards() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mx', `${x}%`)
    card.style.setProperty('--my', `${y}%`)
  }

  return (
    <section className="section" id="awards">
      <div className="section-head">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          🏆 Awards & CTF Rankings 🏆
        </p>
        <h2>Awards & CTF Rankings</h2>
        <p>Validated excellence in competitive hacking and academic performance.</p>
      </div>
      <div className="awards-grid">
        {awards.map((a) => (
          <div
            className="card card-spotlight"
            key={a.title}
            onMouseMove={handleMouseMove}
          >
            <span className="spotlight-layer" aria-hidden="true"></span>
            <div className="card-inner">
              <span className="tag-label">{a.label}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <div className="tags">
                {a.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}