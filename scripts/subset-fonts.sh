#!/bin/sh
# Rebuilds src/assets/fonts/*-core-*.woff2: the fontsource latin files cut to
# the characters the site actually uses (about half the bytes). index.css
# declares them after the fontsource faces with a matching unicode-range, so
# they win for these characters; any other glyph still falls back to the full
# fontsource file. If copy gains a character outside UNICODES, add it here and
# to the unicode-range in src/index.css, then rerun.
# Needs fonttools + brotli:  python3 -m pip install fonttools brotli
set -e
UNICODES="U+0020-007E,U+00A0,U+00A3,U+00A9,U+00B7,U+00D7,U+00E9,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2026"
FS=node_modules/@fontsource-variable
for f in inter/files/inter-latin-wght-normal \
         cormorant-garamond/files/cormorant-garamond-latin-wght-normal \
         cormorant-garamond/files/cormorant-garamond-latin-wght-italic; do
  name=$(basename "$f" | sed 's/-latin-/-core-/')
  pyftsubset "$FS/$f.woff2" --unicodes="$UNICODES" --flavor=woff2 \
    --layout-features='kern,liga,calt,lnum,tnum,pnum,onum' \
    --output-file="src/assets/fonts/$name.woff2"
done
