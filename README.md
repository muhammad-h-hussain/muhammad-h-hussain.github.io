# muhammad-h-hussain.github.io

Personal portfolio for Muhammad Hussain: regulatory change, process improvement and project delivery. Plain HTML, CSS and JavaScript. No frameworks, no build step.

All text is written directly into `index.html`, so it shows without JavaScript and search engines and LinkedIn link previews can read every word.

## Files

* `index.html`: every word on the site. **This is the one to edit.** Each section starts with a clearly marked comment such as `<!-- ===== PROJECTS ===== -->`.
* `styles.css`: layout, colours, light and dark mode. No need to edit.
* `main.js`: small extras only (mobile menu, theme switch, project filters). The site works without it.
* `favicon.svg`: browser tab icon.

## Updating content

1. Open `index.html` in any text editor (or on GitHub, using the pencil icon).
2. Find the section by its marked comment and change the text between the tags. For example, in `<p>Some text</p>` change only `Some text`.
3. Save, then open `index.html` in your browser (double click it) to check the result.

Tips:

* Placeholders look like `<mark class="ph">[NUMBER]</mark>` and show **highlighted in yellow** on the site. When you fill one in, delete the `<mark class="ph">` and `</mark>` tags as well, leaving just your text.
* To add a project, copy a whole `<article class="card" ...> ... </article>` block, paste it after the last one and edit it. Its `data-category` must be `Regulatory`, `Process and technology` or `Project delivery`.
* Update "Last updated" in the footer (dd/mm/yyyy) when you make changes.
* If you change your headline, update the `<title>` and `description` tags at the top of `index.html`. That is the text Google and LinkedIn previews show.
* House style: British English, UK dates (dd/mm/yyyy), no em dashes or double hyphens.
* To check nothing is left, search `index.html` for `ph"` and for `REPLACE-WITH`. The browser console (F12) also reports how many are left.

## Publishing on GitHub Pages

This repository is named `muhammad-h-hussain.github.io`, so GitHub serves it at **https://muhammad-h-hussain.github.io**.

First time only:

1. On GitHub, open the repository and go to **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose the branch **main** and folder **/ (root)**, then **Save**.
4. Wait a minute or two and visit https://muhammad-h-hussain.github.io.

After that, every change merged or pushed to `main` is published automatically within a few minutes.

The empty `.nojekyll` file tells GitHub Pages to serve the files exactly as they are.

LinkedIn caches link previews. After changing the title or description, paste your URL into the LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/) to refresh it.

## Placeholders to fill in

None of these figures have been invented: replace each with a real, public number or outcome, or delete the sentence if you cannot share it.

**Links** (replace every occurrence; they are real links once filled in)

* `REPLACE-WITH-LINKEDIN-ID`: your LinkedIn profile ID, the part after `linkedin.com/in/`. Appears 2 times (hero button, contact button).
* `REPLACE-WITH-EMAIL@example.com`: your email address. Appears 3 times (hero "Get in touch" button, contact "Email me" button, contact list).

**Contact section**

* `[EMAIL ADDRESS]`
* `[LINKEDIN PROFILE NAME]`
* `[LOCATION, e.g. London, UK]`
* `[AVAILABILITY, e.g. notice period and relocation timeline]`

**About**

* `[OPTIONAL: one personal line on why the Gulf, e.g. family, long term plans or timing.]`

**Experience**

* Ministry of Justice: `[ROLE TITLE]`, `[DATES]`, `[ONE LINE SUMMARY]`
* NHS: `[ROLE TITLE]`, `[DATES]`, `[ONE LINE SUMMARY]`
* Reorder these two so the most recent is first.

**Projects: post-Brexit cards**

* Brexit transition team: `[NUMBER]` licence changes processed; `[OUTCOME, e.g. completed within the transition deadline]`
* CAP grandfathering: `[NUMBER]` products converted; `[OUTCOME, e.g. continuity of supply maintained]`
* PDN licence conversions: `[NUMBER]` PDN licences converted; `[OUTCOME]`
* QPPV address conversions: `[NUMBER]` licences updated; `[OUTCOME, e.g. compliant ahead of the legislative deadline]`

**Projects: other cards** (fields with no facts supplied yet)

* System fault investigation: `[CHALLENGE]`
* Classifier retimings mastersheet and findings report: `[CHALLENGE]`
* SOP governance: review reminders and training standards: `[CONTEXT]`, `[CHALLENGE]`
* New department intranet site: `[CHALLENGE]`
* Change control: `[CONTEXT]`, `[CHALLENGE]`, `[OUTCOME]`

If you would rather not fill a field, delete its `<dt>` heading and `<dd>` line together.

## Worth checking

* The four post-Brexit case studies are written at a general, public level from the project titles. Read each one and adjust anything that does not match what you did. The other case studies use only the facts you supplied.
* PDN is left as an abbreviation. Spell it out if you want recruiters outside UK regulation to follow it.
* There is no preview image for LinkedIn. To add one, save a 1200 x 627 pixel image as `preview.png` in this folder and add `<meta property="og:image" content="https://muhammad-h-hussain.github.io/preview.png">` to the top of `index.html`.
