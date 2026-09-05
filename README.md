# Vivi Nails — Portfolio & Booking Cart

A single-page site for a nail art portfolio: a filterable gallery and a shopping cart for booking services (no payment processing — it sends a booking request by email).

## What's inside

- **`index.html`** — the site itself (structure, styling, and behavior). You shouldn't need to edit this for day-to-day updates.
- **`gallery-data.js`** — the list of gallery photos, kept separate so it's simple to edit by hand if you ever want to.
- **`add-photo.html`** — a form-based tool for adding photos without touching any code (see below).
- **`photos/`** — the image files themselves.

## Adding a photo (no coding)

1. Open **`add-photo.html`** by double-clicking it — it opens right in your browser, no internet or install needed.
2. Choose the photo, type a title, pick the shade family, and optionally add a short tag.
3. Click **Generate**. You'll get:
   - A **Download photo** button — save it into your `photos/` folder.
   - A **line of code** — copy it and paste it into `gallery-data.js`, anywhere inside the list (there are comments in that file showing exactly where).
4. Refresh `index.html` to see it show up. Push both the new photo and the updated `gallery-data.js` to GitHub when you're happy with it.

The tool resizes the photo and strips out phone metadata (including GPS location) automatically — nothing is uploaded anywhere, it all happens locally in your browser.

To remove a photo later, delete its line from `gallery-data.js` (and the file from `photos/` if you like). To reorder the gallery, reorder the lines.

## Editing without the tool

If you'd rather edit directly, open `gallery-data.js` in any text editor — each photo is one line:

```js
{ id:1727891234567, title:'Chrome Cat-Eye Set', family:'chrome', tag:'Chrome powder · Cat-eye', img:'photos/chrome-chrome-cat-eye-set.jpg' },
```

`family` must be one of: `nude`, `berry`, `chrome`, `sunset`, `emerald`, `red` — these match the filter chips on the site.

## Try it locally

Just open `index.html` in a browser. Nothing to install.

## Push it to your GitHub repo

I don't have push access to `ninihuynh/Vivi-Nail-Portfolio` from here, so add the files yourself:

```bash
git clone https://github.com/ninihuynh/Vivi-Nail-Portfolio.git
cd Vivi-Nail-Portfolio
# copy index.html, gallery-data.js, add-photo.html, and the photos/ folder into this folder
git add .
git commit -m "Add portfolio site with gallery, booking cart, and photo tool"
git push
```

## Host it for free with GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Save — your site will be live at `https://ninihuynh.github.io/Vivi-Nail-Portfolio/` within a minute or two.

Once it's live, `add-photo.html` also works at its live URL (e.g. `.../add-photo.html`) — same steps, just pushed to GitHub afterward instead of edited locally.

## Editing services & prices

Also near the top of the script, in the `services` array — each entry is `{ id, name, desc, duration, price }`. Add, remove, or edit rows freely; the cart and totals update automatically.

## The booking flow (no payment)

"Request booking" opens a form, then submitting it opens the visitor's email app with a pre-filled message (name, contact info, requested services, total, preferred date/time) addressed to `hello@vivinails.example`. **Update that address** to your real inbox in `index.html` (search for `mailto:hello@vivinails.example`).

If you later want real payments or a database of bookings instead of email, that needs a backend (e.g. Stripe for payment, a small server or a form service like Formspree for storing requests) — happy to help set that up when you're ready.