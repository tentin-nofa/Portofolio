import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Awards from './components/Awards.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AllProjects from './components/AllProjects.jsx'

function getRoute() {
  return window.location.hash === '#/projects' ? 'projects' : 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  if (route === 'projects') {
    return <AllProjects />
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
