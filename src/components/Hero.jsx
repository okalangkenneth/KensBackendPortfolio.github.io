const TAGS = [
  '.NET / C#', 'Dify RAG', 'ASP.NET Core', 'ML.NET',
  'TypeScript', 'SQL Server', 'Microservices', 'Azure',
]

export default function Hero() {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const s = {
    section: {
      padding: '5rem 1.5rem 4.5rem',
      maxWidth: '780px',
      margin: '0 auto',
      scrollMarginTop: '52px',
    },
    availability: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: dark ? '#9ca3af' : '#6b7280',
      marginBottom: '1.75rem',
    },
    dot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#22c55e',
      flexShrink: 0,
    },
    h1: {
      fontSize: 'clamp(32px, 5vw, 42px)',
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
      color: dark ? '#f9fafb' : '#111827',
      marginBottom: '1.25rem',
    },
    subtext: {
      fontSize: '17px',
      lineHeight: 1.65,
      color: dark ? '#9ca3af' : '#6b7280',
      maxWidth: '580px',
      marginBottom: '2rem',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    tag: {
      fontSize: '12px',
      fontWeight: 500,
      padding: '4px 10px',
      borderRadius: '4px',
      backgroundColor: dark ? '#1f1f1f' : '#F3F4F6',
      color: dark ? '#9ca3af' : '#374151',
      border: `0.5px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
    },
  }

  return (
    <section style={s.section}>
      <div style={s.availability}>
        <span style={s.dot} />
        Available for work · Kista, Sweden
      </div>
      <h1 style={s.h1}>Fullstack &amp; AI Engineer</h1>
      <p style={s.subtext}>
        I build production-grade .NET systems and AI-powered backends, from microservices
        architecture to RAG pipelines and ML APIs.
      </p>
      <div style={s.tags}>
        {TAGS.map((tag) => (
          <span key={tag} style={s.tag}>{tag}</span>
        ))}
      </div>
    </section>
  )
}
