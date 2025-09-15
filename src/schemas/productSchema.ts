import { z } from "zod";

export const addProductSchema = z
  .object({
    name: z.string().min(1, "اسم المنتج مطلوب"),
    description: z.string().min(10, "الوصف يجب أن يكون 10 أحرف على الأقل"),
    price: z.coerce.number().min(1, "السعر مطلوب"),
    ProductImage: z.any().optional(),
    IsSpecial: z.boolean().default(false),
    offer: z.coerce.number().optional(),
  })
  .refine(
    (data) => {
      if (data.IsSpecial) {
        return (
          data.offer !== undefined && data.offer > 0 && data.offer < data.price
        );
      }
      return true;
    },
    {
      message:
        "عند اختيار منتج مميز، يجب إدخال سعر العرض وأن يكون أقل من السعر الأصلي",
      path: ["offer"],
    }
  );

export type addProductSchemaInput = z.input<typeof addProductSchema>;
export type addProductSchemaOutput = z.output<typeof addProductSchema>;
