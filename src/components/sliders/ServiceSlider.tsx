"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { servicesData } from '@/data/services';
import { RxArrowTopRight } from 'react-icons/rx';

export default function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {servicesData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="h-fit flex-grow-0">
            <div className="relative bg-[rgba(65,47,123,0.15)] dark:bg-[rgba(65,47,123,0.32)] hover:bg-[rgba(89,65,169,0.15)] dark:hover:bg-[rgba(89,65,169,0.32)] duration-300 ease-in-out h-max flex-grow-1 rounded-xl px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer">
              <div className="gap-x-4 flex items-center">
                {/* icon */}
                <div className="text-4xl text-green-700 dark:text-accent mb-4">{item.icon}</div>

                {/* title desc */}
                <div>
                  <div>{item.title}</div>
                  <div className="text-sm text-primary">{item.competency}</div>
                  <div className="text-left text-xs lg:text-sm pt-2">{item.description}</div>
                </div>
              </div>

              {/* arrow */}
              <div className='text-xl'>
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-green-700 dark:group-hover:text-accent duration-300 ease-linear transition-all" />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
