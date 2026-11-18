/* =====================================================================
   Shared helpers and card templates, rendered at build time.
   Every page imports from here, so markup stays consistent.
   ===================================================================== */
import { SITE } from '../data/site.js';
import { SITE_URL } from '../config.js';

export const S = SITE;
export const C = SITE.company;

/* ---------- text helpers ---------- */
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
/** escape text, then highlight [PLACEHOLDERS] so they are easy to spot */
export const ph = s => esc(s).replace(/\[[^\]]+\]/g, m => `<mark class="ph">${m}</mark>`);
/** trusted HTML (journal bodies): only highlight placeholders */
export const phHtml = s => String(s).replace(/\[[^\]<]+\]/g, m => `<mark class="ph">${m}</mark>`);
export const isPh = s => /^\[.*\]$/.test(String(s).trim());
/** plain text for meta tags and structured data: placeholders removed */
export const plain = s => String(s ?? '').replace(/<[^>]+>/g, '').replace(/\[[^\]]+\]/g, '').replace(/\s+/g, ' ').trim();

export const img = n => `/images/${n}.jpg`;
export const abs = path => SITE_URL + path;
export const waLink = text => `https://wa.me/${C.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;
export const mailLink = (subject, body) => `mailto:${C.email}?subject=${encodeURIComponent(subject || 'Trip enquiry')}${body ? '&body=' + encodeURIComponent(body) : ''}`;

/* ---------- URLs ---------- */
export const U = {
  home: '/',
  tours: '/tours/',
  tour: slug => `/tours/${slug}/`,
  festivals: '/festivals/',
  info: '/travel-info/',
  faq: '/faq/',
  journal: '/journal/',
  post: slug => `/journal/${slug}/`,
  about: '/about/',
  guide: slug => `/guides/${slug}/`,
  contact: '/contact/',
};
export const CAT_LABEL = { cultural: 'Cultural', festival: 'Festival', trek: 'Trek' };

/* ---------- icons ---------- */
export const I = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
  logo: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M16 3v4M11 9h10l-2 4h-6zM8 13h16l-2 5H10zM6 18h20v11H6zM13 29v-6h6v6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>',
  person: '<svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true"><circle cx="32" cy="22" r="12"/><path d="M8 60c0-14 10.7-22 24-22s24 8 24 22z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
  owl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="7" cy="13" r="4"/><circle cx="17" cy="13" r="4"/><path d="M11 13h2M3 9l2-3h14l2 3"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3 2 21h20L12 3Z"/><path d="M12 10v5M12 18v.5"/></svg>',
};
const small = (svg, css) => svg.replace('<svg', `<svg style="${css}"`);

/* ---------- card templates (return HTML strings) ---------- */
export const R = {
  cat: c => `<article class="cat rv">
      <a class="pcard" href="${U.tours}#${c.key}" aria-label="${esc(c.name)} tours"><img src="${img(c.img)}" alt="" loading="lazy"></a>
      <h3 class="h3">${esc(c.name)}</h3><p>${esc(c.text)}</p>
      <a class="see" href="${U.tours}#${c.key}">View tours ${small(I.right, 'width:14px;height:14px')}</a></article>`,

  dep: f => {
    const href = f.tour ? U.tour(f.tour) : `${U.contact}?interest=${encodeURIComponent(f.name)}`;
    return `<article class="dep rv" id="${f.slug}">
      <div class="im"><img src="${img(f.img)}" alt="" loading="lazy"><span class="chip green">Customisable</span></div>
      <div class="body">
        <div class="date">${f.start ? `<time datetime="${f.start}">${ph(f.dates)}</time>` : ph(f.dates)}</div>
        <h3>${esc(f.name)}</h3>
        <div class="usual">${small(I.pin, 'width:13px;height:13px;vertical-align:-2px;margin-right:4px')}${esc(f.place)} · usually ${esc(f.usual)}</div>
        <div class="meta"><span class="chip line">${esc(f.days)}</span><span class="chip blue">${ph(f.group)}</span></div>
        <a class="more" href="${href}">${f.tour ? 'See the trip' : 'Plan this festival'} ${I.right}</a>
      </div></article>`;
  },

  guide: g => `<a class="gcard rv" href="${U.guide(g.slug)}">
      <div class="gphoto">${isPh(g.photo) ? I.person + ph(g.photo) : `<img src="${esc(g.photo)}" alt="${esc(g.name)}" loading="lazy">`}</div>
      <h3>${ph(g.name)}</h3><div class="spec">${ph(g.speciality)}</div><p>${ph(g.line)}</p>
      <span class="go see">Meet your guide →</span></a>`,

  review: r => {
    const n = parseFloat(r.rating);
    const stars = isNaN(n) ? `<span class="s" aria-hidden="true">★★★★★</span>${ph(r.rating)}` : `<span class="s" aria-label="${n} out of 5">${'★'.repeat(Math.round(n))}${'☆'.repeat(5 - Math.round(n))}</span>`;
    const initials = r.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2);
    return `<article class="rcard">
      <div class="who"><span class="av" aria-hidden="true">${esc(initials)}</span><div><b>${ph(r.name)}</b><small>${ph(r.country)} · ${ph(r.when)}</small></div></div>
      <div class="rating">${stars}</div>
      <blockquote>“${ph(r.text)}”</blockquote>
      <div class="trip">Trip: ${ph(r.trip)}</div></article>`;
  },

  tour: t => `<article class="tcard rv">
      <a class="pcard" href="${U.tour(t.slug)}" aria-label="${esc(t.name)}"><img src="${img(t.img)}" alt="" loading="lazy">
        <span class="chips"><span class="chip">${t.days} days</span><span class="chip">${CAT_LABEL[t.cat]}</span>${t.grade ? `<span class="chip">${ph(t.grade)}</span>` : ''}</span></a>
      <div class="reg">${esc(t.region)}</div>
      <h3><a href="${U.tour(t.slug)}">${esc(t.name)}</a></h3><p>${ph(t.summary)}</p>
      <a class="see" href="${U.tour(t.slug)}">See the journey →</a></article>`,

  post: p => `<article class="post-card rv" data-cat="${esc(p.cat)}">
      <a class="pcard" href="${U.post(p.slug)}" aria-label="${esc(p.title)}"><img src="${img(p.img)}" alt="" loading="lazy"></a>
      <div class="post-meta"><span class="chip blue">${esc(p.cat)}</span>${p.mins} min read</div>
      <h3><a href="${U.post(p.slug)}">${esc(p.title)}</a></h3><p>${esc(p.excerpt)}</p></article>`,

  office: o => `<article class="office rv">
      <span class="role">${esc(o.role)}</span>
      <h3>${esc(o.name)}</h3>
      <address>${o.lines.map(esc).join('<br>')}</address>
      ${o.phone ? `<a class="o-link" href="tel:${o.phone.replace(/[^+\d]/g, '')}">${I.phone}${esc(o.phone)}</a>` : ''}
      ${o.note ? `<small>${esc(o.note)}</small>` : ''}
      <a class="o-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.map)}" target="_blank" rel="noopener">${I.pin}View on map</a>
    </article>`,

  qa: (f, i, open, pre) => `<div class="qa${open ? ' open' : ''}">
      <button aria-expanded="${open}" aria-controls="${pre}${i}" id="${pre}q${i}"><span>${esc(f.q)}</span><i class="pm" aria-hidden="true"></i></button>
      <div class="ans" id="${pre}${i}" role="region" aria-labelledby="${pre}q${i}"><div><p>${ph(f.a)}</p></div></div></div>`,

  trust: () => {
    const icons = [I.shield, I.users, I.flag, I.owl];
    return S.trust.map((t, i) => {
      const live = !isPh(t.url);
      return `<a href="${live ? t.url : '#'}"${live ? ' target="_blank" rel="noopener"' : ''}><span class="ic">${icons[i]}</span><span><b>${ph(t.name)}</b><small>${ph(t.sub)}</small></span></a>`;
    }).join('');
  },
};

/* ---------- structured data ---------- */
export const orgLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': SITE_URL + '/#agency',
  name: C.name,
  url: SITE_URL + '/',
  image: abs('/images/monks-hero.jpg'),
  description: 'Bhutanese-owned, licensed travel agency for slow, private journeys in Bhutan: cultural tours, festival trips and treks led by local guides.',
  telephone: C.phone,
  email: C.email,
  address: { '@type': 'PostalAddress', streetAddress: 'Babena – Samteling', addressLocality: 'Thimphu', postalCode: '11001', addressCountry: 'BT' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' }],
  areaServed: { '@type': 'Country', name: 'Bhutan' },
  sameAs: [C.instagram],
  department: C.offices.slice(1).map(o => ({
    '@type': 'LocalBusiness', name: `${C.name} – ${o.role}`, telephone: o.phone || undefined,
    address: { '@type': 'PostalAddress', streetAddress: o.lines.join(', ') },
  })),
});

export const crumbsLd = items => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});
