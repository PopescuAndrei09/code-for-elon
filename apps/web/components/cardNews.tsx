"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"

const CardNews = ({
  homePosts
}: {
  homePosts: Awaited<ReturnType<(typeof serverApi)["blog"]["getOnlyEight"]["query"]>>
}): React.JSX.Element => {
  const allPosts = clientApi.blog.getOnlyEight.useQuery(undefined, {
    initialData: homePosts,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const posts = allPosts.data

  return (
    <div className='grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2  md:justify-items-center lg:grid-cols-3 xl:grid-cols-4'>
      {posts.length > 0 &&
        posts?.map(
          (post, index: number) =>
            post && (
              <div key={index} className='cardStyle h-auto'>
                {post?.feature_image && (
                  <Image
                    src={post?.feature_image}
                    alt='Picture of the author'
                    width={300}
                    height={200}
                    className=' rounded-3xl'
                  />
                )}
                <div className='flex flex-col gap-2 p-2'>
                  <div className='text-white'>{post?.title}</div>
                  <div className='text-base text-white text-opacity-70'>
                    {post?.excerpt.substring(0, 50)}
                    {post?.excerpt.length > 50 && "..."}
                    {post.excerpt.length > 50 && <Link href={`/blog/slug?slug=${post?.slug}`}>Read more</Link>}
                  </div>
                  <div className='flex w-full justify-between'>
                    <Link href={`/blog/slug?slug=${post?.slug}`} className='text-base font-medium text-white underline'>
                      Read full article
                    </Link>
                    <div className='text-base font-medium text-white text-opacity-70'>
                      {new Date(post?.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  )
}

export default CardNews
