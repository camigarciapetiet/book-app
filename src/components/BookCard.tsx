import "./BookCard.css";
import star from "../assets/star.svg";
import close from "../assets/close.svg";
import heart from "../assets/heart.svg";
import redheart from "../assets/red-heart.svg";
import { Book } from "../pages/Home";

type Props = {
  selected: Book;
  onClose: (close: any) => void;
  onFavorite: (book: Book) => void;
  isFavorite: boolean;
};

export function BookCard({ selected, onClose, onFavorite, isFavorite }: Props) {
  return (
    <>
      <div className="overlay">
        <div className="card-container">
          <div
            className={isFavorite ? "favorite-btn active" : "favorite-btn"}
            onClick={() => onFavorite(selected)}
          >
            <img
              src={isFavorite ? redheart : heart}
              alt="favorite"
              className="heart-img"
            />
          </div>
          <button className="close-btn" onClick={() => onClose(null)}>
            <img src={close} alt="close" />
          </button>
          <div className="card-header">
            <img className="book-img-overlay" src={selected.image}></img>
            <p className="book-title">{selected.name}</p>
            <p className="book-author">{selected.author}</p>
            <div className="book-rating">
              <img src={star} className="star-rating"></img>
              <img src={star} className="star-rating"></img>
              <img src={star} className="star-rating"></img>
              <img src={star} className="star-rating"></img>
              <img src={star} className="star-rating"></img>
            </div>
          </div>
          <div className="card-content">
            <p className="content-title"></p>
          </div>
        </div>
      </div>
    </>
  );
}
