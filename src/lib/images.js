// Every picture dropped into the top-level /images folder is picked up here
// automatically and matched to a book by file name (godan.jpg → id "godan").
const files = import.meta.glob("/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
});

const byFile = {};
const byName = {};
for (const [path, url] of Object.entries(files)) {
  const file = path.split("/").pop().toLowerCase();
  byFile[file] = url;
  byName[file.replace(/\.[^.]+$/, "")] = url;
}

export const imageFor = (book) =>
  (book.image && byFile[book.image.split("/").pop().toLowerCase()]) || byName[book.id.toLowerCase()];

export const heroImage = byName.hero;
