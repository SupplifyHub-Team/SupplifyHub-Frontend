import z from "zod";

export const advertisementSchema = z.object({
  Title: z
    .string()
    .min(3, {
      error: "يجب أن يكون العنوان على الأقل 3 حرف",
    })
    .max(50, {
      error: "يجب أن يكون العنوان 50 حرف كحد أقصى",
    }),
  ImageFile: z.instanceof(File, {
    error: "ملف غير صالح",
  }),
  TargetUrl: z.url().optional(),
});

export type advertisementSchema = z.infer<typeof advertisementSchema>;
