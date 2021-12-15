import ReviewCard from "./ReviewCard";
import ReviewApi from "./ReviewApi";
import config from "../config.json";
import React, { useState, useEffect } from "react";
const reviewService = new ReviewApi(config.api.url, config.api.key);

export default function ReviewList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    reviewService
      .fetchReviewList()
      .then(
        (result) => {          
          setIsLoaded(true);
          setItems(result.data);
        },       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const reviews = items.map((review) => (
      <ReviewCard key={review.id} author={review.author} rating={review.rating}>
        {review.body}
      </ReviewCard>
    ));
    return <>{reviews}</>;
  }
}
