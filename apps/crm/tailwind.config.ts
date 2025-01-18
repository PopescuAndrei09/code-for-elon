import type { Config } from "tailwindcss"

import base from "@ssp/tailwind-config/tailwind.config.ts"

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...(base as Config | undefined),
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
      ]
    }
  ]
}

export default config
