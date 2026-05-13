import { Header } from "../components/Header";
import { SelectBar } from "../components/SelectBar";
import { BookSection } from "../components/BookSection";

import "./Home.css";

export function Home() {
  const bestSellers = [
    { name: "The Midnight Library", author: "Matt Haig" },
    { name: "Atomic Habits", author: "James Clear" },
    { name: "It Ends with Us", author: "Colleen Hoover" },
    { name: "The Silent Patient", author: "Alex Michaelides" },
    { name: "Where the Crawdads Sing", author: "Delia Owens" },
  ];

  const actionBooks = [
    { name: "The Hunger Games", author: "Suzanne Collins" },
    { name: "Divergent", author: "Veronica Roth" },
    { name: "The Maze Runner", author: "James Dashner" },
    { name: "Ready Player One", author: "Ernest Cline" },
    { name: "Jurassic Park", author: "Michael Crichton" },
  ];
  return (
    <>
      <Header />
      <SelectBar />
      <BookSection title="Best Sellers" books={bestSellers} />
      <BookSection title="Action" books={actionBooks} />
    </>
  );
}
