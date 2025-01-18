import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"

import Card from "../card"

const SwiperComponent = () => {
  return (
    <div className='relative'>
      <div className='my-8 mt-4 text-[28px] font-semibold text-white'>
        <span className=''>Discover best casinos</span>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          pagination={{ clickable: true, dynamicBullets: true }}
          style={{ width: "auto" }}
          className='container'
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          breakpoints={{
            320: {
              slidesPerView: 0.5
            },
            375: {
              slidesPerView: 1
            },
            425: {
              slidesPerView: 1.35
            },
            768: {
              slidesPerView: 2.5
            },
            1024: {
              slidesPerView: 3.25
            },
            1440: {
              slidesPerView: 4.1
            }
          }}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <SwiperSlide className='  mt-20 lg:mt-8' key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='absolute right-[58px] top-[40px] mx-auto mr-12 mt-6 hidden  items-center md:right-0 md:top-[-12px] md:mr-12 md:mt-6  md:flex '>
        <div className='swiper-button-prev ml-[-150px] h-11  w-24 rounded-xl'>
          <div className='arrow-left'></div>
        </div>
        <div className='swiper-button-next ml-[-150px]'>
          <div className='arrow-right'></div>
        </div>
      </div>
      <div className='float-right flex'>
        <Link href={"/casino"}>
          <span>Show all casinos</span>
        </Link>
      </div>
    </div>
  )
}

export default SwiperComponent
