export type Evidence = { title: string; type: string; source: string; content: string; claim: string };
export type ProofInput = {
  projectName: string; tagline: string; githubUrl: string; demoUrl: string;
  problem: string; users: string; impact: string; agentTool: string; modelSeries: string;
  workflow: string; usage: string; verification: string; evidence: Evidence[];
};

const fallback = (value: string, alt: string) => value.trim() || alt;
const sentence = (value: string, alt: string) => fallback(value, alt).replace(/[.!?]+$/, "");

export function generateProofPack(data: ProofInput) {
  const evidence = data.evidence.filter((item) => item.title || item.source || item.content || item.claim);
  const evidenceLines = evidence.length
    ? evidence.map((item, i) => `${i + 1}. **${fallback(item.title, "Untitled evidence")}** (${item.type})\n   - Supports: ${fallback(item.claim, "General project credibility")}\n   - Source: ${fallback(item.source, "Pasted/local evidence")}\n   - Notes: ${fallback(item.content, "No notes provided.")}`).join("\n")
    : "1. **Repository and demo links**\n   - Supports: project existence and public reviewability\n   - Source: GitHub / Vercel URLs\n   - Notes: Add logs or screenshots for a stronger pack.";

  return `# ${fallback(data.projectName, "RizProof Project")} Proof Pack\n\n## Executive Summary\n${fallback(data.projectName, "This project")} is ${fallback(data.tagline, "a proof-pack generator for AI builders")} designed for ${fallback(data.users, "AI builders and reviewers")}. It solves: ${sentence(data.problem, "the problem of fragmented evidence during grant and hackathon reviews")}.\n\n## Public Links\n- GitHub: ${fallback(data.githubUrl, "Not provided yet")}\n- Live demo: ${fallback(data.demoUrl, "Not provided yet")}\n\n## AI Workflow\n- Primary agent tool: ${fallback(data.agentTool, "AI-assisted workflow")}\n- Primary model series: ${fallback(data.modelSeries, "Routed models")}\n- Workflow: ${fallback(data.workflow, "Plan the task, generate implementation steps, build locally, verify outputs, then prepare reviewer-facing documentation.")}\n\n## Usage and Impact\n${fallback(data.usage, "The workflow reduces manual documentation time and turns raw agent sessions into clear evidence artifacts.")}\n\nImpact summary: ${fallback(data.impact, "Builders can submit clearer applications while reviewers get structured evidence.")}\n\n## Verification Method\n${fallback(data.verification, "The proof pack maps each claim to public links, logs, screenshots, or generated artifacts.")}\n\n## Claims and Evidence Map\n${evidenceLines}\n\n## Reviewer Notes\nThis pack is generated to make AI-assisted work easier to audit. Reviewers should be able to inspect the repository, open the live demo, and compare each major claim against supporting evidence.\n`;
}

export function generateGrantAnswer(data: ProofInput) {
  return `I built ${fallback(data.projectName, "RizProof")}, ${fallback(data.tagline, "a proof-pack generator for AI builder workflows")}. The core problem it solves is that builders increasingly use agents to plan, code, debug, and ship projects, but their evidence is scattered across logs, screenshots, commits, and deployment links. This makes grant and credit applications harder for both builders and human reviewers.\n\nThe product turns messy workflow evidence into a structured proof pack. A builder enters their project profile, GitHub repository, live demo URL, workflow summary, impact metrics, and supporting evidence. RizProof then generates a reviewer-ready Markdown dossier with an executive summary, AI workflow, claims mapped to evidence, usage impact, and verification notes.\n\nFor this build, the workflow uses ${fallback(data.agentTool, "AI-assisted workflow")} with ${fallback(data.modelSeries, "routed models")} to plan the product, define the PRD, generate the app structure, and prepare proof artifacts. The verification loop is simple: build locally, document the architecture, deploy publicly, and connect every major claim to a repository, demo, log, screenshot, or generated artifact.\n\nThe impact is practical: RizProof reduces the time required to prepare submissions, helps reviewers evaluate AI-assisted work faster, and creates a reusable evidence format for hackathons, builder grants, and open-source applications.`;
}
