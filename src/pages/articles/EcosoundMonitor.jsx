const dark = window.matchMedia('(prefers-color-scheme: dark)').matches

const s = {
  p: { fontSize: '16px', lineHeight: 1.75, color: dark ? '#d1d5db' : '#374151', marginBottom: '1.5rem' },
  h2: { fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em', color: dark ? '#f9fafb' : '#111827', margin: '2.5rem 0 0.75rem' },
  h3: { fontSize: '17px', fontWeight: 600, color: dark ? '#f9fafb' : '#111827', margin: '2rem 0 0.5rem' },
  ul: { paddingLeft: '1.25rem', marginBottom: '1.5rem' },
  li: { fontSize: '15px', lineHeight: 1.75, color: dark ? '#d1d5db' : '#374151', marginBottom: '0.35rem' },
  code: { fontFamily: 'monospace', fontSize: '13px', backgroundColor: dark ? '#1f2937' : '#f3f4f6', padding: '0.15em 0.4em', borderRadius: '4px' },
  pre: {
    backgroundColor: dark ? '#111827' : '#f3f4f6',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
    borderRadius: '8px',
    padding: '1rem 1.25rem',
    overflowX: 'auto',
    marginBottom: '1.5rem',
    fontSize: '13px',
    lineHeight: 1.65,
    color: dark ? '#e5e7eb' : '#111827',
  },
  callout: {
    backgroundColor: dark ? '#1e1b4b' : '#eef2ff',
    borderLeft: `3px solid ${dark ? '#818cf8' : '#6366f1'}`,
    borderRadius: '0 8px 8px 0',
    padding: '1rem 1.25rem',
    marginBottom: '1.5rem',
    fontSize: '14px',
    color: dark ? '#c7d2fe' : '#4338ca',
    lineHeight: 1.65,
  },
  strong: { fontWeight: 600, color: dark ? '#f9fafb' : '#111827' },
}

export default function EcosoundMonitor() {
  return (
    <div>
      <img src="/ecosound.jpg" alt="Wildlife compliance report" style={{ width: "100%", borderRadius: "8px", marginBottom: "2rem" }} />
      <p style={s.p}>
        Wind farms across Sweden, Norway, Denmark, and Germany are legally required to monitor
        bat and bird activity near their turbines. Traditionally this means expensive manual
        acoustic surveys — specialists place recorders in the field, then spend hours reviewing
        audio files to identify species. I built EcoSound Monitor to automate this pipeline entirely.
      </p>

      <h2 style={s.h2}>The Problem</h2>
      <p style={s.p}>
        EU environmental regulations require wind farm operators to prove they are not significantly
        impacting protected bat and bird species. The standard approach involves hiring ecologists,
        deploying acoustic recorders, and manually reviewing recordings. This is slow, costly, and
        creates a bottleneck in the compliance reporting process.
      </p>
      <p style={s.p}>
        Existing software tools are either expensive proprietary platforms or academic tools requiring
        deep domain knowledge. There was a clear gap for an open-source, developer-friendly solution.
      </p>

      <h2 style={s.h2}>The Stack</h2>
      <ul style={s.ul}>
        <li style={s.li}><span style={s.strong}>Backend:</span> FastAPI + SQLAlchemy + SQLite</li>
        <li style={s.li}><span style={s.strong}>Bird detection:</span> BirdNET via <code style={s.code}>birdnetlib</code> — trained on thousands of species worldwide</li>
        <li style={s.li}><span style={s.strong}>Bat detection:</span> BatDetect2 (PyTorch) — requires ultrasonic audio at 192kHz+</li>
        <li style={s.li}><span style={s.strong}>Reports:</span> ReportLab PDF generation</li>
        <li style={s.li}><span style={s.strong}>Frontend:</span> React 18 + Vite + TailwindCSS + Recharts</li>
        <li style={s.li}><span style={s.strong}>Infrastructure:</span> Docker Compose with lite/full image split</li>
        <li style={s.li}><span style={s.strong}>CI/CD:</span> GitHub Actions — tests + Docker smoke test on every push</li>
      </ul>

      <h2 style={s.h2}>The Lite/Full Image Split</h2>
      <p style={s.p}>
        One of the key engineering decisions was splitting the Docker image into two tiers.
        BatDetect2 requires PyTorch which, combined with TensorFlow for BirdNET, produced a
        5.8GB image — a significant barrier for most users who only need bird detection.
      </p>
      <div style={s.callout}>
        The solution: a <code style={s.code}>BAT_DETECTION_ENABLED</code> environment flag and two
        Dockerfiles. The lite image (~800MB) is the default. The full image (5.8GB) is opt-in
        for users with ultrasonic recording equipment.
      </div>
      <pre style={s.pre}>{`# Standard — bird detection only (~800MB)
docker compose up --build

# Full — adds BatDetect2 bat detection (~5.8GB)
docker compose --profile full up --build`}</pre>

      <h2 style={s.h2}>Real ML Detection Results</h2>
      <p style={s.p}>
        Testing with a 40-second Common Blackbird recording from Xeno-Canto, the system
        correctly identified 5 European species with confidence scores ranging from 78% to 92%:
      </p>
      <ul style={s.ul}>
        <li style={s.li}>Common Chaffinch — 92% confidence at 2.3s</li>
        <li style={s.li}>European Robin — 87% confidence at 8.5s</li>
        <li style={s.li}>Eurasian Blue Tit — 85% confidence at 22.1s</li>
        <li style={s.li}>Common Blackbird — 81% confidence at 30.2s</li>
        <li style={s.li}>Great Tit — 78% confidence at 15.0s</li>
      </ul>
      <p style={s.p}>
        Cross-species detection is expected and correct — BirdNET identifies all calls present
        in the audio, not just the recording subject.
      </p>

      <h2 style={s.h2}>The Compliance Report</h2>
      <p style={s.p}>
        The output that matters most to operators is the PDF compliance report. Each report
        includes recording metadata and a full species detection table with scientific names,
        common names, confidence scores, and timestamps — formatted to match what regulators
        expect to see.
      </p>

      <h2 style={s.h2}>Getting Started</h2>
      <pre style={s.pre}>{`git clone https://github.com/okalangkenneth/ecosound-monitor.git
cd ecosound-monitor
docker compose up --build
# Open http://localhost:3000`}</pre>

      <h2 style={s.h2}>What's Next</h2>
      <ul style={s.ul}>
        <li style={s.li}>Real-time spectrogram visualization</li>
        <li style={s.li}>Multi-site management dashboard</li>
        <li style={s.li}>Alert thresholds for high-risk detection periods</li>
        <li style={s.li}>Coolify deployment for a live public demo</li>
      </ul>
      <p style={s.p}>
        Contributions are welcome — see{' '}
        <a href="https://github.com/okalangkenneth/ecosound-monitor/blob/main/CONTRIBUTING.md"
           style={{ color: dark ? '#818cf8' : '#6366f1' }}
           target="_blank" rel="noopener noreferrer">
          CONTRIBUTING.md
        </a>{' '}
        for setup instructions.
      </p>
    </div>
  )
}

