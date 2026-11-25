#!/usr/bin/env python3
"""Resize original photos for the web.

Usage:
  python3 scripts/optimize-photos.py <input-file-or-folder> [more…]

Each JPG/PNG is saved to public/images/<same-name>.jpg with the long edge at
most 2400px, JPEG quality 84, progressive. Next.js <Image> then serves smaller
AVIF/WebP versions per screen, so 2400px is plenty for a full-width photo on a
retina laptop. Put full-resolution originals anywhere outside the repo and run
this; then add the photo to src/content/photos.ts (the script prints the line).
"""
import sys, os, glob
from PIL import Image, ImageOps

MAX = 2400
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")

def files(args):
    for a in args:
        if os.path.isdir(a):
            for ext in ("jpg", "jpeg", "png", "JPG", "JPEG", "PNG"):
                yield from sorted(glob.glob(os.path.join(a, f"*.{ext}")))
        else:
            yield a

def main(args):
    os.makedirs(OUT, exist_ok=True)
    for f in files(args):
        name = os.path.splitext(os.path.basename(f))[0].lower().replace(" ", "-") + ".jpg"
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        im.thumbnail((MAX, MAX), Image.LANCZOS)
        im.save(os.path.join(OUT, name), "JPEG", quality=84, optimize=True, progressive=True)
        print(f'  "{name[:-4]}": {{ w: {im.width}, h: {im.height}, alt: "" }},')

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    main(sys.argv[1:])
