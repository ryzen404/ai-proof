import Link from 'next/link'

const examples = [
  {
    title: 'Reviewer-ready proof pack',
    body: 'A structured Markdown dossier with summary, public links, workflow notes, and evidence mapping.',
    snippet: `# RizProof Project Proof Pack

## Executive Summary
RizProof is a proof-pack generator for AI builders...

## Claims and Evidence Map
1. Public repository
   - Supports: project is real and reviewable`,
  },
  {
    title: 'Grant answer draft',
    body: 'A concise answer that turns the same evidence into application-ready prose.',
    snippet: `I built RizProof, a proof-pack generator for AI builder workflows.

The core problem it solves is that builders use agents heavily, but evidence is fragmented...`,
  },
  {
    title: 'Reviewer checklist',
    body: 'A compact list that helps reviewers verify claims against links and logs.',
    snippet: `✓ Public repo exists
✓ Live demo works
✓ Workflow is documented
✓ Evidence is mapped to claims
✓ Output is exportable`,
  },
  {
    title: 'Submission bundle',
    body: 'The repo, demo, proof pack, and PRD together tell one coherent story.',
    snippet: `Repo + Demo + Proof Pack + PRD

Reviewers can inspect the source, open the demo, and validate every claim.`,
  },
]

export default function ExamplesPage() {
  return <main><nav className="nav"><div className="container nav-inner"><Link className="logo" href="/">RizProof</Link><div className="nav-links"><Link href="/builder">Builder</Link><Link className="pill" href="/">Home</Link></div></div></nav><section className="container section"><div className="section-title"><div><p className="kicker">sample outputs</p><h2>Examples</h2></div><p className="kicker">Reviewer-facing formats you can copy and adapt.</p></div><div className="grid">{examples.map((item) => <div className="card" key={item.title}><strong>{item.title}</strong><p>{item.body}</p><div className="snippet" style={{marginTop: 14}}><h4>Preview</h4><pre>{item.snippet}</pre></div></div>)}</div></section></main>
}
