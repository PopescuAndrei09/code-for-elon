import { clsx } from "clsx"
import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { AUTH_URL } from "@/config/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return ""
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return AUTH_URL
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc"
}
