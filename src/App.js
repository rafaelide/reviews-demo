import ReviewList from "./reviews/ReviewList";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Shakespeare Review's</h1>
      <div className="Reviews">
        <ReviewList></ReviewList>
      </div>
    </div>
  );
}