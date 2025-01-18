"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import SecondaryLayout from "@/components/advertising/secondary-layout"
import { Pagination } from "@/components/pagination/pagination"
import { clientApi } from "@/trpc/client"
import type { serverApi } from "@/trpc/server"

const ITEMS_PER_PAGE = 8
export const BlogView = ({
  initialData,
  allSecondaryAdvert
}: {
  initialData: Awaited<ReturnType<(typeof serverApi)["blog"]["getAll"]["query"]>>
  allSecondaryAdvert: Awaited<ReturnType<(typeof serverApi)["advert"]["getAllSecondary"]["query"]>>
}) => {
  const [page, setPage] = React.useState(1)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    // Fetch data for the new page...
  }
  const allPosts = clientApi.blog.getAll.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
    refetchOnReconnect: false
  })
  const posts = allPosts.data
  return (
    <>
      <div className='grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {posts.length > 0 &&
          posts?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE).map(
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
                      <Link
                        href={`/blog/slug?slug=${post?.slug}`}
                        className='text-base font-medium text-white underline'
                      >
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
      <Pagination
        currentPage={page}
        totalPages={Math.ceil((posts?.length || 0) / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
      <div className='image-bg-bonuses  full-width mt-20 w-full p-4'>
        <div className='container '>
          <SecondaryLayout allSecondaryAdvert={allSecondaryAdvert} />
        </div>
      </div>
    </>
  )
}

export default BlogView
