import { siteMetadata } from "@/components/metadata"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: siteMetadata.title,
  description: "Beautifully designed SSP {CRM} tool, used for managing our users.",
  mainNav: [
    {
      title: "Acasa",
      href: "/"
    },
    {
      title: "Cazinouri",
      href: "/casino"
    },
    {
      title: "Sloturi",
      href: "/slots"
    },
    {
      title: " Jocuri Live",
      href: "/livegames"
    },

    {
      title: "Blog",
      href: "/blog"
    }
  ],
  links: {
    twitter: "https://twitter.com/sspFarm",
    facebook: "https://www.facebook.com/profile.php?id=100092581067171",
    instagram: "https://wa.me/40731955192"
  }
}
