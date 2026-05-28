# Asset Sources

`asset-sources/originals/` is intentionally ignored by git. It stores local source
copies of portfolio visuals before they are resized, stripped, fingerprinted, and
watermarked into deployable files under `public/`.

Run `npm run assets:protect` after adding or replacing portfolio imagery, then
run `npm run assets:audit` before shipping.
