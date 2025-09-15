interface IOrder {
  categoryId: string | number;
  contactPersonName: string;
  contactPersonPhone: string;
  deadline: Date | string;
  description: string;
  numSuppliersDesired: number | string;
  requiredLocation: string;
}

interface IGetOrderResponse {
  orderId: string | number;
  categoryId: number;
  description: string;
  requiredLocation: string;
  deadline: string;
  numSuppliersDesired: number;
  contactPersonName: string;
  contactPersonPhone: string;
  dealStatus: TDealStatus;
  OrderStatus: TOrderStatus;
}

interface IPostOrderResponse {
  message: string;
}
