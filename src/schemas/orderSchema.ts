import z from "zod";

export const orderSchema = z.object({
  contactPersonName: z
    .string()
    .min(3, {
      message: "من فضلك أدخل الاسم الكامل",
    })
    .max(100, {
      message: "الاسم يجب ألا يتجاوز 100 حرف.",
    })
    .trim(),
  contactPersonPhone: z
    .string()
    .min(10, {
      message: "رقم الهاتف غير صالح.",
    })
    .regex(/^01[0|1|2|5]\d{8}$/, {
      message:
        "رقم الهاتف يجب أن يبدأ بـ 010 أو 011 أو 012 أو 015 ويحتوي على 11 رقمًا.",
    })
    .trim(),

  deadline: z.coerce
    .date()
    .min(new Date(), {
      message: "موعد التسليم يجب أن يكون في المستقبل.",
    })
    .refine((val) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return val >= today;
    }),
  description: z
    .string()
    .min(10, {
      message: "الوصف يجب أن يتكون من 10 أحرف على الأقل.",
    })
    .max(1000, {
      message: "الوصف يجب ألا يتجاوز 1000 حرف.",
    })
    .trim(),
  requiredLocation: z
    .string()
    .min(3, {
      message: "من فضلك قم بإدخال الموقع بالكامل.",
    })
    .trim(),
  categoryId: z
    .number()
    .int({
      message: "معرف الفئة يجب أن يكون رقمًا صحيحًا.",
    })
    .min(1, {
      message: "يجب اختيار فئة من القائمة.",
    }),
  numSuppliersDesired: z.coerce
    .number()
    .int({
      error: "عدد الموردين يجب أن يكون رقمًا صحيحًا (بدون كسور).",
    })
    .min(1, {
      error: "عدد الموردين يجب أن يكون على الأقل 1.",
    })
    .max(50, {
      error: "عدد الموردين يجب ألا يتجاوز 40.",
    }),
});

export type orderSchemaInput = z.input<typeof orderSchema>;
export type orderSchemaOutput = z.output<typeof orderSchema>;

// Step 1: Product Details Schema
export const productDetailsSchema = z.object({
  categoryId: z.coerce.number({
    error: "يجب اختيار فئة المنتج",
  }),
  items: z
    .array(
      z.object({
        name: z.string().min(1, "الاسم مطلوب").trim(),
        quantity: z.coerce.number().min(1, "الكمية يجب أن تكون أكبر من صفر"),
        notes: z.string().trim().optional(),
      })
    )
    .min(1, "يجب إضافة عنصر واحد على الأقل للوصف"),
  numSuppliersDesired: z.coerce
    .number()
    .min(1, "عدد الموردين يجب أن يكون أكبر من صفر"),
});
export type productDetailsOutput = z.output<typeof productDetailsSchema>;

// Step 2: Delivery Details Schema
export const deliveryDetailsSchema = z.object({
  requiredLocation: z.string().min(3, "الموقع يجب أن يكون 3 أحرف على الأقل"),
  deadline: z
    .date()
    .refine(
      (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date >= today;
      },
      {
        message: "لا يمكن التسليم في الماضي",
      }
    )
    .transform((date) => date.toISOString()),
});

// Step 3: Contact Information Schema
export const contactInfoSchema = z.object({
  contactPersonName: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  contactPersonPhone: z.string().min(11, "رقم الهاتف غير صحيح"),
});

// Combined schema for final submission
export const completeOrderSchema = productDetailsSchema
  .extend(deliveryDetailsSchema.shape)
  .extend(contactInfoSchema.shape);

export type ProductDetailsInput = z.infer<typeof productDetailsSchema>;
export type DeliveryDetailsInput = z.infer<typeof deliveryDetailsSchema>;
export type ContactInfoInput = z.infer<typeof contactInfoSchema>;
export type CompleteOrderInput = z.input<typeof completeOrderSchema>;
export type CompleteOrderOutput = z.output<typeof completeOrderSchema>;
