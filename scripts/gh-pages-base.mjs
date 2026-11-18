/* For the GitHub Pages preview only: the site lives under /555-holidays/,
   so prefix every root-relative link in the built HTML with that folder.
   The real site (555holidays.com) is built without this step.
   Usage: node scripts/gh-pages-base.mjs /555-holidays/ */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.argv[2] || '/').replace(/\/?$/, '/');
if (base === '/') { console.log('No base given, nothing to do.'); process.exit(0); }

const walk = dir => readdirSync(dir).flatMap(f => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let files = 0, links = 0;
for (const file of walk('dist').filter(f => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  // href="/..." src="/..." action="/..." but not protocol-relative "//"
  const out = html.replace(/\b(href|src|action)="\/(?!\/)/g, (m, attr) => { links++; return `${attr}="${base}`; });
  if (out !== html) { writeFileSync(file, out); files++; }
}
console.log(`Prefixed ${links} links in ${files} pages with ${base}`);
