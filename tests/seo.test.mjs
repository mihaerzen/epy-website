import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {test} from 'node:test';

const root = process.cwd();

const read = (path) => readFileSync(join(root, path), 'utf8');

test('SEO routes and generated crawl files are present', () => {
  [
    'src/app/avtoelektrika/page.tsx',
    'src/app/avtodiagnostika/page.tsx',
    'src/app/popravilo-avto-elektrike/page.tsx',
    'src/app/popravilo-avtoradia/page.tsx',
    'src/app/popravilo-avtomobilske-elektronike/page.tsx',
    'src/app/robots.ts',
    'src/app/sitemap.ts',
  ].forEach((path) => assert.ok(existsSync(join(root, path)), `${path} should exist`));

  assert.equal(existsSync(join(root, 'public/sitemap.xml')), false, 'static sitemap should be replaced by app/sitemap.ts');
});

test('core SEO implementation covers local service intent', () => {
  const home = read('src/app/page.tsx');
  const hub = read('src/app/avtoelektrika/page.tsx');
  const radio = read('src/app/popravilo-avtoradia/page.tsx');
  const diagnostics = read('src/app/avtodiagnostika/page.tsx');
  const electricalRepair = read('src/app/popravilo-avto-elektrike/page.tsx');
  const electronicsRepair = read('src/app/popravilo-avtomobilske-elektronike/page.tsx');
  const allContent = [home, hub, radio, diagnostics, electricalRepair, electronicsRepair].join('\n');

  [
    'Avtoelektrika in avtoelektronika',
    'Ivančna Gorica',
    'Grosuplje',
    'Ljubljana',
    'popravilo avto elektrike',
    'popravilo avtoradia',
    'računalniška diagnostika vozil',
    'popravilo avtomobilske elektronike',
    'ABS',
    'airbag',
    'ECU',
  ].forEach((term) => assert.match(allContent, new RegExp(term, 'i'), `${term} should be present`));

  assert.ok(
    home.replace(/\s+/g, ' ').includes(
      'Stranke prihajajo iz Ivančne Gorice, Grosuplja, Višnje Gore, Stične, Trebnjega, Ljubljane in okolice, Dolenjske in Osrednjeslovenske.',
    ),
    'homepage should use the approved local service-area sentence',
  );
});

