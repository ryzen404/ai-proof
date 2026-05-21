import Link from 'next/link'

const features = [
  ['Project profile', 'Capture repo, demo, problem, users, and impact in a format reviewers can scan quickly.'],
  ['Agent workflow', 'Describe the build loop as a clear timeline: plan, implement, verify, package.'],
  ['Evidence inbox', 'Paste terminal logs, screenshot refs, commit links, and generated artifacts.'],
  ['Proof pack', 'Generate a Markdown dossier with claims, evidence, impact metrics, and reviewer notes.'],
  ['Grant answer', 'Compose a copy-ready application answer from real project evidence.'],
  ['Public demo', 'Runs without login, ships with sample data, and can be deployed publicly as its own proof artifact.'],
]

export default function Home() {
  return <main>
    <nav className="nav"><div className="container nav-inner"><Link className="logo" href="/">RizProof</Link><div className="nav-links"><a href="#features">Features</a><Link href="/examples">Examples</Link><a href="/PRD.md">PRD</a><Link className="pill cta" href="/builder">Open Builder</Link></div></div></nav>
    <section className="container hero"><div><div className="kicker">Reviewer-ready evidence for AI builders</div><h1>Turn agent work into proof packs.</h1><p className="lede">RizProof converts raw AI-assisted build evidence - logs, repository links, screenshots, deployment notes, and workflow summaries - into structured reviewer-facing proof packs and grant answers.</p><div className="hero-actions"><Link className="btn primary" href="/builder">Generate a proof pack</Link><Link className="btn" href="/examples">View examples</Link></div><div className="badge-row"><span className="badge">No login MVP</span><span className="badge">Markdown export</span><span className="badge">Public demo</span></div></div><div className="terminal-card"><div className="term-head"><span>rizproof://run</span><span>verify {'->'} compose {'->'} export</span></div><div className="term-body"><div><span className="green">$</span> load evidence ./agent-session.log</div><div><span className="green">$</span> link repo https://github.com/example/project</div><div><span className="orange">claim</span> Built with AI-assisted workflow</div><div><span className="blue">evidence</span> terminal logs, README, demo, generated pack</div><br /><div><span className="green">✓</span> Proof pack generated</div><div><span className="green">✓</span> Application answer ready</div></div></div></section>
    <section id="features" className="container section"><div className="section-title"><h2>Small scope. Strong signal.</h2><p className="kicker">MVP features</p></div><div className="grid">{features.map(([title, body]) => <div className="card" key={title}><strong>{title}</strong><p>{body}</p></div>)}</div></section>
    <footer className="footer"><div className="container">RizProof - built to make AI agent usage auditable.</div></footer>
  </main>
}
