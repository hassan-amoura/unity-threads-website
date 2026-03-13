# Content and image management

Editable copy and image paths live in a few places so you can update the site without digging through components.

## Image folder structure

Place images in the `public` folder so they are available at `/images/...`:

```
public/
  images/
    hero/          ← Homepage hero image (above the main headline)
    about/         ← About page founder/owner photo
    products/      ← Product photos (one per product or use shared placeholder)
    homepage/      ← Optional: mission block, lifestyle block, category cards (short-sleeve, long-sleeve, crewneck)
```

Each of these folders has a **README.md** with exact instructions (e.g. recommended filename, where to set the path in code).

## Central content file

**`data/siteContent.ts`** holds:

| What | Where to edit |
|------|----------------|
| Homepage hero headline & subtext | `siteContent.homepage.heroHeadline`, `heroSubtext` |
| Homepage hero image path | `siteContent.homepage.heroImagePath` (file goes in `public/images/hero/`) |
| Homepage CTAs | `heroCtaPrimary`, `heroCtaSecondary` |
| About page founder image path | `siteContent.about.founderImagePath` (file goes in `public/images/about/`) |
| About page story heading & body | `siteContent.about.founderHeading`, `founderBody` |
| Homepage mission & lifestyle images | `missionImagePath`, `lifestyleImagePath` |
| Homepage category card images | `categoryImagePaths` (per category) |

Comments in `data/siteContent.ts` explain each field.

## Product images

**`lib/data/products.ts`** defines the product catalog. At the top of the file:

- **Default:** Every product uses the shared placeholder image until you add your own.
- **To use a real product photo:** Add a file to `public/images/products/` (e.g. `hopeful-horizon-tee.jpg`), then set that product’s `images[0].src` to `"/images/products/hopeful-horizon-tee.jpg"` (or the filename you used).

The file includes a short comment block explaining this.

## Summary of changes

- **Created:** `data/siteContent.ts`, `public/images/hero/`, `public/images/about/`, `public/images/products/`, `public/images/homepage/`, plus placeholder SVGs and READMEs in each image folder.
- **Updated:** Homepage (hero image above headline, all hero and section copy/images from `siteContent`), About page (two-column layout, founder image and copy from `siteContent`), `lib/data/products.ts` (local image paths, shared placeholder), `next.config.mjs` (removed remote placeholder config).
- **Content moved into `siteContent`:** Hero headline, subtext, label, CTAs, hero image path; about founder image path, heading, body paragraphs; mission/lifestyle/category image paths.
