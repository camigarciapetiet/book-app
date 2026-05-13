import "./BookItem.css";

type Props = {
  name: string;
};

export function BookItem({ name }: Props) {
  return (
    <>
      <div className="book-container">
        <div className="book-img"> </div>
        <p className="book-name">{name}</p>
      </div>
    </>
  );
}
