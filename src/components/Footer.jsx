const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

export default function Footer() {
  const s = {
    footer: {
      borderTop: `0.5px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
      padding: '2.5rem 1.5rem',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.25rem',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    headline: {
      fontSize: '16px',
      fontWeight: 500,
      color: dark ? '#f9fafb' : '#111827',
    },
    email: {
      fontSize: '13px',
      color: dark ? '#6b7280' : '#9ca3af',
    },
    right: {
      display: 'flex',
      gap: '1.25rem',
    },
    link: {
      fontSize: '14px',
      fontWeight: 500,
      color: dark ? '#9ca3af' : '#6b7280',
      transition: 'color 0.15s',
    },
  }

  const hoverIn  = e => e.target.style.color = dark ? '#e5e7eb' : '#111827'
  const hoverOut = e => e.target.style.color = dark ? '#9ca3af' : '#6b7280'

  return (
    <footer id="contact">
      <div style={s.footer}>
        <div style={s.left}>
          <span style={s.headline}>Open to new projects</span>
          <a
            href="mailto:okalang.ok@gmail.com"
            style={s.email}
            onMouseEnter={e => e.target.style.color = dark ? '#e5e7eb' : '#111827'}
            onMouseLeave={e => e.target.style.color = dark ? '#6b7280' : '#9ca3af'}
          >
            okalang.ok@gmail.com
          </a>
        </div>
        <div style={s.right}>
          <a
            href="https://github.com/okalangkenneth"
            target="_blank"
            rel="noopener noreferrer"
            style={s.link}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/okalangkenneth/"
            target="_blank"
            rel="noopener noreferrer"
            style={s.link}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
