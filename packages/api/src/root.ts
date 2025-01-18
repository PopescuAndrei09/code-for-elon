// prettier-ignore
import { createRouter, publicProcedure } from "./trpc";

import { advertRouter } from "./routers/advert.router"
import { blogRouter } from "./routers/blog.router"
import { casinoRouter } from "./routers/casino.router"
import { featuresRouter } from "./routers/features.router"
import { gameRequirmentRouter } from "./routers/game-requirment.router"
import { gameRouter } from "./routers/game.router"
import { notificationRouter } from "./routers/notification.router"
import { providersRouter } from "./routers/providers.router"
import { reelsRouter } from "./routers/reels.router"
import { themeRouter } from "./routers/theme.router"
import { userRouter } from "./routers/user.router"
import { volatilityRouter } from "./routers/volatility.router"

export const appRouter = createRouter({
  user: userRouter,
  notification: notificationRouter,
  advert: advertRouter,
  game: gameRouter,
  gameRequirement: gameRequirmentRouter,
  blog: blogRouter,
  casino: casinoRouter,
  volatility: volatilityRouter,
  theme: themeRouter,
  reels: reelsRouter,
  providers: providersRouter,
  features: featuresRouter
})

export type AppRouter = typeof appRouter
