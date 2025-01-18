import type { Prisma } from "@prisma/client"
import * as z from "zod"

const DecimalJsLikeSchema: z.ZodType<Prisma.DecimalJsLike> = z.object({
  d: z.array(z.number()),
  e: z.number(),
  s: z.number(),
  toFixed: z.function(z.tuple([]), z.string())
})
const DECIMAL_STRING_REGEX =
  /^(?:-?Infinity|NaN|-?(?:0[bB][01]+(?:\.[01]+)?(?:[pP][-+]?\d+)?|0[oO][0-7]+(?:\.[0-7]+)?(?:[pP][-+]?\d+)?|0[xX][\da-fA-F]+(?:\.[\da-fA-F]+)?(?:[pP][-+]?\d+)?|(?:\d+|\d*\.\d+)(?:[eE][-+]?\d+)?))$/

const isValidDecimalInput = (
  v?: null | string | number | Prisma.DecimalJsLike
): v is string | number | Prisma.DecimalJsLike => {
  if (v === undefined || v === null) return false
  return (
    (typeof v === "object" && "d" in v && "e" in v && "s" in v && "toFixed" in v) ||
    (typeof v === "string" && DECIMAL_STRING_REGEX.test(v)) ||
    typeof v === "number"
  )
}

export { isValidDecimalInput, DecimalJsLikeSchema }
