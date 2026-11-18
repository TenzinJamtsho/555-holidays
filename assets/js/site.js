/* =====================================================================
   555 Holidays — shared site script
   - injects the navigation and footer on every page
   - renders cards from window.SITE (assets/js/data.js)
   - FAQ accordions, enquiry form (WhatsApp / email), scroll reveal
   ===================================================================== */
(function () {
  const S = window.SITE;
  const C = S.company;
  document.documentElement.classList.remove('no-js');

  /* ---------- helpers ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // escape text, then highlight [PLACEHOLDERS]
  const ph = s => esc(s).replace(/\[[^\]]+\]/g, m => `<mark class="ph">${m}</mark>`);
  // for trusted HTML strings from data.js (blog bodies): only highlight placeholders
  const phHtml = s => String(s).replace(/\[[^\]<]+\]/g, m => `<mark class="ph">${m}</mark>`);
  const isPh = s => /^\[.*\]$/.test(String(s).trim());
  const param = k => new URLSearchParams(location.search).get(k);
  const img = n => `images/${n}.jpg`;
  const waLink = text => `https://wa.me/${C.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;
  const mailLink = (subject, body) => `mailto:${C.email}?subject=${encodeURIComponent(subject || 'Trip enquiry')}${body ? '&body=' + encodeURIComponent(body) : ''}`;

  const I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
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
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>'
  };

  const NAV = [
    ['index.html', 'Home', 'home'],
    ['tours.html', 'Tours', 'tours'],
    ['travel-info.html', 'Travel Info', 'info'],
    ['blog.html', 'Journal', 'blog'],
    ['faq.html', 'FAQ', 'faq'],
    ['about.html', 'About', 'about'],
    ['contact.html', 'Contact', 'contact']
  ];
  const page = document.body.dataset.page;

  /* ---------- navigation ---------- */
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.className = 'hnav';
    el.innerHTML = `
      <a href="index.html" class="brand" aria-label="${esc(C.name)} home">${I.logo}${esc(C.name)}</a>
      <nav id="site-nav" aria-label="Main">${NAV.map(([h, t, k]) => `<a href="${h}"${k === page ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
      <div class="nav-r">
        <a href="contact.html" class="getstarted">Plan a Trip</a>
        <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>`;
    const nav = el.querySelector('nav'), b = el.querySelector('.burger');
    b.addEventListener('click', () => b.setAttribute('aria-expanded', nav.classList.toggle('open')));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); b.setAttribute('aria-expanded', false); b.focus(); } });
  });

  /* ---------- footer ---------- */
  document.querySelectorAll('[data-footer]').forEach(el => {
    el.className = 'site-footer';
    el.innerHTML = `
      <img src="images/gal-1.jpg" alt="" loading="lazy">
      <div class="wrap">
        <div class="fgrid">
          <div class="fbrand">
            <a href="index.html" class="brand">${I.logo}${esc(C.name)}</a>
            <p>A small, Bhutanese-owned travel agency in Thimphu, planning slow, unhurried journeys through the Land of the Thunder Dragon.</p>
            <a class="c" href="${waLink()}" target="_blank" rel="noopener">${I.wa}WhatsApp ${esc(C.phone)}</a>
            <a class="c" href="mailto:${C.email}">${I.mail}${esc(C.email)}</a>
            <span class="c">${I.pin}${esc(C.address)}</span>
            <span class="c">${I.clock}Mon – Sat, 9 AM – 6 PM</span>
            <span class="c">${I.globe}Offices in Thimphu · Washington, DC · Panvel, India</span>
            <div class="soc">
              <a href="${C.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.insta}</a>
              <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
              <a href="mailto:${C.email}" aria-label="Email">${I.mail}</a>
            </div>
          </div>
          <div><h4>Explore</h4><ul>
            <li><a href="tours.html#cultural">Cultural tours</a></li><li><a href="tours.html#festival">Festival tours</a></li>
            <li><a href="tours.html#trek">Treks</a></li><li><a href="index.html#experiences">Moments to live</a></li><li><a href="about.html#guides">Our guides</a></li></ul></div>
          <div><h4>Plan</h4><ul>
            <li><a href="travel-info.html">Travel info</a></li><li><a href="travel-info.html#visa">Visa &amp; entry</a></li>
            <li><a href="travel-info.html#costs">Costs &amp; SDF</a></li><li><a href="faq.html">FAQ</a></li><li><a href="blog.html">Journal</a></li></ul></div>
          <div>
            <h4>Letters from Bhutan</h4>
            <form class="sub" data-newsletter><label class="sr" for="nl-email">Email address</label><input id="nl-email" type="email" name="email" placeholder="Email address" required><button type="submit" aria-label="Subscribe">${I.right}</button></form>
            <p class="fsmall">Festival dates, seasonal notes and stories from our valley. Only a few emails a year.</p>
            <div class="fmsg" role="status"></div>
          </div>
        </div>
        <div class="fbot"><span>© ${new Date().getFullYear()} ${esc(C.name)} · ${esc(C.domain)} · Licence ${ph(C.licence)}</span><span><a href="faq.html#planning-cost">Terms &amp; Conditions ${ph('[ADD PAGE]')}</a> | <a href="#">Privacy Policy ${ph('[ADD PAGE]')}</a></span></div>
        <details class="credits"><summary>Photo credits</summary><ul>${S.credits.map(c => `<li>${esc(c[0])}: <a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(c[3])}" target="_blank" rel="noopener">${esc(c[1])}</a>, ${esc(c[2])}</li>`).join('')}</ul></details>
      </div>`;
    el.querySelector('[data-newsletter]').addEventListener('submit', e => {
      e.preventDefault();
      const email = e.target.email.value.trim();
      el.querySelector('.fmsg').textContent = 'Thank you. Your email app will open to confirm.';
      location.href = mailLink('Newsletter sign-up', `Please add ${email} to your newsletter.`);
    });
  });

  /* ---------- card renderers ---------- */
  const R = {
    exp: (e, i = 0) => `<article class="xcard" style="animation-delay:${Math.min(i, 11) * 45}ms">
        <img src="${img(e.img)}" alt="" loading="lazy">
        <span class="xtag" data-t="${esc(e.tag)}"><i aria-hidden="true"></i>${esc(e.tag)}</span>
        <div class="txt"><h3>${esc(e.title)}</h3><p>${ph(e.line)}</p></div></article>`,

    cat: c => `<article class="cat rv">
        <a class="pcard" href="tours.html#${c.key}" aria-label="${esc(c.name)} tours"><img src="${img(c.img)}" alt="" loading="lazy"></a>
        <h3 class="h3">${esc(c.name)}</h3><p>${esc(c.text)}</p>
        <a class="see" href="tours.html#${c.key}">View tours ${I.right.replace('<svg', '<svg style="width:14px;height:14px"')}</a></article>`,

    dep: f => {
      const href = f.tour ? `tour.html?t=${f.tour}` : `contact.html?interest=${encodeURIComponent(f.name)}`;
      return `<article class="dep rv">
        <div class="im"><img src="${img(f.img)}" alt="" loading="lazy"><span class="chip green">Customisable</span></div>
        <div class="body">
          <div class="date">${ph(f.dates)}</div>
          <h3>${esc(f.name)}</h3>
          <div class="usual">${I.pin.replace('<svg', '<svg style="width:13px;height:13px;vertical-align:-2px;margin-right:4px"')}${esc(f.place)} · usually ${esc(f.usual)}</div>
          <div class="meta"><span class="chip line">${esc(f.days)}</span><span class="chip blue">${ph(f.group)}</span></div>
          <a class="more" href="${href}">${f.tour ? 'See the trip' : 'Plan this festival'} ${I.right}</a>
        </div></article>`;
    },

    guide: g => `<a class="gcard rv" href="guide.html?g=${g.slug}">
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

    tour: t => {
      const label = { cultural: 'Cultural', festival: 'Festival', trek: 'Trek' }[t.cat];
      return `<article class="tcard rv">
        <a class="pcard" href="tour.html?t=${t.slug}" aria-label="${esc(t.name)}"><img src="${img(t.img)}" alt="" loading="lazy">
          <span class="chips"><span class="chip">${t.days} days</span><span class="chip">${label}</span>${t.grade ? `<span class="chip">${ph(t.grade)}</span>` : ''}</span></a>
        <div class="reg">${esc(t.region)}</div>
        <h3>${esc(t.name)}</h3><p>${ph(t.summary)}</p>
        <a class="see" href="tour.html?t=${t.slug}">See the journey →</a></article>`;
    },

    post: p => `<article class="post-card rv">
        <a class="pcard" href="post.html?p=${p.slug}" aria-label="${esc(p.title)}"><img src="${img(p.img)}" alt="" loading="lazy"></a>
        <div class="post-meta"><span class="chip blue">${esc(p.cat)}</span>${p.mins} min read</div>
        <h3><a href="post.html?p=${p.slug}">${esc(p.title)}</a></h3><p>${esc(p.excerpt)}</p></article>`,

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
        <div class="ans" id="${pre}${i}" role="region" aria-labelledby="${pre}q${i}"><div><p>${ph(f.a)}</p></div></div></div>`
  };

  /* ---------- accordions ---------- */
  document.addEventListener('click', e => {
    const b = e.target.closest('.qa > button'); if (!b) return;
    const qa = b.parentElement, open = qa.classList.toggle('open');
    b.setAttribute('aria-expanded', open);
  });

  /* ---------- enquiry form ---------- */
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const INTERESTS = ['Culture & dzongs', 'Festivals', 'Trekking', 'Food & farm stays', 'Spiritual', 'Nature & wildlife', 'Crafts', 'Photography'];
  function enquiryForm(el, opts = {}) {
    const id = 'f' + Math.random().toString(36).slice(2, 7);
    el.classList.add('eform');
    el.setAttribute('novalidate', '');
    el.innerHTML = `
      <h3>${esc(opts.title || 'Tell us a little about your trip')}</h3>
      <label class="fld"><span>Your name</span><input name="name" autocomplete="name" required></label>
      <label class="fld"><span>Email</span><input name="email" type="email" autocomplete="email" required></label>
      <label class="fld"><span>Travel month</span><select name="month"><option value="">Not sure yet</option>${MONTHS.map(m => `<option>${m}</option>`).join('')}</select></label>
      <label class="fld"><span>Number of travellers</span><select name="travellers">${['1', '2', '3', '4', '5', '6', '7–10', '10+'].map(n => `<option${n === '2' ? ' selected' : ''}>${n}</option>`).join('')}</select></label>
      <fieldset class="interests"><legend>What draws you to Bhutan?</legend><div class="opts">
        ${INTERESTS.map((x, i) => `<label><input type="checkbox" name="interests" value="${esc(x)}" id="${id}i${i}"${opts.interest && x.toLowerCase().includes(String(opts.interest).toLowerCase().split(' ')[0]) ? ' checked' : ''}><span>${esc(x)}</span></label>`).join('')}
      </div></fieldset>
      <label class="fld full"><span>Anything else? <span class="muted" style="font-weight:400">(optional)</span></span><textarea name="message" placeholder="Dates, pace, special occasions, dietary needs…">${opts.message ? esc(opts.message) : ''}</textarea></label>
      <div class="form-actions">
        <button class="btn btn-wa" type="submit" value="whatsapp">${I.wa}Send on WhatsApp</button>
        <button class="btn btn-dark" type="submit" value="email">${I.mail}Send by email</button>
      </div>
      <div class="form-msg" role="status"></div>
      <p class="form-fine">Free and no-obligation. We reply personally, usually within [XX] hours.</p>`;
    el.querySelector('.form-fine').innerHTML = ph(el.querySelector('.form-fine').textContent);
    el.addEventListener('submit', e => {
      e.preventDefault();
      const msg = el.querySelector('.form-msg');
      if (!el.checkValidity()) { msg.style.color = '#c0392b'; msg.textContent = 'Please add your name and a valid email address.'; el.reportValidity(); return; }
      const f = new FormData(el);
      const text = [
        `Hello ${C.name}, I'd love a free trip plan.`,
        opts.tour ? `Trip: ${opts.tour}` : null,
        `Name: ${f.get('name')}`, `Email: ${f.get('email')}`,
        `Travel month: ${f.get('month') || 'Not sure yet'}`, `Travellers: ${f.get('travellers')}`,
        `Interests: ${f.getAll('interests').join(', ') || '–'}`,
        f.get('message') ? `Notes: ${f.get('message')}` : null
      ].filter(Boolean).join('\n');
      msg.style.color = '';
      const via = e.submitter && e.submitter.value;
      if (via === 'whatsapp') { msg.textContent = 'Opening WhatsApp…'; window.open(waLink(text), '_blank', 'noopener'); }
      else { msg.textContent = 'Opening your email app…'; location.href = mailLink(opts.tour ? `Trip plan: ${opts.tour}` : 'Free trip plan request', text); }
    });
  }
  document.querySelectorAll('[data-enquiry]').forEach(el => enquiryForm(el, {
    tour: el.dataset.tour || null,
    interest: el.dataset.interest || param('interest'),
    title: el.dataset.title
  }));

  /* ---------- hero parallax ---------- */
  const word = document.querySelector('.hero .word');
  if (word && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addEventListener('scroll', () => { if (scrollY < innerHeight) word.style.transform = `translateY(${scrollY * 0.25}px)`; }, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  function reveal(root = document) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .08 });
    root.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
    check();
  }
  // backup for the observer: reveal anything already on screen (e.g. after jumping to a #link)
  function check() {
    const h = innerHeight;
    document.querySelectorAll('.rv:not(.in)').forEach(el => { const r = el.getBoundingClientRect(); if (r.top < h * .95 && r.bottom > 0) el.classList.add('in'); });
  }
  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { check(); ticking = false; }); } }, { passive: true });
  addEventListener('load', () => setTimeout(check, 50));
  addEventListener('hashchange', () => setTimeout(check, 50));

  /* expose for page scripts */
  window.UI = { S, C, esc, ph, phHtml, isPh, param, img, I, R, waLink, mailLink, reveal, enquiryForm };
  window.addEventListener('DOMContentLoaded', () => reveal());
  if (document.readyState !== 'loading') setTimeout(() => reveal(), 0);
})();
