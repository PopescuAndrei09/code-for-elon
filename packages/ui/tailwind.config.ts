import type { Config } from "tailwindcss"

import base from "@ssp/tailwind-config/tailwind.config"

const config: Pick<Config, "presets"> = {
  presets: [base as Config]
}

export default config
