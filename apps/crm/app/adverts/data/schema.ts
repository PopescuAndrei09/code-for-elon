import type { z } from "zod"

import type { advertSchema } from "@ssp/utils"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export type Adverts = z.infer<typeof advertSchema>
