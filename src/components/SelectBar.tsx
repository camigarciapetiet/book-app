import { useState } from "react";
import "./SelectBar.css";

export function SelectBar() {
  const [selected, setSelected] = useState<string>("trending");

  return (
    <>
      <div className="select-container">
        <button
          className={`select-option ${selected === "recommended" ? "active" : ""}`}
          onClick={() => setSelected("recommended")}
        >
          Recommended
        </button>
        <button
          className={`select-option ${selected === "trending" ? "active" : ""}`}
          onClick={() => setSelected("trending")}
        >
          Trending
        </button>
        <button
          className={`select-option ${selected === "favourites" ? "active" : ""}`}
          onClick={() => setSelected("favourites")}
        >
          Your Favourites
        </button>
      </div>
    </>
  );
}
