interface ISupplierInfo {
  id: number | string;
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

interface ISuppliersFilters {
  search?: string;
  planName?: string;
  status?: string;
  page?: number | string;
  pageSize?: number | string;
  sortColumn?: string;
  sortOrder?: "Asc" | "Desc";
}

interface ISupplier {
  id: number | string;
  companyName: string;
  email: string;
  categoryNames: string[];
  phoneNumber: string;
  logoUrl: string;
  locations: string[];
  planName: string;
  joinDate: string;
}

interface IAccountInfoPatchResponse {
  id: number | string;
  description: string;
  locations: string[];
  CategoryIds: (string | number)[];
}

interface IAccountLogoPatchResponse {
  id: number | string;
  logoUrl: string | File;
}
