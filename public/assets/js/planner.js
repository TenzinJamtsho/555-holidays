/* =====================================================================
   Trip planner: live summary, honest suggestions and sending the plan.
   Valley data (drive positions, suggested nights) comes from
   src/data/site.js via the #planner-data JSON on the page.
   ===================================================================== */
(function () {
  const form = document.getElementById('planner');
  const dataEl = document.getElementById('planner-data');
  if (!form || !dataEl) return;
  const D = JSON.parse(dataEl.textContent);
  const B = document.body.dataset;
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const byKey = Object.fromEntries(D.valleys.map(v => [v.key, v]));
  const hrs = h => h < 1 ? 'under an hour' : `about ${Math.round(h * 2) / 2} hrs`.replace('.5 hrs', '½ hrs');

  /* ---------- read the form ---------- */
  function state() {
    const f = new FormData(form);
    const valleys = f.getAll('valleys').map(k => byKey[k]).sort((a, b) => a.pos - b.pos);
    return {
      month: f.get('month'), days: +f.get('days') || 0, travellers: f.get('travellers'),
      pace: f.get('pace') || 'Balanced', stay: f.get('stay'),
      valleys, moments: f.getAll('moments'),
      fly: valleys.some(v => v.key === 'bumthang') && f.get('fly') === 'yes',
      trek: f.get('trek') === 'yes',
    };
  }

  /* ---------- estimate the plan ---------- */
  function plan(s) {
    // Gentle: an extra night where long days need recovering from; Active: one night fewer per valley
    const adj = n => s.pace === 'Gentle' ? n + (n >= 3 ? 1 : 0) : s.pace === 'Active' ? Math.max(1, n - 1) : n;
    const paro = D.paroNights + (s.pace === 'Gentle' && s.valleys.length >= 3 ? 1 : 0);
    const stops = [{ name: 'Paro', nights: paro }].concat(s.valleys.map(v => ({ name: v.name, nights: adj(v.nights) })));
    if (s.trek) stops.push({ name: 'Dagala trek', nights: D.trekNights });
    const nights = stops.reduce((a, x) => a + x.nights, 0);
    const main = s.valleys.filter(v => !v.detour);
    const far = main.length ? main[main.length - 1].pos : 0;
    const detour = s.valleys.reduce((a, v) => a + (v.detour || 0), 0);
    // legs along the main road, out and back
    const pts = [0].concat(main.map(v => v.pos));
    let longest = 0;
    for (let i = 1; i < pts.length; i++) longest = Math.max(longest, pts[i] - pts[i - 1]);
    const back = s.fly ? 0 : far;
    if (!s.fly && far > 0) longest = Math.max(longest, Math.min(far, 6));     // long returns are split over days
    if (detour) longest = Math.max(longest, 2);
    return { stops, nights, days: nights + 1, drive: far + back + detour, longest, far, twoDayReturn: !s.fly && far > 8 };
  }

  /* ---------- honest suggestions ---------- */
  function nudges(s, p) {
    const out = [];
    const has = k => s.valleys.some(v => v.key === k);
    const m = s.month;
    if (s.days && s.days < p.days) out.push(['warn', `For these valleys at a ${s.pace.toLowerCase()} pace we'd suggest at least ${p.days} days. Add a few days, or leave out a valley.`]);
    if (s.days && s.days > p.days + 3) out.push(['tip', `You have ${s.days - p.days} spare days: perhaps add another valley, a short trek, or simply more rest days.`]);
    if (has('bumthang') && !has('phobjikha')) out.push(['tip', 'Bumthang is a long way east. Adding Phobjikha breaks the road into two gentle days.']);
    if (p.twoDayReturn) out.push(['tip', 'Driving back from Bumthang takes two full days. Flying back to Paro saves them.']);
    if (has('phobjikha') && /November|December|January|February/.test(m)) out.push(['good', 'Lovely timing: the black-necked cranes winter in Phobjikha from November to February.']);
    if (/June|July|August/.test(m)) out.push(['tip', 'Monsoon months are green and quiet, but some roads can be slow after heavy rain. We plan extra time.']);
    if (/March|April/.test(m)) out.push(['good', 'Spring: rhododendrons in bloom, and often the Paro Tshechu festival.']);
    if (/October/.test(m)) out.push(['good', 'October is festival season, with clear mountain views. Book early.']);
    if (s.pace === 'Active' && !s.trek) out.push(['tip', 'Fancy a trek? Tick "Add a short trek" for three days on the Dagala trail.']);
    if (s.trek && s.pace === 'Gentle') out.push(['tip', 'The Dagala trek reaches 4,185 m. We will add an easy acclimatisation day before you set off.']);
    if (!s.valleys.length) out.push(['tip', 'Choose one or more valleys to see your route.']);
    return out;
  }

  /* ---------- render the summary ---------- */
  function render() {
    const s = state(), p = plan(s);
    const names = s.valleys.map(v => v.name);
    $('flyback').hidden = !s.valleys.some(v => v.key === 'bumthang');
    $('sum-title').textContent = !names.length ? 'Paro, slowly'
      : names.length === 1 ? `Paro & ${names[0]}`
      : `${names.length + 1} valleys, from Paro to ${names[names.length - 1]}`;
    $('sum-days').textContent = `${p.days} days` + (s.days && s.days !== p.days ? ` (you chose ${s.days})` : '');
    $('sum-drive').textContent = p.drive ? hrs(p.drive) + (s.fly ? ' + a short flight' : '') : 'under an hour';
    $('sum-long').textContent = p.longest ? hrs(p.longest) : '–';
    $('sum-pace').textContent = s.pace;
    $('sum-route').innerHTML = p.stops.map(x => `<span><b>${esc(x.name)}</b> ${x.nights} night${x.nights > 1 ? 's' : ''}</span>`).join('<i>→</i>') + (p.far ? '<i>→</i><span><b>Paro</b> depart</span>' : '');
    $('sum-moments').innerHTML = s.moments.length ? `<b>${s.moments.length} moment${s.moments.length > 1 ? 's' : ''}:</b> ${s.moments.map(esc).join(' · ')}` : '<span class="muted">No moments chosen yet.</span>';
    $('bar-days').textContent = `${p.days} days`;
    $('bar-drive').textContent = p.drive ? `${hrs(p.drive)} driving` : 'Paro only';
    $('nudges').innerHTML = nudges(s, p).map(([t, txt]) => `<li class="${t}">${esc(txt)}</li>`).join('');
    return { s, p };
  }

  /* ---------- prefill from a Signature Journey (?from=slug) ---------- */
  const from = new URLSearchParams(location.search).get('from');
  const sig = from && D.signatures[from];
  if (sig) {
    form.days.value = String(sig.days);
    form.querySelectorAll('[name=pace]').forEach(r => r.checked = r.value === sig.pace);
    form.querySelectorAll('[name=valleys]').forEach(c => c.checked = sig.valleys.includes(c.value));
    form.querySelectorAll('[name=moments]').forEach(c => c.checked = sig.moments.includes(c.value));
    form.trek.checked = !!sig.trek;
    const note = $('prefill');
    note.innerHTML = `Starting from <b>${esc(sig.name)}</b>. Change anything you like.`;
    note.hidden = false;
  }
  form.addEventListener('change', render);
  render();

  /* ---------- send ---------- */
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    if (!form.checkValidity()) { msg.style.color = '#c0392b'; msg.textContent = 'Please add your name and a valid email address.'; form.reportValidity(); return; }
    const { s, p } = render();
    const f = new FormData(form);
    const text = [
      `Hello ${B.name}, here is the journey I'd love:`,
      sig ? `Started from: ${sig.name}` : null,
      `Name: ${f.get('name')} · Email: ${f.get('email')}`,
      `Month: ${s.month || 'Not sure yet'} · Days: ${s.days || 'Not sure'} (suggested ${p.days}) · Travellers: ${s.travellers}`,
      `Pace: ${s.pace} · Stay: ${s.stay}`,
      `Route: ${p.stops.map(x => `${x.name} (${x.nights}n)`).join(' → ')}${s.fly ? ' → fly back to Paro' : ''}`,
      s.trek ? 'Includes: Dagala trek (3 days)' : null,
      `Moments: ${s.moments.join(', ') || '–'}`,
      f.get('message') ? `Notes: ${f.get('message')}` : null,
    ].filter(Boolean).join('\n');
    msg.style.color = '';
    const via = e.submitter && e.submitter.value;
    if (via === 'whatsapp') { msg.textContent = 'Opening WhatsApp…'; window.open(`https://wa.me/${B.wa}?text=${encodeURIComponent(text)}`, '_blank', 'noopener'); return; }
    if (B.formEndpoint) {
      msg.textContent = 'Sending…';
      const body = new FormData();
      body.append('_subject', 'Trip planner: new journey request');
      body.append('name', f.get('name')); body.append('email', f.get('email')); body.append('plan', text);
      try {
        const r = await fetch(B.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body });
        if (!r.ok) throw 0;
        msg.style.color = '#17773f'; msg.textContent = "Thank you! Your plan is on its way. We'll reply personally with a full itinerary and price.";
      } catch { msg.style.color = '#c0392b'; msg.innerHTML = `Sorry, that didn't send. Please use WhatsApp or email <a href="mailto:${B.email}">${B.email}</a>.`; }
      return;
    }
    msg.textContent = 'Opening your email app…';
    location.href = `mailto:${B.email}?subject=${encodeURIComponent('My Bhutan journey plan')}&body=${encodeURIComponent(text)}`;
  });
})();
