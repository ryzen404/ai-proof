export async function GET() {
  return new Response(`# PRD - Ai Proof

## Overview
Ai Proof is a proof-pack generator for AI builders. It converts messy evidence such as agent logs, terminal output, repository links, screenshots, and deployment URLs into structured reviewer-ready proof packs for grants, hackathons, and credit programs.

## Problem
AI builders often use agents heavily, but evidence is fragmented across tools. Reviewers need to know what was built, how it was verified, and which evidence supports each claim.

## Goals
- Generate a proof pack quickly.
- Produce copy-ready application answers.
- Map project claims to evidence items.
- Run publicly without login for the MVP.
- Deploy easily to Vercel.

## Non-Goals
- No auth in MVP.
- No permanent database in MVP.
- No automatic external form submission.
- No wallet or payment flows.

## MVP Features
1. Project profile form.
2. Agent workflow capture.
3. Evidence inbox.
4. Markdown proof-pack generator.
5. Application answer composer.
6. Example gallery.
7. Public Vercel-ready demo.
`, { headers: { 'content-type': 'text/markdown; charset=utf-8' } })
}
