interface ReviewOwner {
  id: string;
  fullName: string;
  image: string;
}

export interface Review {
  id: string;
  title: string;
  rating: number;
  createDate: string;
  owner: ReviewOwner;
}
