import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import MoreWork from './components/MoreWork.jsx'
import Footer from './components/Footer.jsx'

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: dark ? '#0f0f0f' : '#ffffff',
      color: dark ? '#e5e7eb' : '#111827',
    }}>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <MoreWork />
      </main>
      <Footer />
    </div>
  )
}
