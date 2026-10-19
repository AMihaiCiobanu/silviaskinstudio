# Halloween theme — how it works and how to remove it

From 15 Oct to 1 Nov the hero shows Halloween decor (bats, cobwebs, a pumpkin,
crawling spiders) instead of the gold serum drops. From 2 Nov it switches back
on its own, nothing to deploy. Ported from NailsByClemi without the scarecrow
and its sounds.

Files:

- `src/components/seasonal/season.js`: season dates, `isHalloween()`
- `src/components/seasonal/Halloween.jsx` + `halloween.css`: the decor (lazy-loaded, so out of season it is never downloaded)
- `src/components/sections/Hero.jsx`: two `HALLOWEEN:start` … `HALLOWEEN:end` blocks

Preview any time: `/?halloween=1`. Force off: `/?halloween=0`.

To delete it completely:

1. `rm -r src/components/seasonal HALLOWEEN.md`
2. In `Hero.jsx` remove the import block between the markers, and in the JSX keep only
   `{showDrops && <SerumDrops … />}` in place of the `HALLOWEEN` ternary.
