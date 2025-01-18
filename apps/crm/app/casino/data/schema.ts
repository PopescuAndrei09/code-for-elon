import type { z } from "zod"

import type { casinoSchema } from "@ssp/utils"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export type Casinos = z.infer<typeof casinoSchema>
