import "./ReviewCard.css";

export default function ReviewCard(props) {
  return (
    <div className="ReviewCard">
      <div className="Title">
        <p className="AlignLeft">
          {props.author}
          <span className="AlignRight"> {props.rating} </span>
        </p>
      </div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
