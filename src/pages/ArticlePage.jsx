import { useParams, useNavigate } from 'react-router-dom'
import { ARTICLES } from '../data/articles.js'
import EcosoundMonitor from './articles/EcosoundMonitor.jsx'

const ARTICLE_COMPONENTS = {
  'ecosound-monitor': EcosoundMonitor,
}

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

export default function ArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const meta = ARTICLES.find(a => a.slug === slug)
  const ArticleContent = ARTICLE_COMPONENTS[slug]

  if (!meta || !ArticleContent) {
    return (
      <div style={{ maxWidth: '720px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <h2 style={{ color: dark ? '#f9fafb' : '#111827' }}>Article not found</h2>
        <button onClick={() => navigate('/blog')} style={{ marginTop: '1rem', cursor: 'pointer' }}>
          Back to Writing
        </button>
      </div>
    )
  }

  const s = {
    page: { maxWidth: '720px', margin: '0 auto', padding: '3rem 1.5rem 6rem' },
    backBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '13px',
      color: dark ? '#9ca3af' : '#6b7280',
      cursor: 'pointer',
      marginBottom: '2.5rem',
      background: 'none',
      border: 'none',
      padding: 0,
    },
    meta: { display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.75rem' },
    category: { fontSize: '11px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: dark ? '#818cf8' : '#6366f1' },
    date: { fontSize: '12px', color: dark ? '#6b7280' : '#9ca3af' },
    readTime: { fontSize: '12px', color: dark ? '#6b7280' : '#9ca3af' },
    title: { fontSize: '30px', fontWeight: 700, letterSpacing: '-0.02em', color: dark ? '#f9fafb' : '#111827', lineHeight: 1.25, marginBottom: '2.5rem' },
    githubLink: {
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontSize: '13px', fontWeight: 500,
      color: dark ? '#818cf8' : '#6366f1',
      textDecoration: 'none', marginTop: '2.5rem',
    },
  }

  return (
    <div style={s.page}>
      <button style={s.backBtn} onClick={() => navigate('/blog')}>
        ← Writing
      </button>
      <div style={s.meta}>
        <span style={s.category}>{meta.category}</span>
        <span style={s.date}>{meta.date}</span>
        <span style={s.readTime}>{meta.readTime}</span>
      </div>
      <h1 style={s.title}>{meta.title}</h1>

      <ArticleContent />

      <a href={meta.github} target="_blank" rel="noopener noreferrer" style={s.githubLink}>
        View on GitHub ↗
      </a>
    </div>
  )
}
