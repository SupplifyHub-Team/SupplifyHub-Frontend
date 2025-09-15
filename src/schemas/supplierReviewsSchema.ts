import z from "zod";

export const supplierReviewSchema = z.object({
  dealDoneAt: z.coerce
    .date()
    .refine(
      (val) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return val >= today;
      },
      {
        error: "موعد إتمام الصفقة يجب أن يكون في المستقبل.",
      }
    )
    .transform((d) => d.toISOString()),
  price: z.coerce.number().min(0, "يجب ادخال السعر").max(2147483647),
  dateOfDelivered: z.coerce
    .date()
    .refine(
      (val) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return val >= today;
      },
      {
        error: "موعد التسليم يجب أن يكون في المستقبل.",
      }
    )
    .transform((d) => d.toISOString()),
  rating: z.coerce.number().min(1).max(5),
  comment: z
    .string({
      error: "يجب ادخال تعليق",
    })
    .min(10, "يجب أن يتكون التعليق من 10 أحرف على الأقل")
    .max(500, "يجب أن يتكون التعليق من 500 حرف كحد أقصى"),
  items: z
    .array(
      z.object({
        name: z.string().min(1, "الاسم مطلوب").trim(),
        quantity: z.coerce.number().min(1, "الكمية يجب أن تكون أكبر من صفر"),
        price: z.coerce.number().min(0, "يجب ادخال السعر"),
      })
    )
    .min(1, "يجب إضافة عنصر واحد على الأقل للوصف"),
});

export type supplierReviewSchemaInput = z.input<typeof supplierReviewSchema>;
export type supplierReviewSchemaOutput = z.output<typeof supplierReviewSchema>;
