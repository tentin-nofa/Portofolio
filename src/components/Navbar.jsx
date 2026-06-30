import React, { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const onScroll = () => {
      let current = 'home'
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top) current = sec.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-links">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'active' : ''}
          >
            {l.label}
          </a>
        ))}
      </div>
      <a href="#contact" className="nav-cta">
        Contact
      </a>
    </nav>
  )
}
