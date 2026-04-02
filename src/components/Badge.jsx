const BADGE_MAP = {
  purple:  { bg: '#EEEDFE', color: '#3C3489' },
  teal:    { bg: '#E1F5EE', color: '#085041' },
  blue:    { bg: '#E6F1FB', color: '#0C447C' },
  green:   { bg: '#E1F5EE', color: '#085041' },
  gray:    { bg: '#F3F4F6', color: '#374151' },
}

export function Badge({ label, variant = 'gray' }) {
  const c = BADGE_MAP[variant] || BADGE_MAP.gray
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '11px',
      fontWeight: 500,
      padding: '3px 10px',
      borderRadius: '4px',
      backgroundColor: c.bg,
      color: c.color,
      letterSpacing: '0.01em',
    }}>
      {label}
    </span>
  )
}

export function TagPill({ label }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '11px',
      fontWeight: 500,
      padding: '3px 8px',
      borderRadius: '4px',
      backgroundColor: '#F3F4F6',
      color: '#374151',
    }}>
      {label}
    </span>
  )
}
