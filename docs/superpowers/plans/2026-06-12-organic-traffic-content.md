# Organic Traffic Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve organic search performance from the Search Console export by strengthening the pages with the clearest click-through and ranking opportunities.

**Architecture:** Keep the existing Next.js App Router structure and page-level metadata helpers. Make focused copy/content improvements to the relevant page modules, and protect the SEO targets with source-level tests in `tests/seo.test.mjs`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Node test runner, Search Console CSV export analysis.

---

### Task 1: Contact Page Disambiguation And CTR

**Files:**
- Modify: `src/app/kontakt/page.tsx`
- Test: `tests/seo.test.mjs`

- [ ] **Step 1: Write the failing test**

Add assertions that the contact page title, H1, and copy clarify `EPJ Jože Perpar s.p.` is an avtoelektrika/avtoelektronika workshop in Ivančna Gorica and uses the phone/address intent.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test`
Expected: FAIL because the contact page still has generic `KONTAKT` copy.

- [ ] **Step 3: Implement contact page copy**

Update metadata, H1, intro paragraphs, and local contact context while preserving `Vizitka` and the map image.

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test`
Expected: PASS.

### Task 2: Chip Tuning Service Expansion

**Files:**
- Modify: `src/app/chip-tuning/page.tsx`
- Test: `tests/seo.test.mjs`

- [ ] **Step 1: Write the failing test**

Add assertions for chip tuning search sections: suitability, diagnostic check before tuning, local service area, power/torque/fuel consumption terms, and related services.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test`
Expected: FAIL because chip tuning page is currently short.

- [ ] **Step 3: Implement chip tuning expansion**

Add headings, paragraphs, bullet lists, phone CTA, and service links following existing page patterns.

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test`
Expected: PASS.

### Task 3: Avtoelektrika Page Strengthening

**Files:**
- Modify: `src/app/avtoelektrika/page.tsx`
- Test: `tests/seo.test.mjs`

- [ ] **Step 1: Write the failing test**

Add assertions for exact terms and symptom sections: `avtoelektričar Ivančna Gorica`, `avto elektronika`, `popravilo avto elektronike`, `ABS lučka`, `airbag lučka`, and `ECU napaka`.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test`
Expected: FAIL because some exact Search Console-adjacent terms are missing.

- [ ] **Step 3: Implement avtoelektrika copy additions**

Add focused content without keyword stuffing: symptom lists, local query phrasing, and internal links already provided by `ServiceLinks`.

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test`
Expected: PASS.

### Task 4: Final Verification

**Files:**
- Verify: all touched files

- [ ] **Step 1: Run source tests**

Run: `pnpm test`
Expected: PASS.

- [ ] **Step 2: Run production build**

Run: `pnpm build`
Expected: PASS.

- [ ] **Step 3: Run React Doctor**

Run: `npx -y react-doctor@latest . --verbose --diff`
Expected: No issues found.
