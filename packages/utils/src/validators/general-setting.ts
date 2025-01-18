import * as z from "zod"

export const generalSettingSchema = z.object({
  type: z.string()
})
