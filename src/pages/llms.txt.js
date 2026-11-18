import { SITE } from '../data/site.js';
import { SITE_URL } from '../config.js';

/* llms.txt: a plain-text guide to the site for AI assistants */
const clean = s => String(s).replace(/\[[^\]]+\]/g, '').replace(/\s+/g, ' ').trim();
export function GET() {
  const C = SITE.company;
  const lines = [
    `# ${C.name}`,
    '',
    `> Bhutanese-owned, licensed travel agency (Licence No. ${C.licence}) based in Thimphu, Bhutan, specialising in slow, private journeys: cultural tours, tshechu festival trips and treks, led by local guides. Offices in Thimphu, Washington DC (USA) and Panvel (India).`,
    '',
    `Contact: ${C.email} · WhatsApp ${C.phone} · ${C.address}`,
    '',
    '## Main pages',
    `- [Tours](${SITE_URL}/tours/): all Bhutan tour packages`,
    `- [Festival calendar 2027](${SITE_URL}/festivals/): tshechu dates`,
    `- [Travel info](${SITE_URL}/travel-info/): visa, Sustainable Development Fee, getting there, money, etiquette`,
    `- [FAQ](${SITE_URL}/faq/): cost, visa, guides, safety`,
    `- [About](${SITE_URL}/about/) · [Contact](${SITE_URL}/contact/)`,
    '',
    '## Tours',
    ...SITE.tours.map(t => `- [${t.name}](${SITE_URL}/tours/${t.slug}/): ${t.days} days, ${t.region}. ${clean(t.summary)}`.replace(/\s+$/, '')),
    '',
    '## Journal',
    ...SITE.posts.map(p => `- [${p.title}](${SITE_URL}/journal/${p.slug}/): ${p.excerpt}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
