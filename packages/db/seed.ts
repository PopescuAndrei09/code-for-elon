import { features } from "process"
import { PrismaClient } from "@prisma/client"
import { AdvertDB } from "seedData/advert-db"
import { BonusTypeDb } from "seedData/bonustype-db"
import { CasinoDb } from "seedData/casino-db"
import { CasinoTypeDb } from "seedData/casinotype-db"
import { FeaturesDb } from "seedData/features-db"
import { PaymentMethodDb } from "seedData/paymentmethod-db"
import { ProvidersDb } from "seedData/providers-db"
import { ReelsDb } from "seedData/reels-db"
import { ThemeDb } from "seedData/theme-db"
import { VolatilityDb } from "seedData/volatility-db"
import { WagerDb } from "seedData/wager-db"

import { gamesDB } from "./seedData/games-db"

const prisma = new PrismaClient()

async function main(): Promise<void> {
  // for (const item of gamesDB) {
  //   const gameData = {
  //     apiId: Number(item.id),
  //     name: item.title,
  //     thumbnail: item.link_game_info,
  //     gameDemoUrl: item.demo,
  //     liveGameUrl: item.link_game_info,
  //     images: item.game_assets.split(","),
  //     description: "",
  //     gameUrl: item.title
  //       .normalize("NFD")
  //       .replace(/[\u0300-\u036f]/g, "")
  //       .replace(/[^a-z0-9]/gi, "-")
  //       .toLowerCase(),
  //     gameRequirement: {
  //       create: {
  //         title: item.title,
  //         reels: item.reels,
  //         rows: "",
  //         paylines: item.lines,
  //         rtp: item.rtp,
  //         hitFreq: "",
  //         freeSpinsFreq: "",
  //         maxWin: "",
  //         maxWinProbability: "",
  //         minMaxBet: `${item.min_bet} - ${item.max_bet}`,
  //         releaseDate: new Date(item.global_game_launch),
  //         features: item.features,
  //         theme: item.theme,
  //         provider: item.provider,
  //         volatility: item.volatility
  //       }
  //     }
  //   }
  //   await prisma.game.create({
  //     data: gameData
  //   })
  // }
  // for (const item of AdvertDB) {
  //   const Advert = {
  //     image: item.image,
  //     href: item.href,
  //     title: item.title,
  //     description: item.description,
  //     promoCode: item.promoCode,
  //     isEnabled: item.isEnabled,
  //     from: new Date(item.from),
  //     to: new Date(item.to),
  //     rate: item.rate,
  //     collapsed: item.collapsed,
  //     advertSpaces: {
  //       create: {
  //         page: item.page,
  //         secondary: item.secondary
  //       }
  //     }
  //   }
  //   await prisma.advert.create({
  //     data: Advert
  //   })
  // }
  // for (const item of CasinoDb) {
  //   const Casino = {
  //     image: item.image,
  //     href: item.href,
  //     title: item.title,
  //     description: item.description,
  //     promoCode: item.promoCode,
  //     paymentMethod: item.paymentMethod,
  //     wager: item.wager,
  //     bonusType: item.bonusType,
  //     casinoType: item.casinoType
  //   }
  //   await prisma.casino.create({
  //     data: Casino
  //   })
  // }
  // for (const item of FeaturesDb) {
  //   const Features = {
  //     type: item.type
  //   }
  //   await prisma.features.create({
  //     data: Features
  //   })
  // }
  // for (const item of ProvidersDb) {
  //   const Providers = {
  //     type: item.type
  //   }
  //   await prisma.providers.create({
  //     data: Providers
  //   })
  // }
  // for (const item of ReelsDb) {
  //   const Reels = {
  //     type: item.type
  //   }
  //   await prisma.reels.create({
  //     data: Reels
  //   })
  // }
  // for (const item of ThemeDb) {
  //   const Theme = {
  //     type: item.type
  //   }
  //   await prisma.theme.create({
  //     data: Theme
  //   })
  // }
  // for (const item of VolatilityDb) {
  //   const Volatility = {
  //     type: item.type
  //   }
  //   await prisma.volatility.create({
  //     data: Volatility
  //   })
  // }
  // for (const item of WagerDb) {
  //   const Wager = {
  //     type: item.type
  //   }
  //   await prisma.wager.create({
  //     data: Wager
  //   })
  // }
  // for (const item of BonusTypeDb) {
  //   const BonusType = {
  //     type: item.type
  //   }
  //   await prisma.bonusType.create({
  //     data: BonusType
  //   })
  // }
  // for (const item of CasinoTypeDb) {
  //   const CasinoType = {
  //     type: item.type
  //   }
  //   await prisma.casinoType.create({
  //     data: CasinoType
  //   })
  // }
  // for (const item of PaymentMethodDb) {
  //   const PaymentMethod = {
  //     type: item.type
  //   }
  //   await prisma.paymentMethod.create({
  //     data: PaymentMethod
  //   })
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
