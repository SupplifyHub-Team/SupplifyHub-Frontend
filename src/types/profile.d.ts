interface ISupplierProfile {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  logoURL: string;
  description: string;
  locations: string[];
  categories: number[];
  planName: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  averageRating: number;
  productCount: number;
}
