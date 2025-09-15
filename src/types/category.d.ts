interface ICategory {
  categoryId: number | string;
  categoryName: string;
  imageURL: string | null;
  numberOfAssociatedSuppliers: number;
  numberOfAssociatedClients: number;
}
