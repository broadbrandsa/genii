# Client logo assets — Trusted Globally strip

Brief rule (Homepage Design Brief, section 9): "Use accurate client logo files;
do not approximate or distort logos."

## Current state

25 logos are live in the strip, sourced from the existing geniianalytics.com
site. Untouched originals are kept outside `public/` in
`genii-website/assets-source/clients/`.

**Still outstanding** — named in the brief but not on the current site:
Wave Mobile Inc., TIH, Foodhub. They sit in `src/content/home.ts` with
`logo: null` and render nothing. A reminder line prints under the strip listing
them; it disappears automatically once all three have files.

## How these were prepared

The originals were 600x330 canvases with the artwork floating in heavy padding,
which renders tiny and inconsistent at a fixed display height. Each was:

1. **Background removed** by flood-filling inward from the border only, so
   interior whites are preserved (KFC's lettering, Land Rover's cream, Absa's
   inner counter).
2. **Trimmed** to the artwork's true bounding box.
3. **Normalised to a constant optical area** (~26,000px² at 2x) rather than a
   fixed height — otherwise a square mark like MTN visually overpowers a long
   wordmark like Nedbank. Both axes scale together, so nothing is distorted.
4. **Saved at even pixel dimensions** so the 1x display size in `home.ts` is an
   exact halving and the rendered aspect ratio matches the file precisely.

## Adding a new logo

1. Drop the licensed file in this folder, named as a slug (`wave-mobile.png`).
2. Run the same prep so it sits at the same optical weight as the others.
3. Add or update its entry in `src/content/home.ts` → `trusted.logos`:

   ```ts
   { name: "Wave Mobile Inc.", logo: "/images/clients/wave-mobile.png", w: 170, h: 38 }
   ```

   `w` and `h` are the **display** size — exactly half the file's pixel
   dimensions. If they don't match, the logo renders subtly squashed.

SVG is preferred where available; a transparent-background PNG at 2x is fine.

## Before go-live

- [ ] Source Wave Mobile Inc., TIH and Foodhub, or confirm with Genii that the
      current roster stands in their place.
- [ ] Confirm with Genii that every client here is cleared for public display
      with a current logo version. These came off the live site, so they were
      already public, but consent can lapse.
- [ ] Remove the "Awaiting brand assets" reminder line in `trusted.tsx` once the
      list is closed out.
