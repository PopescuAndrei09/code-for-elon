import * as z from "zod"

export const advertSchema = z.object({
  id: z.string(),
  href: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  promoCode: z.string().optional(),
  isEnabled: z.boolean().default(true).optional(),
  from: z.date().optional(),
  to: z.date().optional(),
  image: z.string().optional()
})

/////////////////////////////////////////
// ADVERT SCHEMA
/////////////////////////////////////////

export const AdvertSchema = z.object({
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  image: z.string().optional(),
  href: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  promoCode: z.string().optional(),
  isEnabled: z.boolean(),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional()
})

export type Advert = z.infer<typeof AdvertSchema>

/////////////////////////////////////////
// ADVERT SPACE SCHEMA
/////////////////////////////////////////

export const AdvertSpaceSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  page: z.string()
})

export type AdvertSpace = z.infer<typeof AdvertSpaceSchema>

export const AdvertCreateInputSchema = z.object({
  image: z.string().optional(),
  href: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  promoCode: z.string().optional(),
  isEnabled: z.boolean().optional(),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
  advertSpaces: z.string().array().optional()
})

export const AdvertUpdateSchema = z.object({
  id: z.string().uuid(),
  // createdAt: z.date(),
  // updatedAt: z.date(),
  image: z.string().nullable(),
  href: z.string(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  promoCode: z.string().nullable(),
  isEnabled: z.boolean(),
  from: z.date().nullable(),
  to: z.date().nullable()
})
export type AdvertUpdateType = z.infer<typeof AdvertUpdateSchema>
export const AdvertSchemaWithSpacesForCreate = z.object({
  image: z.string(),
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: z.string(),
  isEnabled: z.boolean().default(true),
  from: z.date(),
  to: z.date(),
  advertSpaces: z.object({
    secondary: z.boolean().default(false),
    page: z.string().array()
  })
})

export const AdvertSchemaWithSpacesForm = z.object({
  image: z.string(),
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: z.string(),
  isEnabled: z.boolean().default(true),
  from: z.date(),
  to: z.date(),
  advertSpaces: z.object({
    secondary: z.boolean().default(false),
    page: z.string().array(),
    pageArray: z.string()
  })
})

export const AdvertSchemaWithSpacesFormEdit = z.object({
  id: z.string(),
  image: z.string(),
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: z.string(),
  isEnabled: z.boolean().default(true),
  from: z.date(),
  to: z.date(),
  advertSpaces: z.object({
    secondary: z.boolean().default(false),
    pageArray: z.string()
  })
})

export const AdvertSchemaWithSpacesForUpdate = z.object({
  id: z.string(),
  image: z.string(),
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: z.string(),
  isEnabled: z.boolean().default(true),
  from: z.date(),
  to: z.date(),
  advertSpaces: z.object({
    secondary: z.boolean().default(false),
    page: z.string().array()
  })
})
