import { useState, useEffect } from 'react'

const NAV_LINKS = ['Work', 'Skills', 'About', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

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
    },
    contactLink: {
      fontSize: '14px',
      fontWeight: 500,
      color: dark ? '#e5e7eb' : '#111827',
      cursor: 'pointer',
    },
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={s.nav}>
      <span style={s.name}>Kenneth Okalang</span>
      <ul style={s.links}>
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <span
              style={label === 'Contact' ? s.contactLink : s.link}
              onClick={() => scrollTo(label)}
              onMouseEnter={e => { if (label !== 'Contact') e.target.style.color = dark ? '#e5e7eb' : '#111827' }}
              onMouseLeave={e => { if (label !== 'Contact') e.target.style.color = dark ? '#9ca3af' : '#6b7280' }}
            >
              {label}{label === 'Contact' ? ' ↗' : ''}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}
