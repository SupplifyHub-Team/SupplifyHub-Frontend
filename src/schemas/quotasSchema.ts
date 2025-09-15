import { z } from "zod";

export const quotaSchema= z
  .object({
    amount:z.coerce.number().int({
        message: "الكمية يجب أن تكون عدد صحيح",
    }).min(1, "الكمية يجب أن تكون على الأقل 1"),
  })

export type quotaSchemaInput = z.input<typeof quotaSchema>;
export type quotaSchemaOutput = z.output<typeof quotaSchema>;
