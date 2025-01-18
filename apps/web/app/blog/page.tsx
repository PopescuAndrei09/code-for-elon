import * as React from "react"
import type { Metadata } from "next"

import { siteMetadata } from "@/components/metadata"
import { serverApi } from "@/trpc/server"
import BlogView from "."

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Blog`
}

const BlogPage = async () => {
  const allPosts = await serverApi.blog.getAll.query()
  const allSecondaryAdvert = await serverApi.advert.getAllSecondary.query()

  return <BlogView initialData={allPosts} allSecondaryAdvert={allSecondaryAdvert} />
}

export default BlogPage
