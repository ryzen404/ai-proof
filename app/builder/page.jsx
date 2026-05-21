"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { generateGrantAnswer, generateProofPack } from "@/lib/generate-proof";

const sample = {
  projectName: "Ai Proof",
  tagline: "a reviewer-ready proof-pack generator for AI builder workflows",
  githubUrl: "https://github.com/yourname/rizproof",
  demoUrl: "https://ai-proof.vercel.app",
  problem: "AI builders use agents heavily, but evidence is fragmented across logs, screenshots, commits, and deployment notes.",
  users: "grant applicants, hackathon builders, open-source developers, and reviewers",
  impact: "It reduces application preparation time and helps reviewers verify AI-assisted work faster.",
  agentTool: "AI agent workflow",
  modelSeries: "Routed models / MiMo-style workflow",
  workflow: "Define PRD, scaffold the web app, generate proof-pack logic, write docs, run local validation, then prepare GitHub and Vercel evidence.",
  usage: "A single builder can turn raw logs and repo links into a structured proof pack in under three minutes.",
  verification: "Each claim is mapped to public links, logs, screenshots, or generated Markdown artifacts.",
  evidence: [
    { title: "Public repository", type: "GitHub link", source: "https://github.com/yourname/rizproof", content: "Open-source code, README, docs, and examples.", claim: "Project is real and reviewable." },
    { title: "Live demo", type: "demo URL", source: "https://ai-proof.vercel.app", content: "Public no-login builder flow.", claim: "Project is deployed and usable." },
    { title: "Build session", type: "agent session", source: "local terminal screenshot", content: "Agent planned PRD, created app files, and ran validation.", claim: "AI workflow was used to build the project." },
  ],
};

const blankEvidence = { title: "", type: "terminal log", source: "", content: "", claim: "" };

export default function BuilderPage() {
  const [data, setData] = useState({ ...sample, evidence: [blankEvidence] });
  const [mode, setMode] = useState("pack");
  const [copied, setCopied] = useState(false);
  const output = useMemo(() => mode === "pack" ? generateProofPack(data) : generateGrantAnswer(data), [data, mode]);
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));
  const updateEvidence = (index, key, value) => setData((prev) => ({ ...prev, evidence: prev.evidence.map((item, i) => i === index ? { ...item, [key]: value } : item) }));
  const copy = async () => { await navigator.clipboard.writeText(output); setCopied(true); window.setTimeout(() => setCopied(false), 1400); };
  const download = () => { const blob = new Blob([output], { type: "text/markdown" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = mode === "pack" ? "proof-pack.md" : "grant-answer.md"; a.click(); URL.revokeObjectURL(url); };
  const exportPdf = () => window.print();

  return <main>
    <nav className="nav no-print"><div className="container nav-inner"><Link className="logo" href="/">Ai Proof</Link><div className="nav-links"><Link href="/examples">Examples</Link><Link className="pill" href="/">Home</Link></div></div></nav>
    <section className="container section"><div className="section-title"><div><p className="kicker">local-first MVP</p><h2>Proof Pack Builder</h2></div><p className="kicker">Isi data project, tempel bukti, lalu export dossier untuk reviewer.</p></div>
      <div className="stats no-print"><div className="stat"><b>3 min</b><span>proof pack</span></div><div className="stat"><b>2 modes</b><span>pack + answer</span></div><div className="stat"><b>1 click</b><span>pdf export</span></div></div>
      <div className="builder" style={{marginTop: 18}}><div className="panel no-print"><div className="input-row"><button type="button" className="btn primary" onClick={() => setData(sample)}>Load sample</button><button type="button" className="btn" onClick={copy}>{copied ? "Copied" : "Copy MD"}</button><button type="button" className="btn" onClick={download}>Download MD</button><button type="button" className="btn" onClick={exportPdf}>Export PDF</button></div>
        <div className="field"><label>Project name</label><input value={data.projectName} onChange={(e)=>update("projectName", e.target.value)} /></div>
        <div className="field"><label>Tagline</label><input value={data.tagline} onChange={(e)=>update("tagline", e.target.value)} /></div>
        <div className="field"><label>GitHub URL</label><input value={data.githubUrl} onChange={(e)=>update("githubUrl", e.target.value)} /></div>
        <div className="field"><label>Live demo URL</label><input value={data.demoUrl} onChange={(e)=>update("demoUrl", e.target.value)} /></div>
        <div className="field"><label>Problem solved</label><textarea value={data.problem} onChange={(e)=>update("problem", e.target.value)} /></div>
        <div className="field"><label>Users</label><input value={data.users} onChange={(e)=>update("users", e.target.value)} /></div>
        <div className="field"><label>Impact</label><textarea value={data.impact} onChange={(e)=>update("impact", e.target.value)} /></div>
        <div className="field"><label>Workflow</label><textarea value={data.workflow} onChange={(e)=>update("workflow", e.target.value)} /></div>
        <div className="field"><label>Usage</label><textarea value={data.usage} onChange={(e)=>update("usage", e.target.value)} /></div>
        <div className="field"><label>Verification</label><textarea value={data.verification} onChange={(e)=>update("verification", e.target.value)} /></div>
        <h3>Evidence</h3>{data.evidence.map((item, index) => <div className="panel" key={index} style={{marginBottom: 12}}>
          <div className="field"><label>Title</label><input value={item.title} onChange={(e)=>updateEvidence(index, "title", e.target.value)} /></div>
          <div className="field"><label>Type</label><select value={item.type} onChange={(e)=>updateEvidence(index, "type", e.target.value)}><option>terminal log</option><option>agent session</option><option>screenshot</option><option>GitHub link</option><option>demo URL</option><option>generated artifact</option><option>usage proof</option></select></div>
          <div className="field"><label>Source</label><input value={item.source} onChange={(e)=>updateEvidence(index, "source", e.target.value)} /></div>
          <div className="field"><label>Claim supported</label><input value={item.claim} onChange={(e)=>updateEvidence(index, "claim", e.target.value)} /></div>
          <div className="field"><label>Notes</label><textarea value={item.content} onChange={(e)=>updateEvidence(index, "content", e.target.value)} /></div>
        </div>)}
        <button type="button" className="btn" onClick={() => setData((prev) => ({ ...prev, evidence: [...prev.evidence, { ...blankEvidence }] }))}>Add evidence</button></div>
        <div className="panel"><div className="title-tag"><span className="title-dot"></span><span>{mode === "pack" ? "Proof Pack" : "Grant Answer"}</span></div><div className="hero-actions no-print" style={{marginTop: 0}}><button type="button" className={mode === "pack" ? "btn primary" : "btn"} onClick={() => setMode("pack")}>Proof Pack</button><button type="button" className={mode === "answer" ? "btn primary" : "btn"} onClick={() => setMode("answer")}>Grant Answer</button></div><pre className="panel output pdf-only">{output}</pre><pre className="panel output">{output}</pre><div className="mini-note no-print">PDF export uses browser print dialog. Choose <b>Save as PDF</b> in browser print dialog.</div></div></div>
    </section>
  </main>
}
