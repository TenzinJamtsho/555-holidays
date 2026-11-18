import { LAUNCHED, SITE_URL } from '../config.js';

/* Preview: block everything. Launched: welcome search engines and AI assistants. */
export function GET() {
  const body = LAUNCHED
    ? `# Search engines and AI assistants are welcome
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`
    : `# Preview site: not for indexing (set LAUNCHED = true in src/config.js at launch)
User-agent: *
Disallow: /
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
