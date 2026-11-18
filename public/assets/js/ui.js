/* =====================================================================
   555 Holidays: interactive behaviour only. All content is rendered at
   build time; this script adds menus, accordions, filters, forms and
   the scroll animations on top of it.
   ===================================================================== */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const B = document.body.dataset;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const waLink = text => `https://wa.me/${B.wa}${text ? '?text=' + encodeURIComponent(text) : ''}`;
  const mailLink = (subject, body) => `mailto:${B.email}?subject=${encodeURIComponent(subject)}${body ? '&body=' + encodeURIComponent(body) : ''}`;

  /* ---------- mobile menu ---------- */
  $$('.hnav').forEach(h => {
    const nav = $('nav', h), b = $('.burger', h);
    if (!nav || !b) return;
    b.addEventListener('click', () => b.setAttribute('aria-expanded', nav.classList.toggle('open')));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); b.setAttribute('aria-expanded', false); b.focus(); } });
  });

  /* ---------- accordions ---------- */
  document.addEventListener('click', e => {
    const b = e.target.closest('.qa > button'); if (!b) return;
    b.setAttribute('aria-expanded', b.parentElement.classList.toggle('open'));
  });

  /* ---------- forms: form service when configured, else WhatsApp / email ---------- */
  async function post(data) {
    const res = await fetch(B.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
    if (!res.ok) throw new Error('send failed');
  }
  const interest = new URLSearchParams(location.search).get('interest');
  $$('form[data-enquiry]').forEach(form => {
    const msg = $('.form-msg', form);
    if (interest) {
      const box = $$('input[name=interests]', form).find(x => x.value.toLowerCase().startsWith(interest.toLowerCase().split(' ')[0])) ||
                  $$('input[name=interests]', form).find(x => x.value === 'Festivals' && /tshechu|festival|drubchen|yakchoe/i.test(interest));
      if (box) box.checked = true;
      const ta = $('textarea', form);
      if (ta && !ta.value) ta.value = `I'm interested in: ${interest}`;
    }
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (!form.checkValidity()) { msg.style.color = '#c0392b'; msg.textContent = 'Please add your name and a valid email address.'; form.reportValidity(); return; }
      const f = new FormData(form), tour = form.dataset.tour;
      const text = [
        `Hello ${B.name}, I'd love a free trip plan.`,
        tour ? `Trip: ${tour}` : null,
        `Name: ${f.get('name')}`, `Email: ${f.get('email')}`,
        `Travel month: ${f.get('month') || 'Not sure yet'}`, `Travellers: ${f.get('travellers')}`,
        `Interests: ${f.getAll('interests').join(', ') || '–'}`,
        f.get('message') ? `Notes: ${f.get('message')}` : null
      ].filter(Boolean).join('\n');
      msg.style.color = '';
      const via = e.submitter && e.submitter.value;
      if (via === 'whatsapp') { msg.textContent = 'Opening WhatsApp…'; window.open(waLink(text), '_blank', 'noopener'); return; }
      if (B.formEndpoint) {
        msg.textContent = 'Sending…';
        f.append('_subject', tour ? `Trip plan: ${tour}` : 'Free trip plan request');
        f.set('interests', f.getAll('interests').join(', '));
        try { await post(f); form.reset(); msg.style.color = '#17773f'; msg.textContent = 'Thank you! Your request is on its way, and we will reply personally soon.'; }
        catch { msg.style.color = '#c0392b'; msg.innerHTML = `Sorry, that didn't send. Please email <a href="mailto:${B.email}">${B.email}</a> or use WhatsApp.`; }
        return;
      }
      msg.textContent = 'Opening your email app…';
      location.href = mailLink(tour ? `Trip plan: ${tour}` : 'Free trip plan request', text);
    });
  });
  $$('form[data-newsletter]').forEach(form => form.addEventListener('submit', async e => {
    e.preventDefault();
    const out = form.parentElement.querySelector('.fmsg'), email = form.email.value.trim();
    if (B.formEndpoint) {
      const f = new FormData(); f.append('email', email); f.append('_subject', 'Newsletter sign-up');
      try { await post(f); form.reset(); out.textContent = 'Thank you, you are on the list.'; } catch { out.textContent = 'Sorry, please try again later.'; }
      return;
    }
    out.textContent = 'Thank you. Your email app will open to confirm.';
    location.href = mailLink('Newsletter sign-up', `Please add ${email} to your newsletter.`);
  }));

  /* ---------- filters (tours page, journal) ---------- */
  $$('[data-filters]').forEach(bar => {
    const scope = $(bar.dataset.filters) || document;
    const items = () => $$('[data-cat]', scope);
    const apply = f => {
      $$('button', bar).forEach(b => b.setAttribute('aria-pressed', b.dataset.f === f));
      items().forEach(el => el.hidden = f !== 'all' && el.dataset.cat !== f);
      check();
    };
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      apply(b.dataset.f);
      if (bar.hasAttribute('data-hash')) history.replaceState(null, '', b.dataset.f === 'all' ? location.pathname : '#' + b.dataset.f);
    });
    const h = location.hash.slice(1);
    if (bar.hasAttribute('data-hash') && $$('button', bar).some(b => b.dataset.f === h)) apply(h);
  });

  /* ---------- FAQ search ---------- */
  const q = $('#faq-search');
  if (q) q.addEventListener('input', () => {
    const term = q.value.trim().toLowerCase(); let shown = 0;
    $$('.faq-group').forEach(g => {
      let any = false;
      $$('.qa', g).forEach(qa => { const hit = !term || qa.textContent.toLowerCase().includes(term); qa.hidden = !hit; if (hit) { any = true; shown++; } });
      g.hidden = !any;
    });
    $('#faq-none').hidden = shown > 0;
  });
  // open the first question of the group named in the URL hash
  if (location.hash && $('.faq-group')) {
    const g = document.getElementById(location.hash.slice(1));
    const first = g && $('.qa', g);
    if (first) { first.classList.add('open'); $('button', first).setAttribute('aria-expanded', true); }
  }

  /* ---------- reviews carousel dots (mobile) ---------- */
  const rg = $('#rev-grid'), dots = $('#rev-dots');
  if (rg && dots) rg.addEventListener('scroll', () => {
    const i = Math.round(rg.scrollLeft / (rg.firstElementChild.offsetWidth + 14));
    $$('i', dots).forEach((d, k) => d.classList.toggle('on', k === i));
  }, { passive: true });

  /* ---------- table of contents highlight (travel info) ---------- */
  const toc = $$('.toc a');
  if (toc.length) {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) toc.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id));
    }), { rootMargin: '-30% 0px -60% 0px' });
    $$('.info-sec').forEach(s => io.observe(s));
  }

  /* ---------- hero parallax ---------- */
  const word = $('.hero .word');
  if (word && !reduce) addEventListener('scroll', () => { if (scrollY < innerHeight) word.style.transform = `translateY(${scrollY * 0.25}px)`; }, { passive: true });

  /* ---------- "A day in Bhutan": pinned panels with a scroll-scrubbed diagonal wipe ---------- */
  const day = $('#day');
  if (day) {
    const desktop = matchMedia('(min-width: 821px)');
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const blocks = $$('.mscroll', day).map(el => ({
      el, moment: $('.moment', el), btns: $$('.m-list button', el), bars: $$('.m-progress i', el),
      lays: $$('.m-photo .lay', el), shades: $$('.m-photo .shade', el), pics: $$('.m-photo .lay img', el),
      cap: $('.m-cap', el), count: $('.m-count b', el), idx: 0, step: 0, stick: 0, cur: 0, tgt: 0, visible: false
    }));
    blocks.forEach(b => b.titles = b.btns.map(x => x.dataset.title));
    const show = (b, i) => {
      if (i === b.idx) return;
      b.idx = i;
      b.btns.forEach((x, k) => x.setAttribute('aria-current', k === i));
      b.bars.forEach((x, k) => x.classList.toggle('on', k <= i));
      b.pics.forEach((l, k) => l.alt = k === i ? b.titles[i] : '');
      b.count.textContent = i + 1;
      b.cap.innerHTML = '';
      const s = document.createElement('span'); s.textContent = b.titles[i]; b.cap.appendChild(s);
    };
    const paint = (b, pos) => {
      const n = b.lays.length;
      const pin = k => k === 0 ? 1 : (reduce ? (pos >= k - 0.5 ? 1 : 0) : clamp((pos - (k - 1) - 0.2) / 0.6));
      let active = 0;
      for (let k = 0; k < n; k++) {
        const p = pin(k), out = k + 1 < n ? pin(k + 1) : 0, l = b.lays[k];
        if (k > 0) {
          const yl = (1 - p) * 140, yr = yl - 40;
          const clip = p >= 1 ? 'none' : `polygon(0 ${yl.toFixed(2)}%, 100% ${yr.toFixed(2)}%, 100% 100%, 0 100%)`;
          if (l._c !== clip) { l.style.clipPath = clip; l._c = clip; }
          if (p >= 0.5) active = k;
        }
        const sc = `scale(${((k ? 1.12 - 0.12 * p : 1) * (1 + 0.06 * out)).toFixed(4)})`;
        if (l._t !== sc) { l.style.transform = sc; l._t = sc; }
        const op = (0.38 * out).toFixed(3);
        if (b.shades[k]._o !== op) { b.shades[k].style.opacity = op; b.shades[k]._o = op; }
      }
      show(b, active);
    };
    let ticking = false;
    const measure = () => {
      if (!desktop.matches) return;
      for (const b of blocks) {
        const r = b.el.getBoundingClientRect();
        b.visible = r.bottom > -200 && r.top < innerHeight + 200;
        b.tgt = (b.stick - r.top) / b.step;
      }
    };
    const tick = () => {
      let moving = false;
      for (const b of blocks) {
        if (!b.visible) { b.cur = b.tgt; continue; }
        const d = b.tgt - b.cur;
        if (reduce || Math.abs(d) < 0.002) b.cur = b.tgt; else { b.cur += d * 0.16; moving = true; }
        paint(b, b.cur);
      }
      if (moving) requestAnimationFrame(tick); else ticking = false;
    };
    const onScroll = () => { measure(); if (!ticking) { ticking = true; requestAnimationFrame(tick); } };
    const layout = () => {
      blocks.forEach(b => {
        if (!desktop.matches) { b.el.classList.remove('pinned'); b.el.style.height = ''; return; }
        b.el.classList.add('pinned');
        const h = b.moment.offsetHeight;
        b.stick = Math.max(80, (innerHeight - h) / 2);
        b.step = Math.max(300, innerHeight * 0.55);
        b.moment.style.setProperty('--stick', b.stick + 'px');
        b.el.style.height = (h + (b.btns.length - 1) * b.step) + 'px';
      });
      onScroll();
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', layout);
    desktop.addEventListener('change', layout);
    addEventListener('load', layout);
    layout();
    day.addEventListener('click', e => {
      const btn = e.target.closest('.m-list button'); if (!btn || !desktop.matches) return;
      const b = blocks.find(x => x.el.contains(btn)), i = +btn.dataset.i;
      scrollTo({ top: scrollY + b.el.getBoundingClientRect().top - b.stick + i * b.step + 2, behavior: 'smooth' });
      show(b, i);
    });
  }

  /* ---------- reveal on scroll ---------- */
  function check() {
    const h = innerHeight;
    $$('.rv:not(.in)').forEach(el => { if (el.hidden) return; const r = el.getBoundingClientRect(); if (r.top < h * .95 && r.bottom > 0) el.classList.add('in'); });
  }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .08 });
  $$('.rv').forEach(el => io.observe(el));
  let rt = false;
  addEventListener('scroll', () => { if (!rt) { rt = true; requestAnimationFrame(() => { check(); rt = false; }); } }, { passive: true });
  addEventListener('load', () => setTimeout(check, 50));
  addEventListener('hashchange', () => setTimeout(check, 50));
  check();
})();
