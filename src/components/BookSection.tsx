import "./BookSection.css";
import { BookItem } from "../components/BookItem";

type Props = {
  title: String;
  books: { name: string; author: string }[];
};

export function BookSection({ title, books }: Props) {
  return (
    <>
      <div className="book-section">
        <p className="section-title">{title}</p>
        <div className="books-container">
          {books.map((book) => (
            <BookItem name={book.name} />
          ))}
        </div>
      </div>
    </>
  );
}
