enum EDealStatus {
  Pending,
  ClientConfirmed,
  SupplierConfirmed,
  AdminConfirmed,
  AdminRefused,
}
enum EOrderStatus {
  Active,
  InProgress,
  Completed,
  Canceled,
}

type TDealStatus = keyof typeof EDealStatus;
type TOrderStatus = keyof typeof EOrderStatus;


