import "./BookSection.css";

type Props = {
  title: String;
};

export function BookSection({ title }: Props) {
  return (
    <>
      <div className="book-section">
        <p className="section-title">{title}</p>
        <div className="book-container"></div>
      </div>
    </>
  );
}
