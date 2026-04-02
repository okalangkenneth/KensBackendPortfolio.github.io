const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

const PARAGRAPHS = [
  'Kenneth is a fullstack and AI engineer based in Kista, Sweden, specializing in .NET backend systems and AI-integrated applications. With a foundation in C# and ASP.NET Core, he builds everything from production microservices platforms to RAG pipelines and ML APIs — with a focus on clean architecture and real-world impact.',
  'He works across the full stack, delivering systems that have gone into production in industries ranging from energy and healthcare to logistics and finance. Currently exploring the intersection of .NET and applied AI, particularly with Dify-based agent workflows and ML.NET predictive APIs.',
  'Open to freelance projects and collaborations.',
]

export default function About() {
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
    prose: {
      maxWidth: '600px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    p: {
      fontSize: '17px',
      lineHeight: 1.7,
      color: dark ? '#9ca3af' : '#6b7280',
    },
  }

  return (
    <section id="about" style={s.section}>
      <span style={s.sectionLabel}>About</span>
      <div style={s.prose}>
        {PARAGRAPHS.map((text, i) => (
          <p key={i} style={s.p}>{text}</p>
        ))}
      </div>
    </section>
  )
}
