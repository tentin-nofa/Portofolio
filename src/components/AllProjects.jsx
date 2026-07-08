import React, { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectIcon from './ProjectIcon.jsx'
import Footer from './Footer.jsx'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'project', label: 'Projects' },
  { id: 'report', label: 'Academic Reports' },
]

export default function AllProjects() {
  const [filter, setFilter] = useState('all')

  const visible = projects.filter(
    (p) => filter === 'all' || (p.category || 'project') === filter
  )

  return (
    <div className="all-projects-page">
      <a className="back-link" href="#projects">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Experiences
      </a>

      <div className="filter-tabs" style={{ marginTop: '1.4rem' }}>
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
        {visible.map((p) => {
          const thumb = (
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
          )

          const body = (
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
              {p.linkLabel && !p.links && <p className="link-label">{p.linkLabel} →</p>}
              {p.links && (
                <div className="report-links">
                  {p.links.map((l) => (
                    <a
                      className="report-link-btn"
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={l.label}
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          )

          // Multiple links: render as a div (not a single wrapping <a>)
          if (p.links) {
            return (
              <div className={`project-card${p.wide ? ' wide' : ''}`} key={p.id}>
                {thumb}
                {body}
              </div>
            )
          }

          return (
            <a
              className={`project-card${p.wide ? ' wide' : ''}`}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              key={p.id}
            >
              {thumb}
              {body}
            </a>
          )
        })}
      </div>

      <Footer />
    </div>
  )
}