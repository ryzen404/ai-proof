import Link from 'next/link'

const examples = [
  ['Example proof pack', 'A full Markdown dossier with project summary, public links, workflow notes, and evidence map.'],
  ['Grant answer draft', 'A concise answer that turns the same evidence into application-ready prose.'],
  ['Reviewer checklist', 'A compact list that helps reviewers verify claims against links and logs.'],
]

export default function ExamplesPage() {
  return <main><nav className="nav"><div className="container nav-inner"><Link className="logo" href="/">RizProof</Link><div className="nav-links"><Link href="/builder">Builder</Link><Link className="pill" href="/">Home</Link></div></div></nav><section className="container section"><div className="section-title"><div><p className="kicker">sample outputs</p><h2>Examples</h2></div><p className="kicker">Reviewer-facing formats you can copy and adapt.</p></div><div className="grid">{examples.map(([title, body]) => <div className="card" key={title}><strong>{title}</strong><p>{body}</p></div>)}</div></section></main>
}
