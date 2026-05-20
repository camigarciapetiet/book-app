import { Header } from "../components/Header";
import { SelectBar } from "../components/SelectBar";
import { BookSection } from "../components/BookSection";
import { BookCard } from "../components/BookCard";
import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type Book = {
  id: number;
  name: string;
  author: string;
  image: string;
  description: string | null;
};

export function Home() {
  const [sciFiBooks, setSciFiBooks] = useState<Book[] | null>(null);
  const [actionBooks, setActionBooks] = useState<Book[] | null>(null);
  const [romanceBooks, setRomanceBooks] = useState<Book[] | null>(null);
  const [bestsellerBooks, setBestsellerBooks] = useState<Book[] | null>(null);
  const [fantasyBooks, setFantasyBooks] = useState<Book[] | null>(null);

  async function fetchBookCategory(category: string, limit: number) {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(category)}`,
    );
    const data = await res.json();

    const books = data.docs.slice(0, limit).map((doc: any) => ({
      id: doc.key,
      name: doc.title,
      author: doc.author_name?.[0] || "Unknown",
      image: doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : null,
      description: null,
    }));

    return books;
  }

  useEffect(() => {
    fetchBookCategory("bestseller", 10).then(setBestsellerBooks);
    fetchBookCategory("science fiction", 10).then(setSciFiBooks);
    fetchBookCategory("action", 10).then(setActionBooks);
    fetchBookCategory("romance", 10).then(setRomanceBooks);
    fetchBookCategory("fantasy", 10).then(setFantasyBooks);
  }, []);

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedTab, setSelectedTab] = useState<String>("trending");
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  const toggleTab = (tab: String) => {
    setSelectedTab(tab);
  };

  const handleFavorite = (book: Book) => {
    setFavoriteBooks((prev) => {
      const exists = prev.some((f) => f.id === book.id);
      if (exists) {
        return favoriteBooks.filter((f) => f.id !== book.id);
      } else {
        return [...prev, book];
      }
    });
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-page">
      <Header onLogout={handleLogout} />
      <SelectBar selected={selectedTab} onSelect={toggleTab} />
      {selectedTab === "trending" && (
        <div>
          <BookSection
            title="Best Sellers"
            books={bestsellerBooks}
            onSelectBook={setSelectedBook}
          />
          <BookSection
            title="Action"
            books={actionBooks}
            onSelectBook={setSelectedBook}
          />
          <BookSection
            title="Romance"
            books={romanceBooks}
            onSelectBook={setSelectedBook}
          />
          <BookSection
            title="Fantasy"
            books={fantasyBooks}
            onSelectBook={setSelectedBook}
          />
          <BookSection
            title="Sci-Fi"
            books={sciFiBooks}
            onSelectBook={setSelectedBook}
          />
        </div>
      )}
      {selectedTab === "favorites" && (
        <div>
          <BookSection
            title="Marked as favorite:"
            books={favoriteBooks}
            onSelectBook={setSelectedBook}
          />
        </div>
      )}
      {selectedBook && (
        <BookCard
          selected={selectedBook}
          onClose={setSelectedBook}
          onFavorite={handleFavorite}
          isFavorite={favoriteBooks.some((b) => b.id === selectedBook?.id)}
        />
      )}
    </div>
  );
}
