interface IPlan {
  id: number;
  createdAt: string;
  updatedAt: string;
  planName: string;
  price: number;
  description: string;
  duration: number;
  cons: string[];
  pros: string[];
}
