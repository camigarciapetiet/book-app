import "./BookItem.css";

type Props = {
  name: string;
  onClick: () => void;
};

export function BookItem({ name, onClick }: Props) {
  return (
    <>
      <div className="book-container" onClick={onClick}>
        <div className="book-img"> </div>
        <p className="book-name">{name}</p>
      </div>
    </>
  );
}
