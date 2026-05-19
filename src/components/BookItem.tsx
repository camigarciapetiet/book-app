import "./BookItem.css";

type Props = {
  name: string;
  image: string;
  onClick: () => void;
};

export function BookItem({ name, image, onClick }: Props) {
  return (
    <>
      <div className="book-container" onClick={onClick}>
        <img className="book-img" src={image}></img>
        <p className="book-name">{name}</p>
      </div>
    </>
  );
}
