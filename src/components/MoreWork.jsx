import { TagPill } from './Badge.jsx'

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

const MORE = [
  {
    title: 'Renewable Assets DB',
    desc: 'Automated ETL pipeline for renewable energy data.',
    tech: 'SQL Server · Power BI',
    link: 'https://github.com/okalangkenneth/renewable_assets_database',
  },
  {
    title: 'EncryptedChatFlow',
    desc: 'End-to-end encrypted messaging system.',
    tech: 'C#',
    link: 'https://github.com/okalangkenneth/EncryptedChatFlow',
  },
  {
    title: 'Scout Vision',
    desc: 'AI-powered sports scouting platform with video analysis and athlete profiles.',
    tech: 'TypeScript',
    link: 'https://github.com/okalangkenneth/scout-vision',
  },
  {
    title: 'E-Commerce API',
    desc: 'RESTful API with JWT auth, product catalog, orders, and cart.',
    tech: 'ASP.NET · JWT',
    link: 'https://github.com/okalangkenneth/E-Commerce',
  },
  {
    title: 'RealEstateApp',
    desc: 'Property listings, search, and management platform.',
    tech: 'C# · ASP.NET',
    link: 'https://github.com/okalangkenneth/RealEstateApp',
  },
  {
    title: 'ContentMaster API',
    desc: 'AI-driven content management API with modern REST architecture.',
    tech: 'C# · AI',
    link: 'https://github.com/okalangkenneth/contentmaster-api',
  },
]

export default function MoreWork() {
  const border = `0.5px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`

  const s = {
    section: {
      padding: '0 1.5rem 5rem',
      maxWidth: '900px',
      margin: '0 auto',
      scrollMarginTop: '52px',
    },
    label: {
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: dark ? '#6b7280' : '#9ca3af',
      marginBottom: '1.5rem',
      display: 'block',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '0.875rem',
    },
    card: {
      border,
      borderRadius: '8px',
      padding: '1.125rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      transition: 'border-color 0.15s',
    },
    title: {
      fontSize: '14px',
      fontWeight: 600,
      color: dark ? '#f9fafb' : '#111827',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '8px',
    },
    arrow: {
      fontSize: '13px',
      color: dark ? '#6b7280' : '#9ca3af',
      flexShrink: 0,
    },
    desc: {
      fontSize: '13px',
      lineHeight: 1.6,
      color: dark ? '#9ca3af' : '#6b7280',
    },
    tech: {
      fontSize: '11px',
      fontWeight: 500,
      color: dark ? '#6b7280' : '#9ca3af',
      marginTop: 'auto',
      paddingTop: '0.25rem',
    },
  }

  return (
    <section style={s.section}>
      <span style={s.label}>More work</span>
      <div style={s.grid}>
        {MORE.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={s.card}
            onMouseEnter={e => e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}
          >
            <div style={s.title}>
              <span>{item.title}</span>
              <span style={s.arrow}>↗</span>
            </div>
            <p style={s.desc}>{item.desc}</p>
            <span style={s.tech}>{item.tech}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