test('metadata, canonicals, schema, and redirect are configured', () => {
  const layout = read('src/app/layout.tsx');
  const seo = read('src/lib/seo.ts');
  const nextConfig = read('next.config.js');

  assert.match(layout, /metadataBase/, 'root layout should define metadataBase');
  assert.match(layout, /application\/ld\+json/, 'root layout should render JSON-LD');
  assert.match(seo, /"@type": "AutoRepair"/, 'schema should use AutoRepair');
  assert.match(seo, /areaServed/, 'schema should define the local service area');
  assert.match(seo, /hasOfferCatalog/, 'schema should expose services');
  assert.match(nextConfig, /source:\s*['"]\/avtoelektronika['"]/, 'legacy avtoelektronika path should redirect');
  assert.match(nextConfig, /destination:\s*['"]\/avtoelektrika['"]/, 'legacy redirect should point to the canonical hub');
  assert.match(nextConfig, /statusCode:\s*301/, 'legacy redirect should use the requested 301 status');
});

test('page headings have shared top spacing', () => {
  const heading = read('src/components/Heading.tsx');
  const home = read('src/app/page.tsx');

  assert.match(heading, /pt-3 md:pt-4/, 'shared Heading1 should add top padding on every page');
  assert.doesNotMatch(home, /<Heading1 className=/, 'homepage should use the shared Heading1 spacing without page-specific padding');
});

test('homepage LCP image and critical path assets are optimized', () => {
  const home = read('src/app/page.tsx');
  const layout = read('src/app/layout.tsx');
  const globals = read('src/app/globals.css');
  const nextConfig = read('next.config.js');
  const packageJson = read('package.json');
  const tsconfig = read('tsconfig.json');

  assert.match(home, /preload=\{true\}/, 'homepage LCP image should be preloaded');
  assert.match(home, /fetchPriority=["']high["']/, 'homepage LCP image should request high fetch priority');
  assert.match(home, /quality=\{60\}/, 'homepage card images should use optimized quality');
  assert.match(home, /cardImageSizes = ["']\(min-width: 768px\) 399px, calc\(100vw - 16px\)["']/, 'homepage card images should define responsive sizes');
  assert.match(home, /sizes=\{cardImageSizes\}/, 'homepage card images should use the shared responsive sizes');
  assert.doesNotMatch(home, /loading=["']lazy["']/, 'homepage LCP image should not be explicitly lazy loaded');

  assert.match(nextConfig, /qualities:\s*\[\s*60,\s*75\s*\]/, 'Next image config should allow optimized q=60 URLs and existing q=75 URLs');
  assert.doesNotMatch(layout, /next\/font\/google/, 'root layout should not load Google font assets into the critical path');
  assert.match(globals, /font-family:\s*system-ui/, 'global CSS should use a system font stack');
  assert.match(packageJson, /"browserslist"/, 'package should define modern browser targets');
  assert.match(tsconfig, /"target":\s*"es2022"/, 'TypeScript output target should be modernized');
});

test('Google Analytics is configured for consent-denied cookieless page analytics', () => {
  const analyticsPath = 'src/components/GoogleAnalytics.tsx';
  const pageViewPath = 'src/components/GoogleAnalyticsPageView.tsx';

  assert.ok(existsSync(join(root, analyticsPath)), 'Google Analytics component should exist');
  assert.ok(existsSync(join(root, pageViewPath)), 'Google Analytics page-view tracker should exist');

  const layout = read('src/app/layout.tsx');
  const analytics = read(analyticsPath);
  const pageView = read(pageViewPath);

  assert.match(layout, /<GoogleAnalytics\s*\/>/, 'root layout should render the analytics component once');
  assert.match(analytics, /G-3ESJ9PEVTF/, 'analytics should use the supplied GA4 measurement ID');
  assert.match(analytics, /googletagmanager\.com\/gtag\/js/, 'analytics should load the Google tag script');
  assert.match(analytics, /gtag\('consent',\s*'default'/, 'analytics should set default consent before config');

  [
    'analytics_storage',
    'ad_storage',
    'ad_user_data',
    'ad_personalization',
  ].forEach((consentField) => {
    assert.match(
      analytics,
      new RegExp(`${consentField}['"]?: ['"]denied['"]`),
      `${consentField} should be denied by default`,
    );
  });

  assert.ok(
    analytics.indexOf("gtag('consent', 'default'") < analytics.indexOf("gtag('config'"),
    'consent defaults should be declared before GA config runs',
  );
  assert.match(analytics, /send_page_view['"]?: false/, 'initial automatic page view should be disabled');
  assert.match(analytics, /allow_google_signals['"]?: false/, 'Google signals should be disabled');
  assert.match(
    analytics,
    /allow_ad_personalization_signals['"]?: false/,
    'ad personalization signals should be disabled',
  );
  assert.match(pageView, /'page_view'/, 'client-side route changes should send page_view events');
});

test('Content Security Policy allows consent-denied Google Analytics requests', () => {
  const nextConfig = read('next.config.js');

  assert.match(
    nextConfig,
    /script-src[^"]*https:\/\/www\.googletagmanager\.com/,
    'CSP should allow the Google tag script origin',
  );
  assert.match(
    nextConfig,
    /connect-src[^"]*https:\/\/www\.google-analytics\.com/,
    'CSP should allow GA4 measurement requests',
  );
  assert.match(
    nextConfig,
    /connect-src[^"]*https:\/\/region1\.google-analytics\.com/,
    'CSP should allow regional GA4 measurement requests',
  );
  assert.match(
    nextConfig,
    /img-src[^"]*https:\/\/www\.google-analytics\.com/,
    'CSP should allow image-pixel GA4 fallbacks',
  );
});

test('contact page is optimized for local EPJ avtoelektrika intent', () => {
  const contact = read('src/app/kontakt/page.tsx');

  [
    'Kontakt EPJ Jože Perpar s.p. | Avtoelektrika Ivančna Gorica',
    'avtoelektrika in avtoelektronika',
    'Mleščevo 10a',
    '040/432-000',
    'delavnica za avtoelektriko',
    'računalniško diagnostiko',
    'Ivančna Gorica',
  ].forEach((term) => assert.match(contact, new RegExp(term, 'i'), `${term} should be present on contact page`));

  assert.doesNotMatch(contact, /<Hyperlink href="\/kontakt">KONTAKT<\/Hyperlink>/, 'contact H1 should not be generic');
});

test('chip tuning page answers local service and safety intent', () => {
  const chipTuning = read('src/app/chip-tuning/page.tsx');

  [
    'Chip tuning in optimizacija motorne elektronike',
    'diagnostika pred posegom',
    'navor',
    'porabo goriva',
    'primeren poseg',
    'Ivančna Gorica',
    'Grosuplje',
    'Ljubljana',
    'Povezane storitve',
  ].forEach((term) => assert.match(chipTuning, new RegExp(term, 'i'), `${term} should be present on chip tuning page`));
});

test('avtoelektrika page targets exact service symptoms and local terms', () => {
  const avtoelektrika = read('src/app/avtoelektrika/page.tsx');

  [
    'avtoelektričar Ivančna Gorica',
    'avto elektronika',
    'popravilo avto elektronike',
    'ABS lučka',
    'airbag lučka',
    'ECU napaka',
    'električna napaka',
    'kaj povedati ob klicu',
  ].forEach((term) => assert.match(avtoelektrika, new RegExp(term, 'i'), `${term} should be present on avtoelektrika page`));
});
