KitabGhar — pictures folder
===========================

Put your pictures in THIS folder. The website picks them up automatically.

BOOK COVERS
-----------
Name the picture after the book's "id" in src/data/books.js:

    id: "godan"            →  images/godan.jpg
    id: "madhushala"       →  images/madhushala.png
    id: "malgudi-days"     →  images/malgudi-days.jpg

Allowed types: .jpg  .jpeg  .png  .webp  .avif
Best shape: upright (portrait), about 600 x 900 pixels.

A book with no picture gets a designed coloured cover, so nothing looks broken.

Want a different file name? In src/data/books.js add this line to the book:

    image: "any-name-you-like.jpg",

HERO PICTURE (optional)
-----------------------
Save a photo (your shop, a bookshelf...) as:

    images/hero.jpg

It replaces the three book covers at the top of the page.

If a new picture does not appear, refresh the page in your browser.
