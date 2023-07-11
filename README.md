# Good Shepherd Lutheran Church And School

This is v5 of the site for the church and school.

## Change Log

#### 7/8/23

- Rebuilt navbar.
- Fixed empty cell issues on Programs page caused by empty PE and STEM targets.
- Added missing meta tags. SEO is still a WIP.

#### 7/10/23

- Moved 'Life Together' gallery to church landing.
- Added transitions to Gallery component.
- More minor style tweaks on Gallery.
- Added "Still Need" section to this document.
- Added more details to the Details section of this document.

#### 7/10/23

- Turned copied PDF calendar to Google Calendar.
- Added calendar to school. Still need church.

## Still Need

- PE blurb.
- STEM blurb.
- Youth Group blurb.
- Many many pictures.
- Guidance on sub-landing pages: Should they exist? What else can we put on them?
- https://web3forms.com key for church email.
- Donation handling.
- School tour images.

## To Do

See TODO.md in root. The change log in this file might conflict because,

1. I forgot to update TODO or,
2. Change log entry is only a partial resolution.

## Stack

- HTML5
- TypeScript
- Svelte
- Vite

## Details

This site was generated with Svelte and the static adapter. It uses client-side scripting for many behaviors.

Deploy with `npm run deploy`. This will push build folder to remote `gh-pages` branch and GitHub Pages will automatically update. In order to **B**uild, **C**ommit, **D**eploy and **P**ush, `npm run BCDP -- "commit message"`.

If you want to change build tools, remember that you need to generate the root CMAKE file on deployment in order to work with Domains and GH Pages. Current method is in `package.json` under deploy script.

This app contains 3 public keys: church email for web3forms.com API, school email for web3forms.com API, and my personal YouTube developer key.
