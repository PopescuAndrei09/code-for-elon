import { serverApi } from "@/trpc/server"
import GeneralConfigView from "."

const GeneralConfig = async () => {
  //   const allFeatures = await serverApi.features.getAll.query()
  //   const allProviders = await serverApi.providers.getAll.query()
  //   const allReels = await serverApi.reels.getAll.query()
  //   const allTheme = await serverApi.theme.getAll.query()
  //   const allVolatility = await serverApi.volatility.getAll.query()

  return (
    <div>
      <GeneralConfigView />
    </div>
  )
}

export default GeneralConfig
