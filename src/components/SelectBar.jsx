import "./SelectBar.css";

export function SelectBar() {
  return (
    <>
      <div className="select-container">
        <button className="select-option">Recommended</button>
        <button className="select-option">Trending</button>
        <button className="select-option">Your Favourites</button>
      </div>
    </>
  );
}
