# Cafe Venezia website

Static one-page website for **Cafe Venezia Ltd**, 8 Chaseville Parade, Chaseville Park Road, Winchmore Hill, London N21 1PG.
Live at <https://cafevenezia.co.uk>, hosted on GitHub Pages. Plain HTML/CSS/JS – no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | The main page (all sections) |
| `privacy.html` | Privacy policy |
| `styles.css` | All styling; colours are at the top under `:root` |
| `script.js` | Highlights today's opening hours, footer year, mobile menu |
| `assets/` | Logos, icons and social share image |
| `favicon.png` | Browser tab icon |
| `CNAME` | Tells GitHub Pages to use `cafevenezia.co.uk` – don't delete |

The `Updated Vector Based Logo/` folder holds the original artwork. It is listed in `.gitignore` and is **not** published.

## Editing text

Open `index.html` in any text editor and change the words between the tags. Sections are marked with `id="about"`, `id="menu"`, `id="hours"`, `id="find-us"`, `id="contact"`.

**If you change the phone number, address or opening hours, update every place they appear**, otherwise Apple / Google verification may fail:

1. The visible text in `index.html` (hero button, Find us, Contact, footer).
2. The `tel:+44…` links.
3. The JSON-LD block near the top of `index.html` (`telephone`, `address`, `openingHoursSpecification`).
4. `privacy.html` (company details and phone).

Details must match Companies House / D-U-N-S exactly.

## Swapping photos

- **Hero photo:** replace `assets/hero.jpg` and `assets/hero.webp` with your new photo (landscape, around 1920px wide, under 400 KB), keeping the same file names. On a Mac you can make both with:
  `sips -s format jpeg -Z 1920 new-photo.jpg --out assets/hero.jpg` and `cwebp -q 72 -resize 1920 0 new-photo.jpg -o assets/hero.webp`.
- **Logo:** replace `assets/logo-white.png` / `.webp` (white on transparent, used in header and hero) and `assets/logo-black.png`, keeping the same file names.
- **Favicon / share image:** replace `favicon.png` (32×32), `assets/apple-touch-icon.png` (180×180), `assets/icon-192.png` and `assets/og-image.png`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Redeploying

Every push to `main` republishes automatically (takes a minute or two):

```bash
git add -A
git commit -m "Update opening hours"
git push
```

## First-time setup (already done once)

1. Create a public GitHub repo (e.g. `cafevenezia-website`) and push to `main`.
2. Repo → Settings → Pages: *Deploy from a branch*, branch `main`, folder `/ (root)`. Custom domain: `cafevenezia.co.uk`.
3. Cloudflare DNS for `cafevenezia.co.uk`:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<github-username>.github.io`
   - All set to **DNS only** (grey cloud).
4. Wait for GitHub to issue the certificate, then tick **Enforce HTTPS** in Settings → Pages.
5. Optional: re-enable the Cloudflare proxy (orange cloud) with SSL/TLS mode **Full**.
6. Optional: verify the domain under GitHub → Settings → Pages (account level) to prevent takeover.
