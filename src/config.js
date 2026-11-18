/* =====================================================================
   Site settings: the only things to change at launch
   ===================================================================== */

/** The live web address (no trailing slash). Used for canonical URLs,
    the sitemap, social previews and structured data. */
export const SITE_URL = 'https://555holidays.com';

/** false = preview mode: every page says "noindex" and robots.txt blocks
    crawlers, so Google ignores the test site.
    Set to true on launch day, once the real domain is connected. */
export const LAUNCHED = false;

/** Optional form service endpoint (e.g. Formspree "https://formspree.io/f/xxxx").
    When set, enquiries are delivered straight to your inbox; when empty,
    the forms open WhatsApp or the visitor's email app as before. */
export const FORM_ENDPOINT = '';
