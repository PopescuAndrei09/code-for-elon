import { getFetch } from "@trpc/client"
import * as z from "zod"

import { createRouter, publicProcedure } from "../trpc"

export type PostProps = {
  access: boolean
  canonical_url: null
  codeinjection_foot: null
  codeinjection_head: null
  comment_id: string
  comments: boolean
  created_at: string
  custom_excerpt: null
  custom_template: null
  email_subject: null
  excerpt: string
  feature_image: string
  feature_image_alt: null
  feature_image_caption: null
  featured: boolean
  frontmatter: null
  html: string
  id: string
  meta_description: null
  meta_title: null
  og_description: null
  og_image: null
  og_title: null
  published_at: string
  reading_time: number
  slug: string
  title: string
  twitter_description: null
  twitter_image: null
  twitter_title: null
  updated_at: string
  url: string
  uuid: string
  visibility: string
}

const blogRouter = createRouter({
  getOnlyFour: publicProcedure.query(async (opts) => {
    try {
      const response = await fetch(
        "https://blog.humans.ai/ghost/api/content/posts/?key=d5791f7058570e473c0598f9e9&limit=4"
      )
      if (!response.ok) {
        throw new Error("Failed to fetch six posts")
      }
      const data = await response.json()
      const posts: PostProps[] = data.posts
      return posts
    } catch (error) {
      console.error("Error fetching six posts:", error)
      throw error
    }
  }),
  getOnlyEight: publicProcedure.query(async (opts) => {
    try {
      const response = await fetch(
        "https://blog.humans.ai/ghost/api/content/posts/?key=d5791f7058570e473c0598f9e9&limit=8"
      )
      if (!response.ok) {
        throw new Error("Failed to fetch six posts")
      }
      const data = await response.json()
      const posts: PostProps[] = data.posts
      return posts
    } catch (error) {
      console.error("Error fetching six posts:", error)
      throw error
    }
  }),
  getAll: publicProcedure.query(async (opts) => {
    try {
      const response = await fetch(
        "https://blog.humans.ai/ghost/api/content/posts/?key=d5791f7058570e473c0598f9e9&limit=all"
      )
      if (!response.ok) {
        throw new Error("Failed to fetch six posts")
      }
      const data = await response.json()
      const posts: PostProps[] = data.posts
      return posts
    } catch (error) {
      console.error("Error fetching six posts:", error)
      throw error
    }
  }),
  getOnePost: publicProcedure.input(z.object({ slug: z.string() })).query(async (opts) => {
    try {
      const response = await fetch(
        `https://blog.humans.ai/ghost/api/content/posts/slug/${opts.input.slug}/?key=d5791f7058570e473c0598f9e9`
      )
      console.log("dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", opts.input.slug)
      if (!response.ok) {
        throw new Error("Failed to fetch six posts")
      }
      const data = await response.json()

      const posts: PostProps = data.posts[0]
      return posts
    } catch (error) {
      console.error("Error fetching six posts:", error)
      throw error
    }
  })
})
export { blogRouter }
