"use client"

import * as React from "react"

import type { currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility } from "./games"

interface GameStateContextData {
  currentFeatures: currentFeatures[] // Replace 'any' with the actual type
  currentProviders: currentProviders[] // Replace 'any' with the actual type
  currentReels: currentReels[] // Replace 'any' with the actual type
  currentThemes: currentThemes[] // Replace 'any' with the actual type
  currentVolatility: currentVolatility[] // Replace 'any' with the actual type
}
interface GameStatusProviderProps {
  children?: React.ReactNode
  currentFeaturesData: currentFeatures[]
  currentProvidersData: currentProviders[]
  currentReelsData: currentReels[]
  currentThemesData: currentThemes[]
  currentVolatilityData: currentVolatility[]
}
export const GameStateContext = React.createContext<GameStateContextData>({
  currentFeatures: [],
  currentProviders: [],
  currentReels: [],
  currentThemes: [],
  currentVolatility: []
})

export const GameStatusProvider: React.FC<GameStatusProviderProps> = ({
  children,
  currentFeaturesData,
  currentProvidersData,
  currentReelsData,
  currentThemesData,
  currentVolatilityData
}: {
  children?: React.ReactNode
  currentFeaturesData: currentFeatures[]
  currentProvidersData: currentProviders[]
  currentReelsData: currentReels[]
  currentThemesData: currentThemes[]
  currentVolatilityData: currentVolatility[]
}) => {
  // Initialize your data
  const [currentFeatures] = React.useState<currentFeatures[]>(currentFeaturesData)
  const [currentProviders] = React.useState<currentProviders[]>(currentProvidersData)
  const [currentReels] = React.useState<currentReels[]>(currentReelsData)
  const [currentThemes] = React.useState<currentThemes[]>(currentThemesData)
  const [currentVolatility] = React.useState<currentVolatility[]>(currentVolatilityData)
  return (
    <GameStateContext.Provider
      value={{ currentFeatures, currentProviders, currentReels, currentThemes, currentVolatility }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
