import Image from "next/image"

// import { Advertising } from "@/components/advertising/secondary-layout"

const CasinoCard = () => {
  const imageSource = "/images/CasinoNight2.png"
  const repeatCount = 13

  const imageIndexes = Array.from({ length: repeatCount }, (_, index) => index)

  return (
    <div className='flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-2'>
      <div className='flex flex-col items-center gap-16 '>
        <div className='grid w-full grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {imageIndexes.map((index) => (
            <div key={index}>
              <Image src={imageSource} alt={`img-${index}`} width={180} height={180} />
            </div>
          ))}
        </div>
        {/* <Pagination
        currentPage={page}
        totalPages={Math.ceil((data?.length || 0) / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      /> */}
        <div>Pagination</div>
      </div>
      {/* <Advertising /> */}
    </div>
  )
}

export default CasinoCard
