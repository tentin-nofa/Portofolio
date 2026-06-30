import React from 'react'
import { projects } from '../data/projects.js'
import ProjectIcon from './ProjectIcon.jsx'
import Footer from './Footer.jsx'

export default function AllProjects() {
  return (
    <div className="all-projects-page">
      <a className="back-link" href="#home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Portfolio
      </a>

      <p className="eyebrow">▦ Full Archive</p>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.9rem,4vw,2.8rem)',
          margin: '0.6rem 0',
        }}
      >
        All Projects
      </h2>
      <p style={{ color: 'var(--text-dim)', maxWidth: 560 }}>
        Every build, big or small — click a project to open its repository on
        GitHub.
      </p>

      <div className="all-projects-grid">
        {projects.map((p) => (
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
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  )
}