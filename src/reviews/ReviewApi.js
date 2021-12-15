import axios from "axios";

class ReviewApi {
  constructor(apiUrl, apiKey) {
    this.url = apiUrl;
    this.key = apiKey;
    if (!apiUrl || !apiKey)
      console.log("Invalid api configutation, verify config.json", apiUrl, apiKey);
    this.client = axios.create({
      baseURL: apiUrl,
      timeout: 30000,
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
    });
  }

  async fetchReviewList() {
    return this.client.get("/api/reviews");
  }

  async fetchReviewDetails(reviewId) {
    return this.client.get("/api/reviews/"+reviewId);
  }

}
export default ReviewApi;
