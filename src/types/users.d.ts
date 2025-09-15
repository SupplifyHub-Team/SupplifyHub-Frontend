interface IUser {
  userId: number;
  companyName: string;
  email: string;
  role: "client" | "jobber" | "supplier";
  createdAt: string;
  categoryNames: string[];
  joinDate: string;
}

interface IPendingUser {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  logoURL: string;
  pdfURL: string;
  categories: string[];
}

interface ISupplierProfile {
  id: number;
  name: string;
  email: string;
  logoURL: string;
  categories: string[];
  locations: string[];
  planName: string;
  phoneNumber: string;
  description: string;
}
