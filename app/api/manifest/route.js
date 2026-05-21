export async function GET() {
  return Response.json({ ok: true, name: 'Ai Proof', scope: 'proof-pack builder', mode: 'local-first' })
}
