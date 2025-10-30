import * as z from "zod";

// ==================== Reset Password Schema ====================
export const resetPasswordSchema = z.object({
  newPassword: z
    .string({ message: "من فضلك أدخل كلمة مرور صالحة" })
    .max(50, { message: "من فضلك أدخل كلمة مرور لا تزيد عن 50 حرف" })
    .min(8, { message: "من فضلك أدخل كلمة مرور لا تقل عن 8 أحرف" }),
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

// ==================== Forgot Password Schema ====================
export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "من فضلك أدخل بريدًا إلكترونيًا صالحًا" }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

// ==================== Login Schema ====================
export const loginSchema = z.object({
  email: z.string().email({ message: "من فضلك أدخل بريدًا إلكترونيًا صالحًا" }),
  password: z
    .string()
    .min(6, { message: "من فضلك أدخل كلمة مرور لا تقل عن 6 أحرف" })
    .max(50, { message: "من فضلك أدخل كلمة مرور لا تزيد عن 50 حرف" }),
  rememberMe: z.boolean(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

// ==================== Register Step 1 ====================
export const step1Schema = z.object({
  accountType: z.enum(["Suppliers", "Clients"], {
    message: "من فضلك اختر نوع الحساب",
  }),
});

// ==================== Register Step 2 ====================
export const step2Schema = z.object({
  UserName: z
    .string()
    .min(2, { message: "من فضلك أدخل الاسم الكامل" })
    .max(100, { message: "من فضلك أدخل اسمًا لا يزيد عن 100 حرف" }),
  email: z.string().email("من فضلك أدخل بريدًا إلكترونيًا صالحًا"),
  password: z
    .string()
    .min(8, { message: "من فضلك أدخل كلمة مرور لا تقل عن 8 أحرف" })
    .max(50, { message: "من فضلك أدخل كلمة مرور لا تزيد عن 50 حرف" }),
  phoneNumber: z
    .string()
    .min(10, { message: "من فضلك أدخل رقم هاتف صالح" })
    .max(15, { message: "من فضلك أدخل رقم هاتف لا يزيد عن 15 رقمًا" })
    .regex(/^\d+$/, { message: "من فضلك أدخل رقم هاتف صالح" }),
});

// ==================== Register Step 3 ====================
export const step3Schema = z.object({
  location: z.string().min(2, { message: "من فضلك أدخل موقعًا صالحًا" }),
  documents: z
    .union([
      z.instanceof(File, { message: "يجب رفع ملف صالح" }),
      z.array(z.instanceof(File, { message: "كل عنصر يجب أن يكون ملف" })),
    ])
    .optional(),
  categories: z
    .array(z.string())
    .nonempty({ message: "من فضلك اختر فئة واحدة على الأقل" })
    .min(1, { message: "من فضلك اختر فئة واحدة على الأقل" }),
});

export const conditionalRegisterSchema = step1Schema
  .extend(step2Schema.shape)
  .extend({
    location: z.string().optional(),
    documents: z
      .union([
        z.instanceof(File, { message: "يجب رفع ملف صالح" }),
        z.array(z.instanceof(File, { message: "كل عنصر يجب أن يكون ملف" })),
      ])
      .optional(),
    categories: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === "Suppliers") {
      if (!data.location || data.location.trim().length < 2) {
        ctx.addIssue({
          path: ["location"],
          code: "too_small",
          minimum: 2,
          type: "string",
          origin: "string", 
          message: "من فضلك أدخل موقعًا صالحًا",
        });
      }

      if (data.documents) {
        const docs = Array.isArray(data.documents)
          ? data.documents
          : [data.documents];
        for (const file of docs) {
          if (!(file instanceof File)) {
            ctx.addIssue({
              path: ["documents"],
              code: "custom",
              message: "الملف المرفوع غير صالح",
            });
          }
        }
      }

      if (!data.categories || data.categories.length < 1) {
        ctx.addIssue({
          path: ["categories"],
          code: "too_small",
          minimum: 1,
          type: "array",
          origin: "array",
          message: "من فضلك اختر فئة واحدة على الأقل",
        });
      }
    }
  });

export type ConditionalRegisterSchemaType = z.infer<typeof conditionalRegisterSchema>;

export function getStepValidationSchema(step: number, accountType?: string) {
  switch (step) {
    case 0:
      return step1Schema;
    case 1:
      return step2Schema;
    case 2:
      return accountType === "Suppliers" ? step3Schema : z.object({});
    default:
      return z.object({});
  }
}
