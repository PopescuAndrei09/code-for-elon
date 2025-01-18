import * as z from "zod"

/////////////////////////////////////////
// GAME SCHEMA
/////////////////////////////////////////

export const GameSchema = z.object({
  id: z.string().uuid(),
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.string().array(),
  gameUrl: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirementId: z.string().nullable()
})

export type Game = z.infer<typeof GameSchema>

/////////////////////////////////////////
// GAME REQUIREMENT SCHEMA
/////////////////////////////////////////

export const GameRequirementSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  title: z.string().optional(),

  reels: z.string().optional(),
  rows: z.string().optional(),
  paylines: z.string().optional(),
  rtp: z.string().optional(),
  hitFreq: z.string().optional(),
  freeSpinsFreq: z.string().optional(),
  maxWin: z.string().optional(),
  maxWinProbability: z.string().optional(),
  volatility: z.string().optional(),
  minMaxBet: z.string().optional(),
  provider: z.string().optional(),
  features: z.string().array().optional(),
  theme: z.string().optional(),
  releaseDate: z.date()
})

export type GameRequirement = z.infer<typeof GameRequirementSchema>

export const GameRequirementCreateInputSchema = z.object({
  title: z.string().optional(),

  reels: z.string(),
  rows: z.string(),
  paylines: z.string(),
  rtp: z.string(),
  hitFreq: z.string(),
  freeSpinsFreq: z.string(),
  maxWin: z.string(),
  maxWinProbability: z.string(),
  volatility: z.string(),
  provider: z.string(),
  features: z.array(z.string()),
  theme: z.string(),
  minMaxBet: z.string(),
  releaseDate: z.date(),
  game: z.string().optional()
})

export const GameRequirementEditInputSchema = z.object({
  id: z.string().uuid(),
  title: z.string().optional(),

  reels: z.string().optional(),
  rows: z.string().optional(),
  paylines: z.string().optional(),
  rtp: z.string().optional(),
  hitFreq: z.string().optional(),
  freeSpinsFreq: z.string().optional(),
  maxWin: z.string().optional(),
  maxWinProbability: z.string().optional(),
  volatility: z.string().optional(),
  provider: z.string().optional(),
  features: z.array(z.string()),
  theme: z.string().optional(),
  minMaxBet: z.string().optional(),
  releaseDate: z.date(),
  game: z.string()
})

export const GameWithReqSchema = z.object({
  apiId: z.string(),
  name: z.string(),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  imagesArray: z.string().array().optional(),
  gameUrl: z.string().optional(),
  images: z.string().optional(),
  href: z.string().optional(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirement: z.object({
    title: z.string().optional(),

    reels: z.string().optional(),
    rows: z.string().optional(),
    paylines: z.string().optional(),
    rtp: z.string().optional(),
    hitFreq: z.string().optional(),
    freeSpinsFreq: z.string().optional(),
    maxWin: z.string().optional(),
    maxWinProbability: z.string().optional(),
    volatility: z.string().optional(),
    provider: z.string().optional(),
    features: z.array(z.string()),
    theme: z.string().optional(),
    minMaxBet: z.string().optional(),
    releaseDate: z.date()
  })
})

export const GameWithReqForCreateSchema = z.object({
  apiId: z.number().int(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  images: z.string().array(),
  gameUrl: z.string(),
  href: z.string(),
  gameDemoUrl: z.string(),
  liveGameUrl: z.string(),
  gameRequirement: z.object({
    title: z.string(),

    reels: z.string(),
    rows: z.string(),
    paylines: z.string(),
    rtp: z.string(),
    hitFreq: z.string(),
    freeSpinsFreq: z.string(),
    maxWin: z.string(),
    maxWinProbability: z.string(),
    volatility: z.string(),
    provider: z.string(),
    features: z.array(z.string()),
    theme: z.string(),
    minMaxBet: z.string(),
    releaseDate: z.date()
  })
})
