import React, { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectIcon from './ProjectIcon.jsx'
import Footer from './Footer.jsx'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'project', label: 'Projects' },
  { id: 'event', label: 'Events' },
  { id: 'report', label: 'Reports' },
]

export default function AllProjects() {
  const [filter, setFilter] = useState('all')

  const visible = projects.filter(
    (p) => filter === 'all' || (p.category || 'project') === filter
  )

  return (
    <div className="all-projects-page">
      <a className="back-link" href="#home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Portfolio
      </a>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.9rem,4vw,2.8rem)',
          margin: '0.6rem 0',
        }}
      >
        Builds, Battles & Reports
      </h2>
      <p style={{ color: 'var(--text-dim)', maxWidth: 560 }}>
        Projects I've built, events I've joined, and reports I've written — click any
        card to see the repository, certificate, or full report.
      </p>

      <div className="filter-tabs">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-tab${filter === f.id ? ' active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="all-projects-grid">
        {visible.map((p) => (
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
                <ProjectIcon name={p.icon} color={p.iconColor} size={60} />
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

      <Footer />
    </div>
  )
}