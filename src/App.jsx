import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import MoreWork from './components/MoreWork.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Blog from './pages/Blog.jsx'
import ArticlePage from './pages/ArticlePage.jsx'

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <MoreWork />
      <Skills />
      <About />
    </main>
  )
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: dark ? '#0f0f0f' : '#ffffff',
      color: dark ? '#e5e7eb' : '#111827',
    }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
