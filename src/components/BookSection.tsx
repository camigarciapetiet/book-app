import "./BookSection.css";
import { BookItem } from "../components/BookItem";
import { Book } from "../pages/Home";

type Props = {
  title: String;
  books: Book[];
  onSelectBook: (book: Book) => void;
};

export function BookSection({ title, books, onSelectBook }: Props) {
  return (
    <>
      <div className="book-section">
        <p className="section-title">{title}</p>
        <div className="books-container">
          {books.map((book) => (
            <BookItem name={book.name} onClick={() => onSelectBook(book)} />
          ))}
        </div>
      </div>
    </>
  );
}
