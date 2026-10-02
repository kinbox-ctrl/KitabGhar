import Cover from "./Cover.jsx";

// A cover shown as a standing book with thickness and page edges; it turns to face you on hover.
export default function Book3D({ book, className = "", thickness = "1rem" }) {
  return (
    <div className={`book3d ${className}`}>
      <div className="book3d-inner" style={{ "--c": book.color, "--t": thickness }}>
        <Cover book={book} />
      </div>
    </div>
  );
}
