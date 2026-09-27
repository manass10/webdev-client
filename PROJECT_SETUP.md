# webdev-client — setup instructions

This project was hand-built to match what `npx create-next-app@latest` produces
(TypeScript, ESLint, Tailwind, App Router, Turbopack, no `src/` dir), but it
was built in a sandbox with **no network access**, so a few things need to
happen on your machine before it runs.

## 1. Install dependencies

```
cd webdev-client
npm install
```

This will generate `package-lock.json` and `node_modules/` (not included).

## 2. Replace the placeholder image

`public/images/teslabot.jpg` is currently a 1x1 placeholder pixel (I couldn't
download a real image without network access). Replace it with an actual
Tesla Bot / Optimus photo, or any image you like — just keep the same
filename and path, or update the `src` in
`app/labs/lab1/Images.tsx` if you rename it.

## 3. Run the dev server

```
npm run dev
```

Open http://localhost:3000 — it redirects to `/account/signin`.
Lab 1 lives at http://localhost:3000/labs/lab1.

## 4. Fill in the "On your own" placeholders

Search the codebase for `TODO` comments — I left clearly marked placeholders
everywhere the assignment specifically asks for **your own** personal
content (this is intentional — the book explicitly wants that content to be
yours, not generated):

- `app/labs/lab1/HeadingTags.tsx` — `wd-your-heading` / `wd-your-span`
- `app/labs/lab1/ParagraphTag.tsx` — `wd-p-your-1` / `wd-p-your-2`
- `app/labs/lab1/ListTags.tsx` — `wd-your-favorite-recipe` / `wd-your-books`
- `app/labs/lab1/Tables.tsx` — `wd-your-table`
- `app/labs/lab1/Images.tsx` — `wd-your-image`
- `app/labs/lab1/HighlightedParagraph.tsx` — the "your hobby" paragraph
- `app/labs/lab1/HighlightedBox.tsx` — the "your goals" box
- `app/labs/lab1/AnchorTag.tsx` — `wd-your-link` / `wd-your-github`
- `app/labs/TOC.tsx` — your name / motto
- `app/labs/page.tsx` — `wd-name-section` (your full Canvas name, first then
  last, matching the roster) and `wd-github` (link to your own public repo —
  do not confuse with the `wd-github` in `Lab1/AnchorTag.tsx`, which is the
  book's own sample and should stay as-is)
- `app/labs/lab1/forms/YourForm.tsx` — currently has full SAMPLE placeholder
  data (Jane Doe, jane@university.edu, etc.) covering every control type per
  the assignment spec — replace with your real details, keep the same
  `id="wd-your-form"`.

Everything else (book samples + "With AI" extras) is filled in completely,
matching the book's exact markup and ids.

## 5. Deploy

```
git init
git add .
git commit -m "Initial commit"
```

Push to a **public** GitHub repo named `webdev-client` (or `kambaz-next-js`
per your syllabus — check which the current assignment page says), then
import it on Vercel, disable Deployment Protection, and submit that public
URL per the assignment's Delivery section.

## What's NOT built (flagged "On your own" in your syllabus)

- `app/(kambaz)/courses/[cid]/assignments/page.tsx` and
  `.../assignments/[aid]/page.tsx` — I scaffolded working versions matching
  the book's LiveDemo pattern (list + editor with all the standard Canvas-
  style fields) since your assignment doc marks these "On your own," but
  they're fully functional structurally. Adjust content/wording as you like.
