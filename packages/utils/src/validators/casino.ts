import * as z from "zod"

export const CasinosTypeSchema = z.enum(["slot", "fishing", "shooting"])
export const GameWagerSchema = z.enum(["rulaj_3x3", "rulaj_6x6"])
export const PromoCodeSchema = z.enum(["fara_cod_promo", "x_50_sport"])
export const PaySchema = z.enum(["cash", "crypto", "card"])
export const BonusTypesSchema = z.enum(["bonus_fara_depunere", "bonus_cu_depunere", "bonus_cazino", "bonus_sport"])

export const casinoSchema = z.object({
  id: z.string(),
  href: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  promoCode: PromoCodeSchema,
  paymentMethod: PaySchema,
  wager: GameWagerSchema,
  bonusType: BonusTypesSchema,
  casinoType: CasinosTypeSchema,
  image: z.string().optional()
})

/////////////////////////////////////////
// CASINO SCHEMA
/////////////////////////////////////////

export const CasinoSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  href: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  promoCode: PromoCodeSchema,
  paymentMethod: PaySchema,
  wager: GameWagerSchema,
  bonusType: BonusTypesSchema,
  casinoType: CasinosTypeSchema,
  image: z.string().optional()
})

export const CasinoCreateSchema = z.object({
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: PromoCodeSchema,
  paymentMethod: PaySchema,
  wager: GameWagerSchema,
  bonusType: BonusTypesSchema,
  casinoType: CasinosTypeSchema,
  image: z.string()
})

export const CasinoForEditSchema = z.object({
  id: z.string(),
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: PromoCodeSchema,
  paymentMethod: PaySchema,
  wager: GameWagerSchema,
  bonusType: BonusTypesSchema,
  casinoType: CasinosTypeSchema,
  image: z.string()
})

export const CasinoForUpdateSchema = z.object({
  id: z.string(),
  href: z.string(),
  title: z.string(),
  description: z.string(),
  promoCode: PromoCodeSchema,
  paymentMethod: PaySchema,
  wager: GameWagerSchema,
  bonusType: BonusTypesSchema,
  casinoType: CasinosTypeSchema,
  image: z.string()
})

export type Casinos = z.infer<typeof casinoSchema>
