import React from 'react'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="eyebrow" style={{ justifyContent: 'center' }}>
        Secure Communication
      </p>
      <h2>Let's Connect</h2>
      <p>
        Looking for a Cybersecurity or Developer Intern? I am ready to bring my
        competitive hacking intuition and secure software development skills
        to a professional team. Let's talk about how I can contribute to your
        upcoming projects.
      </p>
      <div className="social-row">
        <a
          className="social-btn"
          href="mailto:tentinnofatuzika@gmail.com"
          aria-label="Email"
          title="Email"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/tentin-nofa-tuzika-91b063323/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.3 8.3h3.4V23H1.3V8.3zM8.5 8.3h3.27v2.01h.05c.46-.87 1.58-1.79 3.25-1.79 3.48 0 4.13 2.29 4.13 5.27V23h-3.4v-6.42c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.67-2.46 3.39V23H8.5V8.3z" />
          </svg>
        </a>
        <a
          className="social-btn"
          href="https://github.com/tentin-nofa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </a>
        <a
          className="social-btn"
          href="https://www.instagram.com/tentinntzk?igsh=MWxmcXl4cWU1OXR1ag%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </section>
  )
}
