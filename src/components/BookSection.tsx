import "./BookSection.css";
import { BookItem } from "../components/BookItem";
import { Book } from "../pages/Home";
import { useRef } from "react";

type Props = {
  title: String;
  books: Book[] | null;
  onSelectBook: (book: Book) => void;
};

export function BookSection({ title, books, onSelectBook }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="book-section">
        <p className="section-title">{title}</p>
        <div className="books-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>
            ◀
          </button>
          <div className="books-container" ref={containerRef}>
            {books?.map((book) => (
              <BookItem
                name={book.name}
                image={book.image}
                onClick={() => onSelectBook(book)}
              />
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>
            ▶
          </button>
        </div>
      </div>
    </>
  );
}
