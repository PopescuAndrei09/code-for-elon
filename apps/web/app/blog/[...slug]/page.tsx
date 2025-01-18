"use client"

import React from "react"
import { useSearchParams } from "next/navigation"

import { clientApi } from "@/trpc/client"

const PostView = () => {
  const params = useSearchParams()
  console.log(params.get("slug"))
  const slug = params.get("slug") || "default-slug"
  if (!params.get("slug")) {
    return <div>Invalid slug</div>
  }
  const onePost = clientApi.blog.getOnePost.useQuery(
    {
      slug: slug
    },
    {
      enabled: slug !== null,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: 3000
    }
  )
  console.log(onePost.data)
  return (
    <div className='container'>
      <h1 className='text-2xl'>{onePost.data?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: onePost?.data?.html || "" }} />
      <h2>
        Published at:{" "}
        {new Date(onePost.data?.published_at ? onePost.data?.published_at : Date.now()).toLocaleDateString("ro-RO")}
      </h2>
      <h2>
        Updated at:{" "}
        {new Date(onePost.data?.updated_at ? onePost.data?.updated_at : Date.now()).toLocaleDateString("ro-RO")}
      </h2>
      <h2>
        Reading time:{" "}
        {new Date(onePost.data?.reading_time ? onePost.data?.reading_time : Date.now()).toLocaleDateString("ro-RO")}
      </h2>
    </div>
  )
}

export default PostView
