/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { worksData } from '@/data/works';

import "swiper/css"

export default function WorkSlider() {
  const [index, setIndex] = useState(0)


  return (
    <div className="flex flex-col w-full h-[100%] lg:h-[460px] pb-0">
      <div className="flex gap-x-4 lg:gap-x-14 mx-auto xl:mx-0 mb-4 h-fit pt-4">

        {worksData.map((item, itemIndex) => {
          return (
            <button
              type="button"
              key={itemIndex}
              className={`${index === itemIndex && 'text-primary font-bold after:w-[100%] after:bg-primary after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-4 after:h-[2px] after:bg-secondary dark:after:bg-light after:absolute after:-bottom-1 after:left-0 text-xs lg:text-base`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </button>
          )
        })}

      </div>
      <div className="py-2 pb-14 xl:py-2 flex flex-row items-center xl:items-start overflow-y-auto scrollbar-thin scrollbar-thumb-primary hover:scrollbar-thumb-primary duration-300 ease-linear h-[100%] gap-8">
        {worksData[index].works.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className="flex p-4 rounded-lg bg-primary/15 w-[85%] lg:max-w-sm flex-col gap-4">
              <h2 className="text-sm font-bold">{item.title}</h2>
              <p className="text-xs">{item.description}</p>

              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                }}
                className='h-fit sm:h-[240px] w-full'
              >
                {item.images.map((imageItem, imageIndex) => {
                  return (
                    <SwiperSlide key={imageIndex} className="h-fit w-full">
                      <img className="object-contain group-hover:scale-105 duration-300 w-full" alt={item.company} src={imageItem.image} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          )
        })}
      </div>
    </div>
  )
}
