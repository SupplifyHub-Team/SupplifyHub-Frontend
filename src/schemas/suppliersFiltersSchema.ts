import z from "zod";

export const suppliersFiltersSchema = z.object({
  category: z.string().optional(),
  location: z.string().optional(),
  sortColumnDirection: z.enum(["Asc", "Desc"]).optional(),
  search: z.string().optional(),
});
export type suppliersFiltersSchema = z.infer<typeof suppliersFiltersSchema>;
