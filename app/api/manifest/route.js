export async function GET() {
  return Response.json({ ok: true, name: 'RizProof', scope: 'proof-pack builder', mode: 'local-first' })
}
