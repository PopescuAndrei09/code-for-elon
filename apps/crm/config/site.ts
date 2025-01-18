import { siteMetadata } from "@/components/metadata"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: siteMetadata.title,
  description: "Beautifully designed SSP {CRM} tool, used for managing our users.",
  mainNav: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Users",
      href: "/users"
    },
    {
      title: "Games",
      href: "/games"
    },
    {
      title: "Adverts",
      href: "/adverts"
    },
    {
      title: "Casino",
      href: "/casino"
    }
  ],
  links: {
    discord: "https://discord.com/invite/bRKdZKJh2J",
    twitter: "https://twitter.com/sspFarm",
    telegram: "https://t.me/sspfarm",
    facebook: "https://www.facebook.com/profile.php?id=100092581067171",
    whatsapp: "https://wa.me/40731955192"
  }
}
