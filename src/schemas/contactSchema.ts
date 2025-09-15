import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب"),
  email: z.email("البريد الإلكتروني غير صحيح"),
  queryText: z
    .string()
    .min(5, "نص الرسالة يجب أن يكون 5 أحرف على الأقل")
    .max(500, "اقصى طول 500 حرف"),
});

export type contactSchema = z.infer<typeof contactSchema>;
