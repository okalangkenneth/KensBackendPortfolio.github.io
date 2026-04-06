const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

const GROUPS = [
  {
    label: 'Languages',
    variant: 'blue',
    skills: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    label: 'Frameworks',
    variant: 'blue',
    skills: ['ASP.NET Core', '.NET 8', 'React', 'Node.js'],
  },
  {
    label: 'AI & ML',
    variant: 'purple',
    skills: ['ML.NET', 'Dify', 'RAG pipelines', 'LLM integration'],
  },
  {
    label: 'Architecture',
    variant: 'teal',
    skills: ['Microservices', 'DDD', 'CQRS', 'Event-driven', 'REST'],
  },
  {
    label: 'Data',
    variant: 'teal',
    skills: ['SQL Server', 'MySQL Server', 'PostgreSQL', 'Entity Framework Core', 'Power BI', 'ETL'],
  },
  {
    label: 'DevOps',
    variant: 'teal',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'ELK Stack'],
  },
  {
    label: 'Auth & Messaging',
    variant: 'gray',
    skills: ['IdentityServer4', 'JWT', 'RabbitMQ', 'MassTransit'],
  },
  {
    label: 'Cloud',
    variant: 'gray',
    skills: ['Azure', 'Oracle Cloud', 'Cloudflare', 'GitHub Pages'],
  },
]

const PILL_COLORS = {
  blue:   { bg: dark ? '#0f1e2e' : '#E6F1FB', color: dark ? '#60a5fa' : '#0C447C' },
  purple: { bg: dark ? '#1a1535' : '#EEEDFE', color: dark ? '#a78bfa' : '#3C3489' },
  teal:   { bg: dark ? '#0c1f1a' : '#E1F5EE', color: dark ? '#34d399' : '#085041' },
  gray:   { bg: dark ? '#1f1f1f' : '#F3F4F6', color: dark ? '#9ca3af' : '#374151' },
}

export default function Skills() {
  const s = {
    section: {
      padding: '0 1.5rem 5rem',
      maxWidth: '900px',
      margin: '0 auto',
      scrollMarginTop: '52px',
    },
    sectionLabel: {
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
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '1.5rem',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    groupLabel: {
      fontSize: '12px',
      fontWeight: 500,
      color: dark ? '#6b7280' : '#9ca3af',
    },
    pills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
    },
  }

  return (
    <section id="skills" style={s.section}>
      <span style={s.sectionLabel}>Skills</span>
      <div style={s.grid}>
        {GROUPS.map(({ label, variant, skills }) => {
          const c = PILL_COLORS[variant]
          return (
            <div key={label} style={s.group}>
              <span style={s.groupLabel}>{label}</span>
              <div style={s.pills}>
                {skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: c.bg,
                      color: c.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
