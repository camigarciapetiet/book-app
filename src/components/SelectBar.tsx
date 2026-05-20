import { useState } from "react";
import "./SelectBar.css";

type Props = {
  selected: String;
  onSelect: (s: String) => void;
};

export function SelectBar({ selected, onSelect }: Props) {
  return (
    <>
      <div className="select-container">
        <button
          className={`select-option ${selected === "recommended" ? "active" : ""}`}
          onClick={() => onSelect("recommended")}
        >
          Recommended
        </button>
        <button
          className={`select-option ${selected === "trending" ? "active" : ""}`}
          onClick={() => onSelect("trending")}
        >
          Trending
        </button>
        <button
          className={`select-option ${selected === "favorites" ? "active" : ""}`}
          onClick={() => onSelect("favorites")}
        >
          Your favorites
        </button>
      </div>
    </>
  );
}
