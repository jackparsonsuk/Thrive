# Gallery photos

Drop the gallery photos straight into this folder. Anything in here shows up on
`/gallery` automatically — no code changes needed.

- **Formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- **Portrait and landscape both work.** The grid is masonry-style, so each photo
  keeps its own shape — nothing gets cropped.
- **Order:** photos are sorted by filename. To control the order, prefix them
  with numbers: `01-front-door.jpg`, `02-rig.jpg`, `03-studio.jpg`.
- **Alt text** comes from the filename: any leading numbers are stripped, and
  dashes/underscores become spaces. `03_squat-rack.jpg` → "Squat rack".
  So name files descriptively — it's what screen readers and Google read.
- **Size:** export around 2000px on the long edge and save at ~80% quality.
  Vite hashes and serves them as-is, so multi-megabyte camera originals will
  make the page slow.

After adding or removing files, restart the dev server (`npm run dev`) if it was
already running, then commit the images along with the change.
