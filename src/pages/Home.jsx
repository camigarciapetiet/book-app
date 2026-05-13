import { Header } from "../components/Header";
import { SelectBar } from "../components/SelectBar";
import { BookSection } from "../components/BookSection";

import "./Home.css";

export function Home() {
  return (
    <>
      <Header />
      <SelectBar />
      <BookSection title="Best Sellers" />
      <BookSection title="Action" />
    </>
  );
}
