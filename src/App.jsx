import { useEffect, useState } from 'react'
import NavBar from './component/NavBar'
import Hero from './section/Hero'
import About from './section/About'
import ShowCaseSection from './section/ShowCaseSection'
import FeatureSection from './section/FeatureSection'
import Experience from './section/Experience'
import TechStack from './section/TechStack'
import Contact from './section/Contact'
import Footer from './section/Footer'
import ProjectDetail from './section/ProjectDetail'

const getProjectIdFromHash = () => {
  const hash = window.location.hash.replace(/^#/, '')
  if (hash.startsWith('project/')) {
    return hash.slice('project/'.length) || null
  }
  return null
}

const scrollToId = (id) => {
  requestAnimationFrame(() => {
    const el = document.getElementById(id)
    if (!el) return
    const offset = window.innerHeight * 0.08
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  })
}

const App = () => {
  const [projectId, setProjectId] = useState(() =>
    typeof window !== 'undefined' ? getProjectIdFromHash() : null
  )
  const [pendingScrollId, setPendingScrollId] = useState(null)

  useEffect(() => {
    const onHashChange = () => setProjectId(getProjectIdFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!projectId && pendingScrollId) {
      scrollToId(pendingScrollId)
      setPendingScrollId(null)
    }
  }, [projectId, pendingScrollId])

  const openProject = (id) => {
    window.location.hash = `project/${id}`
  }

  const navigateHome = (sectionId = 'work') => {
    if (projectId) {
      setPendingScrollId(sectionId)
      window.location.hash = sectionId
      return
    }
    window.location.hash = sectionId
    scrollToId(sectionId)
  }

  if (projectId) {
    return (
      <>
        <NavBar onNavigateHome={navigateHome} />
        <ProjectDetail projectId={projectId} onBack={() => navigateHome('work')} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ShowCaseSection onOpenProject={openProject} />
      <FeatureSection />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
