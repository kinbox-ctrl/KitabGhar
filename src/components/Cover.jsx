import { imageFor } from "../lib/images.js";

// Cover artwork for books with no picture. Each book gets one of these motifs
// from its id; set `art: "arches"` (etc.) on a book in books.js to choose one.
const ARTS = ["sun", "arches", "dunes", "dots", "stripes", "frame"];
const artFor = (book) =>
  ARTS.includes(book.art) ? book.art : ARTS[[...book.id].reduce((n, ch) => n + ch.charCodeAt(0), 0) % ARTS.length];

function Art({ kind }) {
  const line = { fill: "none", stroke: "#fff", strokeWidth: 0.9 };
  switch (kind) {
    case "sun":
      return (
        <>
          <circle cx="70" cy="40" r="24" fill="#fff" opacity=".24" />
          <circle cx="70" cy="40" r="36" {...line} opacity=".22" />
          <circle cx="70" cy="40" r="48" {...line} opacity=".12" />
        </>
      );
    case "arches":
      return [36, 27, 18].map((r, i) => (
        <path key={r} d={`M${50 - r} 96V52a${r} ${r} 0 0 1 ${2 * r} 0v44`} {...line} opacity={0.2 + i * 0.12} />
      )).concat(<path key="door" d="M41 96V52a9 9 0 0 1 18 0v44z" fill="#fff" opacity=".26" />);
    case "dunes":
      return (
        <>
          <circle cx="74" cy="30" r="9" fill="#fff" opacity=".3" />
          {[48, 58, 68, 78, 88].map((y, i) => (
            <path key={y} d={`M-5 ${y}q13-9 27.5 0t27.5 0 27.5 0 27.5 0`} {...line} opacity={0.16 + i * 0.07} />
          ))}
        </>
      );
    case "dots":
      return Array.from({ length: 7 }, (_, row) =>
        Array.from({ length: 6 }, (_, col) => (
          <circle key={`${row}-${col}`} cx={17 + col * 13.2} cy={20 + row * 12} r="2.2" fill="#fff" opacity={0.42 - row * 0.05} />
        ))
      );
    case "stripes":
      return (
        <g transform="rotate(-32 50 50)">
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x="-60" y={-22 + i * 15} width="220" height="6" fill="#fff" opacity={0.26 - i * 0.025} />
          ))}
        </g>
      );
    default: // frame
      return (
        <>
          <rect x="11" y="11" width="78" height="128" {...line} opacity=".3" />
          <rect x="15" y="15" width="70" height="120" {...line} opacity=".16" />
          <path d="M50 34l15 17-15 17-15-17z" fill="#fff" opacity=".26" />
          <path d="M50 26l22 25-22 25-22-25z" {...line} opacity=".22" />
        </>
      );
  }
}

// Shows the book's picture from /images when there is one, otherwise a designed cover.
export default function Cover({ book, className = "", style }) {
  const src = imageFor(book);
  return (
    <div
      className={`cover relative aspect-[2/3] overflow-hidden rounded-[2px_5px_5px_2px] ${className}`}
      style={{ backgroundColor: book.color, ...style }}
    >
      {src ? (
        <img src={src} alt="" className="absolute inset-0 size-full object-cover" />
      ) : (
        <>
          <svg viewBox="0 0 100 150" className="absolute inset-0 size-full" aria-hidden="true">
            <Art kind={artFor(book)} />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <div className="absolute inset-0 flex flex-col p-[10%] pl-[13%] text-white">
            <span className="cover-mark font-medium uppercase opacity-75">KitabGhar</span>
            <span className="cover-title mt-auto font-display text-balance">{book.title}</span>
            <span className="cover-author mt-[5%] border-t border-white/35 pt-[5%] opacity-90">{book.author}</span>
          </div>
        </>
      )}
      {/* spine, sheen and page edge give the flat cover some depth */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/35 via-white/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/15" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/30" />
    </div>
  );
}
