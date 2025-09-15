interface ISupplierInfo {
  id: number ;
  name: string;
  email: string;
  phoneNumber: string;
  logoUrl: string;
  description: string;
  locations: string[];
  countOfOrderAccepted: number;
  categories: string[];
  averageRating: number;
  productCount: number;
}

interface IAccountInfoPatchResponse {
  id: number | string;
  description: string;
  locations: string[];
  CategoryIds: (string | number)[];
}

interface IAccountLogoPatchResponse {
  id: number | string;
  logoUrl: string | File | null | undefined;
}

// interface for supplier Product and reviews
interface ISupplierProductsAndReviews {
  products: ISupplierProducts[];
  allReviews: ISupplierReviews[];
  companyName: string;
}

export interface ISupplierProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  companyName: string;
  productImageURl: string;
  offer: number;
  isSpecial: boolean;
}

interface ISupplierReviews {
  reviewerName: string;
  rating: number;
  comment: string;
}

interface ISupplierAnalytics {
  message: string;
}

interface ISupplierDeal {
  dealId: number | string;
  description: string;
  CompanyName: string;
  CompanyEmail: string;
  CompanyPhone: string;
  contactPersonName: string;
  contactPersonPhone: string;
  dealstatus: keyof typeof EDealStatus;
  OrderStatus: keyof typeof EOrderStatus;
}
