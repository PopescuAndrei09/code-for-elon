import * as z from "zod"

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////
export const NotificationTypeSchema = z.enum(["bonus", "info", "success", "warning", "error"])
export const NotificationSchema = z.object({
  type: z.enum(["bonus", "info", "success", "warning", "error"]),
  title: z.string().optional(),
  message: z.string().optional(),
  href: z.string().optional(),
  read: z.boolean().optional(),
  userId: z.string().optional()
})

export type Notification = z.infer<typeof NotificationSchema>

export const NotificationFormSchema = z.object({
  type: z.enum(["bonus", "info", "success", "warning", "error"]),
  title: z.string(),
  message: z.string(),
  href: z.string()
})
