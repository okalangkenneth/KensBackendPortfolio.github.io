import { useNavigate } from 'react-router-dom'
import { ARTICLES } from '../data/articles.js'
import { TagPill } from '../components/Badge.jsx'

const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

export default function Blog() {
  const navigate = useNavigate()

  const s = {
    page: {
      maxWidth: '720px',
      margin: '0 auto',
      padding: '4rem 1.5rem 6rem',
    },
    header: {
      marginBottom: '3rem',
    },
    label: {
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: dark ? '#6b7280' : '#9ca3af',
      display: 'block',
      marginBottom: '0.75rem',
    },
    title: {
      fontSize: '28px',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: dark ? '#f9fafb' : '#111827',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '15px',
      color: dark ? '#9ca3af' : '#6b7280',
      lineHeight: 1.6,
    },
    card: {
      padding: '1.5rem 0',
      borderBottom: `0.5px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
      cursor: 'pointer',
    },
    meta: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      marginBottom: '0.5rem',
    },
    category: {
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: dark ? '#818cf8' : '#6366f1',
    },
    date: {
      fontSize: '12px',
      color: dark ? '#6b7280' : '#9ca3af',
    },
    readTime: {
      fontSize: '12px',
      color: dark ? '#6b7280' : '#9ca3af',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: dark ? '#f9fafb' : '#111827',
      marginBottom: '0.5rem',
      lineHeight: 1.35,
      transition: 'color 0.15s',
    },
    cardDesc: {
      fontSize: '14px',
      lineHeight: 1.65,
      color: dark ? '#9ca3af' : '#6b7280',
      marginBottom: '1rem',
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
    },
  }

  return (
    <div style={s.page}>
      <div style={s.header}>
        <span style={s.label}>Writing</span>
        <h1 style={s.title}>Articles & Build Logs</h1>
        <p style={s.subtitle}>
          Deep dives into backend engineering, open source projects, and the things I build.
        </p>
      </div>

      {ARTICLES.map(article => (
        <div
          key={article.slug}
          style={s.card}
          onClick={() => navigate(`/blog/${article.slug}`)}
          onMouseEnter={e => e.currentTarget.querySelector('.card-title').style.color = dark ? '#818cf8' : '#6366f1'}
          onMouseLeave={e => e.currentTarget.querySelector('.card-title').style.color = dark ? '#f9fafb' : '#111827'}
        >
          <div style={s.meta}>
            <span style={s.category}>{article.category}</span>
            <span style={s.date}>{article.date}</span>
            <span style={s.readTime}>{article.readTime}</span>
          </div>
          <h2 className="card-title" style={s.cardTitle}>{article.title}</h2>
          <p style={s.cardDesc}>{article.description}</p>
          <div style={s.tags}>
            {article.tags.map(t => <TagPill key={t} label={t} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
