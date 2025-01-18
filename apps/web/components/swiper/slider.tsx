"use client"

import * as React from "react"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

// import "./styles.css"

// import required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules"

const SliderComponent = (): React.JSX.Element => {
  const [images, setImages] = React.useState<string[]>([])

  React.useEffect(() => {
    setImages([
      "/images/8718917.png",
      "/images/8723343.png",
      "/images/14744087_1910.i029.030.realistic lotto balls.jpg"
    ])
  }, [])
  console.log(images)
  return (
    <Swiper
      mousewheel={true}
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      className='container'
    >
      <div className='container flex h-auto items-center justify-center'>
        {images?.map((item, index) => {
          console.log("item", item)
          return (
            <SwiperSlide className='container relative' key={index}>
              <div className='container relative  flex h-96  items-center justify-center px-4'>
                <Image src={item} layout='fill' objectFit='cover' loading='eager' priority alt='img' />
              </div>
            </SwiperSlide>
          )
        })}
      </div>
    </Swiper>
  )
}

export { SliderComponent }
