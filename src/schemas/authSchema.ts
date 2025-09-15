import z from "zod";

// Reset Password Schema ******************

export const resetPasswordSchema = z.object({
  newPassword: z
    .string({
      message: "من فضلك أدخل كلمة مرور صالحة",
    })
    .max(50, {
      message: "من فضلك أدخل كلمة مرور لا تزيد عن 50 حرف",
    })
    .min(8, {
      message: "من فضلك أدخل كلمة مرور لا تقل عن 8 أحرف",
    }),
});

export type resetPasswordSchema = z.infer<typeof resetPasswordSchema>;

// Reset Password Schema ******************
export const forgotPasswordSchema = z.object({
  email: z.email({
    message: "من فضلك أدخل بريدًا إلكترونيًا صالحًا",
  }),
});

export type forgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

// Login Schema ******************
export const loginSchema = z.object({
  email: z.email({
    message: "من فضلك أدخل بريدًا إلكترونيًا صالحًا",
  }),
  password: z
    .string()
    .min(6, {
      message: "من فضلك أدخل كلمة مرور لا تقل عن 6 أحرف",
    })
    .max(50, {
      message: "من فضلك أدخل كلمة مرور لا تزيد عن 50 حرف",
    }),
  rememberMe: z.boolean(),
});

export type loginSchema = z.infer<typeof loginSchema>;

// Registration Schema ******************

export const step1Schema = z.object({
  accountType: z.enum(["Suppliers", "Clients"], {
    message: "من فضلك اختر نوع الحساب",
  }),
});

export const step2Schema = z.object({
  UserName: z
    .string()
    .min(2, {
      message: "من فضلك أدخل الاسم الكامل",
    })
    .max(100, {
      message: "من فضلك أدخل اسمًا لا يزيد عن 100 حرف",
    }),
  email: z.email("من فضلك أدخل بريدًا إلكترونيًا صالحًا"),
  password: z
    .string()
    .min(8, {
      message: "من فضلك أدخل كلمة مرور لا تقل عن 8 أحرف",
    })
    .max(50, {
      message: "من فضلك أدخل كلمة مرور لا تزيد عن 50 حرف",
    }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "من فضلك أدخل رقم هاتف صالح",
    })
    .max(15)
    .regex(/^\d+$/, {
      message: "من فضلك أدخل رقم هاتف صالح",
    }),
});

export const step3Schema = z.object({
  location: z.string(),
  documents: z
    .instanceof(File, { message: "يجب رفع ملف صالح" })
    .or(z.array(z.instanceof(File, { message: "كل عنصر يجب أن يكون ملف" }))),

  categories: z.array(z.string()).min(1, {
    message: "من فضلك اختر فئة واحدة على الأقل",
  }),
});

export const conditionalRegisterSchema = step1Schema
  .extend(step2Schema.shape)
  .extend(step3Schema.partial().shape)
  .superRefine((data, ctx) => {
    if (data.accountType !== "Suppliers") return;

    if (!data.location || data.location.length < 2) {
      ctx.addIssue({
        path: ["location"],
        code: "too_small",
        minimum: 2,
        type: "string",
        message: "من فضلك أدخل موقعًا صالحًا",
        origin: "string",
      });
    }

    if (!data.documents) {
      ctx.addIssue({
        path: ["documents"],
        code: "too_small",
        minimum: 1,
        type: "array",
        message: "من فضلك قم بتحميل مستند واحد على الأقل",
        origin: "array",
      });
    }

    if (!data.categories || data.categories.length < 1) {
      ctx.addIssue({
        path: ["categories"],
        code: "too_small",
        minimum: 1,
        type: "array",
        message: "من فضلك اختر فئة واحدة على الأقل",
        origin: "array",
      });
    }
  });

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

export type conditionalRegisterSchemaType = z.infer<
  typeof conditionalRegisterSchema
>;
