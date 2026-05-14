import "./BookCard.css";
import star from "../assets/star.svg";
import close from "../assets/close.svg";
import { Book } from "../pages/Home";

type Props = {
  selected: Book;
  onClose: (close: any) => void;
};

export function BookCard({ selected, onClose }: Props) {
  return (
    <>
      <div className="overlay">
        <div className="card-container">
          <button className="close-btn" onClick={() => onClose(null)}>
            <img src={close} alt="close" />
          </button>
          <div className="card-header">
            <div className="book-img"></div>
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
            <p className="content-title">Description</p>
          </div>
        </div>
      </div>
    </>
  );
}
