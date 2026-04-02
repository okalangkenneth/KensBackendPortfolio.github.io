import { Badge, TagPill } from './Badge.jsx'

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

const border = `0.5px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`

const cardBase = {
  border,
  borderRadius: '12px',
  padding: '1.5rem',
  backgroundColor: dark ? '#161616' : '#ffffff',
}

function CardHeader({ badge, badgeVariant, year, title, description, tags, link }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Badge label={badge} variant={badgeVariant} />
          {year && <span style={{ fontSize: '12px', color: dark ? '#6b7280' : '#9ca3af' }}>{year}</span>}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', color: dark ? '#9ca3af' : '#6b7280', display: 'flex', alignItems: 'center', gap: '4px' }}
          onMouseEnter={e => e.currentTarget.style.color = dark ? '#e5e7eb' : '#111827'}
          onMouseLeave={e => e.currentTarget.style.color = dark ? '#9ca3af' : '#6b7280'}
        >
          GitHub ↗
        </a>
      </div>
      <h3 style={{ fontSize: '17px', fontWeight: 600, color: dark ? '#f9fafb' : '#111827', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', lineHeight: 1.65, color: dark ? '#9ca3af' : '#6b7280', marginBottom: '1rem' }}>
        {description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map(t => <TagPill key={t} label={t} />)}
      </div>
    </>
  )
}

const FEATURED = [
  {
    id: 'econadvisor',
    badge: 'AI + .NET',
    badgeVariant: 'purple',
    year: '2026',
    title: 'EconAdvisor',
    description: 'Macroeconomic analysis platform combining .NET 8 backend with Dify RAG pipelines. Delivers AI-powered financial insights via a clean REST API.',
    tags: ['.NET 8', 'Dify RAG', 'REST API', 'C#'],
    link: 'https://github.com/okalangkenneth/EconAdvisor',
    full: true,
  },
  {
    id: 'skillfind',
    badge: 'Microservices',
    badgeVariant: 'teal',
    year: '2023',
    title: 'SkillFind',
    description: 'End-to-end job portal built on a full enterprise microservices stack. Implements DDD and CQRS patterns, Ocelot API gateway, IdentityServer4 auth, RabbitMQ/MassTransit messaging, Kubernetes orchestration, and an ELK logging pipeline with a CI/CD workflow via GitHub Actions.',
    tags: ['C#', 'Ocelot', 'RabbitMQ', 'Kubernetes', 'ELK', 'DDD/CQRS', 'CI/CD'],
    link: 'https://github.com/okalangkenneth/SkillFind',
    full: true,
  },
]

const PAIRED_1 = [
  {
    id: 'agripredict',
    badge: 'ML + API',
    badgeVariant: 'teal',
    title: 'AgriPredict',
    description: 'Frost-risk prediction API using ML.NET trained on historical climate data. Delivers real-time risk scores for precision agriculture use cases.',
    tags: ['ML.NET', '.NET 8', 'C#'],
    link: 'https://github.com/okalangkenneth/AgriPredict',
  },
  {
    id: 'dotnetms',
    badge: 'Microservices',
    badgeVariant: 'teal',
    title: 'DotNet Microservices',
    description: 'Production-grade microservices platform with event-driven architecture, service discovery, API gateway, and Docker orchestration.',
    tags: ['ASP.NET', 'Docker', 'RabbitMQ'],
    link: 'https://github.com/okalangkenneth/DotNetMicroservices_1',
  },
]

const PAIRED_2 = [
  {
    id: 'dify-agent',
    badge: 'AI Agent',
    badgeVariant: 'purple',
    title: 'Dify Customer Support Agent',
    description: 'Production RAG pipeline with a hallucination validation layer — every answer is verified against source documents before it reaches the user.',
    tags: ['Dify', 'RAG', 'Python'],
    link: 'https://github.com/okalangkenneth/dify-customer-support-agent',
  },
  {
    id: 'pharmanest',
    badge: 'Real World',
    badgeVariant: 'teal',
    title: 'PharmaNest POS',
    description: 'Point-of-sale system built for a pharmacy in Uganda. Inventory management, billing, and reporting — in active production use.',
    tags: ['TypeScript', 'POS', 'Production'],
    link: 'https://github.com/okalangkenneth/PharmaNest-POS',
  },
]

export default function FeaturedWork() {
  const s = {
    section: {
      padding: '1rem 1.5rem 5rem',
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
    stack: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1rem',
    },
  }

  return (
    <section id="work" style={s.section}>
      <span style={s.label}>Featured work</span>
      <div style={s.stack}>
        {FEATURED.map(p => (
          <div key={p.id} style={cardBase}>
            <CardHeader {...p} />
          </div>
        ))}
        <div style={s.grid}>
          {PAIRED_1.map(p => (
            <div key={p.id} style={cardBase}>
              <CardHeader {...p} />
            </div>
          ))}
        </div>
        <div style={s.grid}>
          {PAIRED_2.map(p => (
            <div key={p.id} style={cardBase}>
              <CardHeader {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
