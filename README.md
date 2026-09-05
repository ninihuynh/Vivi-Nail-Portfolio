# Vivi Nails — Portfolio & Booking Cart

A single-page site for a nail art portfolio: a filterable gallery and a shopping cart for booking services (no payment processing — it sends a booking request by email).

## What's inside

- **`index.html`** — the entire site (HTML, CSS, and JS in one file, no build step, no dependencies besides Google Fonts).
- **`photos/`** — real nail photos used in the gallery. Keep this folder alongside `index.html` — the site references images as `photos/filename.jpg`.

## Organizing photos going forward

- **One photo per gallery card.** If you shoot the same set from a couple of angles, pick the clearest, most front-on shot for the card rather than adding every angle — keeps the grid from feeling repetitive.
- **Flat folder, descriptive filenames.** No need for subfolders at this size — `photos/milk-bath-floral-accent.jpg`, `photos/chrome-cat-eye.jpg`, etc. The name doesn't need to match the on-site title exactly, just be identifiable to you.
- **Tag each one to a shade family** (nude, berry, chrome, sunset, emerald, red) when you send it over, so it lands in the right filter. When in doubt, pick the closest overall tone of the set.
- Photos are automatically resized to 1600px wide and stripped of phone metadata (including GPS location) before going on the site — worth doing for any photo you add yourself too, since phone photos often carry embedded location data.

## Try it locally

Just open `index.html` in a browser. Nothing to install.

## Push it to your GitHub repo

I don't have push access to `ninihuynh/Vivi-Nail-Portfolio` from here, so add the file yourself:

```bash
git clone https://github.com/ninihuynh/Vivi-Nail-Portfolio.git
cd Vivi-Nail-Portfolio
# copy index.html into this folder
git add index.html
git commit -m "Add portfolio site with gallery and booking cart"
git push
```

## Host it for free with GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Save — your site will be live at `https://ninihuynh.github.io/Vivi-Nail-Portfolio/` within a minute or two.

## Swapping in your real photos

Open `index.html` and find the `designs` array near the top of the `<script>` section. Each entry currently uses a CSS gradient as a placeholder:

```js
{ id:1, title:'Sunset Ombré Fade', family:'sunset', tag:'Ombré · Gel', bg:'linear-gradient(160deg,#F2A65A,#E8794A 55%,#B0193F)' }
```

To use a real photo instead, add an `img` field and update the `.nail-shape` rendering, e.g.:

```js
{ id:1, title:'Sunset Ombré Fade', family:'sunset', tag:'Ombré · Gel', img:'photos/sunset-ombre.jpg' }
```

and in the gallery render function, swap the gradient div for an `<img src="...">` when `img` is present. Happy to make that change for you once you have photos ready — just share them.

## Editing services & prices

Also near the top of the script, in the `services` array — each entry is `{ id, name, desc, duration, price }`. Add, remove, or edit rows freely; the cart and totals update automatically.

## The booking flow (no payment)

"Request booking" opens a form, then submitting it opens the visitor's email app with a pre-filled message (name, contact info, requested services, total, preferred date/time) addressed to `hello@vivinails.example`. **Update that address** to your real inbox in `index.html` (search for `mailto:hello@vivinails.example`).

If you later want real payments or a database of bookings instead of email, that needs a backend (e.g. Stripe for payment, a small server or a form service like Formspree for storing requests) — happy to help set that up when you're ready.