# HEALTHY NATION — Static Multi-Page Site

Static implementation of the HEALTHY NATION flows cloned from provided screenshots (home, gender → age → diet → resources).

## Run locally

Any static server works. With Python installed:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/` and browse the HTML pages.

## Pages

- `index.html` — hero with refined CTA and value prop, overview grid
- `tools.html` — hub for all calculators and assessment tools
- `shop.html` — curated products with filtering (supplements, nutrition, equipment)
- `workout.html` → `fitness-level.html` → `age-select.html` → `workout-plan.html` — gender/level/age flow
- `diet-plan.html` — meal plans with nutrition facts
- `resources.html` — nutrition tiles, lifestyle features, and store integration
- `resource-detail.html` — food database with checkout flow
- `login.html`, `cart.html` — placeholder auth and cart pages
- `bmi.html`, `calories.html`, `workout.html`, `workout-plan.html` — supplemental stubs
- `styles.css` — shared styling; `script.js` — chat popover placeholder

## Customization notes

- Replace header logo by adding `assets/logo.png`; falls back to `assets/logo.svg`.
- Resource tiles and feature images use gradients as placeholders; swap with real imagery as needed.
- No build step or dependencies; edit HTML/CSS directly.

## Deployment

- For GitHub Pages, deploy from the repository root so `index.html` resolves at the root path.
