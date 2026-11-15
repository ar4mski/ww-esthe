# Adding content

Instructions for adding a new treatment and a blog post. The remaining data (contact, FAQ, gallery) is described in the [README](../README.md#editing-content).

## New treatment

1. Add an object to the `treatments` array in `data/treatments.ts` (use the existing treatments as a template). The `slug` becomes the address `/zabiegi/<slug>`.
2. Put the cover in `public/images/treatments/<slug>/cover.jpg` (at most 2400 px on the longer side, JPEG, quality about 82) and add it to `treatmentImages` in the same file. Without an entry the treatment gets `heroes/fallback.jpg`.
3. Prepare the Open Graph image: `public/images/og/treatments/<slug>/cover.jpg` (see [below](#open-graph-image)).
4. Optional: extra photos in `data/treatment-showcase.ts`, a gallery link in `galleryLinks` (`app/zabiegi/[slug]/page.tsx`), a price in the price list.
5. Run `npm run build` and check the page.

## New blog post

1. Create `content/blog/<slug>.mdx`; the file name becomes the address `/blog/<slug>`. The frontmatter template is in the [README](../README.md#editing-content); `category` must match a label from `blogCategories` in `data/blog.ts`.
2. Cover (`coverImage`): an existing photo from `public/images/` or a new one (at most 2400 px, JPEG).
3. Open Graph image: if the cover already has a crop in `public/images/og/` (e.g. a treatment cover), nothing needs to be done. For a new photo, prepare a crop under the same path with the `og/` prefix.
4. Run `npm run build`; invalid frontmatter aborts the build with a readable message.

## Open Graph image

A link preview (Facebook, Messenger, WhatsApp, LinkedIn) has a 1.91:1 aspect ratio and the covers are vertical, so every cover used as `og:image` has a hand-cropped 1200×630 copy.

- **Path:** the same as the source, with `og/` after `images/`, e.g. `/images/treatments/modelowanie-ust/cover.jpg` → `/images/og/treatments/modelowanie-ust/cover.jpg`. Exception: `og/heroes/fallback.jpg` is a brow crop, because `fallback.jpg` is the cover of laser brow removal.
- **Crop:** a page about lips → lips, about brows → brows, when it is hard to tell → face.
- **No crop:** the page gets the default image (`siteConfig.defaultOgImage`) and the build prints the warning `Missing Open Graph image …`. Logic: `getOgImage` in `data/page-metadata.ts`; the same crop goes into the JSON-LD (`Service`, `BlogPosting`) next to the vertical cover.

Cropping (requires `ffmpeg`, `brew install ffmpeg`):

```sh
# W = width of the crop in source px, X and Y = top-left corner of the crop.
# The crop height is computed automatically (W × 630 / 1200).
ffmpeg -i public/images/<path>.jpg \
  -vf "crop=W:W*630/1200:X:Y,scale=1200:630:flags=lanczos" \
  -q:v 4 public/images/og/<path>.jpg
```

- Source dimensions: `ffprobe -v error -show_entries stream=width,height -of csv=p=0 <file>`.
- Full width of a vertical photo: `W` = source width, `X` = 0, pick `Y` so that the subject is in the middle of the strip.
- A tighter crop (e.g. just the brows): a smaller `W`; below about 800 px the image is noticeably upscaled.
- The result should be 30–80 KB. Check it visually before committing.
