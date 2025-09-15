import { z } from "zod";

export const editSupplierInfoSchema = z.object({
  description: z.string().max(2000).optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  locations: z.array(z.string().nullable()).optional(),
  CategoryIds: z
    .array(z.coerce.number())
    .min(1, {
      error: "من فضلك اختار فئة واحدة على الاقل",
    })
    .optional(),
});

export type editSupplierInfoSchemaInput = z.input<
  typeof editSupplierInfoSchema
>;
export type editSupplierInfoSchemaOutput = z.output<
  typeof editSupplierInfoSchema
>;
