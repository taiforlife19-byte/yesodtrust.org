# Yesod Trust Initiative website

A small, static educational website that helps older adults recognize modern scams and AI-enabled fraud.

## What's here

| File | What it is |
|---|---|
| `index.html` | Home page |
| `about.html` | About Us |
| `game.html` | The "Scam or Safe?" practice game |
| `contact.html` | Contact details and privacy note |
| `js/scenarios.js` | **All game scenarios.** Edit this file to change, add, or remove scenarios. |
| `js/game.js` | Game logic (you shouldn't need to edit this) |
| `css/styles.css` | Colors, fonts, and layout. Brand colors are at the top. |
| `fonts/` | Self-hosted Playfair Display and Montserrat (SIL Open Font License) |

There is no build step, framework, database, analytics, or tracking. The site is plain HTML, CSS, and JavaScript. To preview it, open `index.html` in a browser.

## Editing content

- **Page text:** open the `.html` file and change the words between the tags.
- **Game scenarios:** open `js/scenarios.js`. Each scenario is one `{ ... }` block. Instructions are at the top of the file. The game automatically adjusts to however many scenarios there are.
- **Header and footer** are repeated in each of the four pages. If you change one, change all four.

## Content rules (from the project brief)

- Use only fictional names, organizations, phone numbers (555-0100 to 555-0199), and web addresses (ending in `.example`). Never use working links in scenarios.
- Don't add statistics, partners, testimonials, team names, or impact claims unless they are confirmed and verifiable.
- Describe the project as a student-led educational initiative.
- Never ask visitors for passwords, financial details, ID numbers, or verification codes.

## Publishing

The site is designed for GitHub Pages: in the repository's **Settings → Pages**, set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`.

## Decisions and assumptions

- Text wordmark used in place of a logo until an approved logo exists.
- 12 scenarios (7 scams, 5 safe), fixed order, no difficulty levels, nothing saved between visits.
- English only.
- The fraud-reporting reference (ReportFraud.ftc.gov) assumes a U.S. audience.
