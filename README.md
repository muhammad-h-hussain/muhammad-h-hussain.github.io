# muhammad-h-hussain.github.io

Personal portfolio for Muhammad Hussain: regulatory change, process improvement and project delivery. Plain HTML, CSS and JavaScript. No frameworks, no build step.

## Files

* `content.js`: every word on the site. **This is the one to edit.**
* `index.html`: page structure. Rarely needs changing.
* `styles.css`: layout, colours, light and dark mode. Rarely needs changing.
* `main.js`: puts the content into the page and runs the project filters, mobile menu and theme switch. No need to edit.
* `favicon.svg`: browser tab icon.

## Updating content

1. Open `content.js`.
2. Change the text inside the quotation marks. Keep the commas and brackets around it as they are.
3. Save, then open `index.html` in your browser (double click it) to check the result.

Tips:

* Anything in `[square brackets]` is a placeholder. It shows **highlighted in yellow** on the site until you replace it. Open the browser console (F12) to see a list of any left.
* To add a project, copy an existing `{ ... }` block in `projects.items`, paste it after the last one (with a comma between them) and edit it. `category` must match one of the names in `projects.categories`.
* To add a CV download, save the PDF in this folder (for example `cv.pdf`) and set `cvUrl: "cv.pdf"`.
* Update `meta.lastUpdated` (dd/mm/yyyy) when you make changes.
* House style: British English, UK dates (dd/mm/yyyy), no em dashes or double hyphens.
* The page title and description also appear in `index.html` (the `<title>` and `<meta>` tags near the top). Update those too if you change them in `content.js`, as that is what search engines and link previews read.

## Publishing on GitHub Pages

This repository is named `muhammad-h-hussain.github.io`, so GitHub serves it at **https://muhammad-h-hussain.github.io**.

First time only:

1. On GitHub, open the repository and go to **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose the branch **main** and folder **/ (root)**, then **Save**.
4. Wait a minute or two and visit https://muhammad-h-hussain.github.io.

After that, every change merged or pushed to `main` is published automatically within a few minutes. You can edit `content.js` directly on GitHub (pencil icon, then **Commit changes**) if you do not want to use git locally.

The empty `.nojekyll` file tells GitHub Pages to serve the files exactly as they are.

## Placeholders to fill in

Everything below is in `content.js`. None of these figures have been invented: replace each with a real, public number or outcome, or delete the sentence if you cannot share it.

**Contact details** (`person`)

* `[EMAIL ADDRESS]`
* `[LINKEDIN URL]` (full address, for example `https://www.linkedin.com/in/your-name`). The hero LinkedIn button links to it once set.
* `[LOCATION, e.g. London, UK]`
* `[AVAILABILITY, e.g. notice period and relocation timeline]`
* `cvUrl` (optional, leave empty to hide the CV button)

**About**

* `[OPTIONAL: one personal line on why the Gulf, e.g. family, long term plans or timing.]`

**Project results**

* Brexit transition team: `[NUMBER]` licence changes processed; `[OUTCOME, e.g. completed within the transition deadline]`
* CAP grandfathering: `[NUMBER]` products converted; `[OUTCOME, e.g. continuity of supply maintained]`
* PDN licence conversions: `[NUMBER]` PDN licences converted; `[OUTCOME]`
* QPPV address conversions: `[NUMBER]` licences updated; `[OUTCOME, e.g. compliant ahead of the legislative deadline]`
* Blue Prism robot performance analysis: `[X hours]` saved per `[PERIOD]`; `[X%]` of exceptions traced to `[CAUSE]`; `[OUTCOME]`
* Classifier retimings mastersheet: `[OUTCOME, e.g. timings now used for resource planning]`; `[X%]` `[IMPROVEMENT, e.g. reduction in time spent maintaining the sheet]`
* Monthly error reporting template: used by `[NUMBER]` delivery managers; `[X% reduction]` in `[ERROR TYPE]` over `[PERIOD]`
* SOP and policy work: `[NUMBER]` SOPs covered; `[OUTCOME, e.g. X% reviewed by their due date]`
* SharePoint migration: `[NUMBER]` sites migrated across `[NUMBER]` teams; `[OUTCOME, e.g. completed by the target date]`

**Skills**

* `[OTHER TOOLS, e.g. Excel, Power BI, Visio]`

**Worth checking**

* The "Problem" and "What I did" text on each project card is written at a general, public level from the project titles. Read each one and adjust anything that does not match what you actually did, or that is more detail than you are comfortable sharing publicly.
* PDN is left as an abbreviation. Spell it out if you want recruiters outside UK regulation to follow it.
