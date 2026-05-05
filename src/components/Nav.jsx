import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const s = {
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      height: '52px',
      backgroundColor: dark ? (scrolled ? 'rgba(15,15,15,0.92)' : '#0f0f0f') : (scrolled ? 'rgba(255,255,255,0.92)' : '#ffffff'),
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: `0.5px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
      transition: 'background-color 0.2s',
    },
    name: {
      fontSize: '15px',
      fontWeight: 500,
      letterSpacing: '-0.01em',
      color: dark ? '#e5e7eb' : '#111827',
      cursor: 'pointer',
    },
    links: {
      display: 'flex',
      gap: '1.75rem',
      alignItems: 'center',
      listStyle: 'none',
    },
    link: {
      fontSize: '14px',
      fontWeight: 400,
      color: dark ? '#9ca3af' : '#6b7280',
      cursor: 'pointer',
      transition: 'color 0.15s',
      textDecoration: 'none',
    },
    activeLink: {
      fontSize: '14px',
      fontWeight: 500,
      color: dark ? '#e5e7eb' : '#111827',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    contactLink: {
      fontSize: '14px',
      fontWeight: 500,
      color: dark ? '#e5e7eb' : '#111827',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  }

  function handleAnchor(anchor) {
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav style={s.nav}>
      <span style={s.name} onClick={() => navigate('/')}>Kenneth Okalang</span>
      <ul style={s.links}>
        {['work', 'skills', 'about'].map((anchor) => (
          <li key={anchor}>
            <span
              style={s.link}
              onClick={() => handleAnchor(anchor)}
              onMouseEnter={e => e.currentTarget.style.color = dark ? '#e5e7eb' : '#111827'}
              onMouseLeave={e => e.currentTarget.style.color = dark ? '#9ca3af' : '#6b7280'}
            >
              {anchor.charAt(0).toUpperCase() + anchor.slice(1)}
            </span>
          </li>
        ))}
        <li>
          <span
            style={location.pathname.startsWith('/blog') ? s.activeLink : s.link}
            onClick={() => navigate('/blog')}
            onMouseEnter={e => e.currentTarget.style.color = dark ? '#e5e7eb' : '#111827'}
            onMouseLeave={e => { if (!location.pathname.startsWith('/blog')) e.currentTarget.style.color = dark ? '#9ca3af' : '#6b7280' }}
          >
            Writing
          </span>
        </li>
        <li>
          <span style={s.contactLink} onClick={() => handleAnchor('contact')}>
            Contact ↗
          </span>
        </li>
      </ul>
    </nav>
  )
}
