import React from 'react'
import { projects } from '../data/projects.js'
import ProjectIcon from './ProjectIcon.jsx'

export default function Projects() {
  const previewIds = ['smart-attendance', 'mathking', 'ai-risk-audit', 'tax-consultant']
  const preview = previewIds
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean)

  const goToAllProjects = () => {
    window.location.hash = '/projects'
  }

  return (
    <section className="section" id="projects">
      <div className="projects-head">
        <div>
          <p className="eyebrow">▦ Activity Log</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: '0.6rem 0 0' }}>
            Builds, Battles & Reports
          </h2>
        </div>
        <button className="view-all" onClick={goToAllProjects}>
          View All →
        </button>
      </div>
      <div className="projects-grid">
        {preview.map((p) => (
          <a
            className={`project-card${p.wide ? ' wide' : ''}`}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            key={p.id}
          >
            <div
              className={`project-thumb${p.thumbImg ? '' : ' has-icon'}`}
              style={p.thumbBg ? { background: p.thumbBg } : undefined}
            >
              {p.thumbImg ? (
                <img src={p.thumbImg} alt={p.title} />
              ) : (
                <ProjectIcon name={p.icon} color={p.iconColor} />
              )}
            </div>
            <div className="project-body">
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.stack && <p className="stack-line">Stack: {p.stack}</p>}
              {p.linkLabel && <p className="link-label">{p.linkLabel} →</p>}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}