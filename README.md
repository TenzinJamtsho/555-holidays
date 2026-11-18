# 555 Holidays website

Built with [Astro](https://astro.build): every page is generated as plain HTML at build time.

## Edit content
- **Tours, festivals, FAQ, journal, guides, reviews, offices:** `src/data/site.js`
- **Page layouts:** `src/pages/` · shared pieces in `src/components/`
- **Styles:** `public/assets/css/site.css` · interactions: `public/assets/js/ui.js`
- Anything in `[SQUARE BRACKETS]` is a placeholder and shows highlighted in yellow.

## Run locally
```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs the finished site to dist/
```

## Launch checklist
1. Deploy to Cloudflare Pages or Netlify: build command `npm run build`, output folder `dist`.
2. Connect the domain (555holidays.com) in the host's dashboard.
3. In `src/config.js` set `LAUNCHED = true` (this lifts "noindex" and opens robots.txt to search engines and AI crawlers).
4. Optional: set `FORM_ENDPOINT` (e.g. Formspree) so enquiries arrive in your inbox.
5. Submit `https://555holidays.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
