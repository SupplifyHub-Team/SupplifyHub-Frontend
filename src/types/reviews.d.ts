interface IRatingSummary {
  totalRatings: number;
  Distribution: number[];
}

interface IReview {
  reviewerName: string;
  comment: string;
  rating: number;
}
