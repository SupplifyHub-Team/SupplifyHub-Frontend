interface ISupplierDeal {
  dealId: number | string;
  items: IDealItems[];
  CompanyName: string;
  CompanyEmail: string;
  CompanyPhone: string;
  contactPersonName: string;
  contactPersonPhone: string;
  dealStatus: keyof typeof EDealStatus;
  OrderStatus: keyof typeof EOrderStatus;
}

interface IDealItems {
  name: string;
  quantity: number;
  price: number;
  id: string | number;
}
