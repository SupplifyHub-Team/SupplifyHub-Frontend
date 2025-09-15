interface ISelfProduct {
  name: string;
  price: number;
  description: string;
  id: number;
  companyName: string;
  productImageURl: string;
  offer: number;
  isSpecial: boolean;
}

interface IGetProductsResponse {
  products: ISelfProduct[];
  stats: {
    total: number;
  };
}


