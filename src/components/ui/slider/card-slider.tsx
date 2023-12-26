"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { CSSSelector, SwiperOptions } from "swiper/types"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ClassValue } from "clsx"

import { cn } from "@/lib/utils"

interface CardSliderProps {
  children: React.ReactNode[]
  slidesPerView: number
  spaceBetween?: number
  centerSlides?: boolean
  navigation?: {
    enabled?: boolean
    /**
     * CSS selector or HTML element of the element that will work like "previous" button after click on it
     * @default '.arrow-left'
     */
    prevEl?: CSSSelector
    /**
     * CSS selector or HTML element of the element that will work like "next" button after click on it
     * @default '.arrow-right'
     */
    nextEl?: CSSSelector
  }
  pagination?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  loop?: boolean
  breakpoints?: {
    [width: number]: SwiperOptions
    [ratio: string]: SwiperOptions
  }
  className?: ClassValue
  speed?: number
  /**
   * Duration for transition of the slide change.
   * @default 500
   */
}

export const CardSlider = ({
  children,
  slidesPerView,
  spaceBetween = 50,
  centerSlides = false,
  navigation = {
    enabled: false,
    prevEl: ".arrow-left",
    nextEl: ".arrow-right",
  },
  pagination = false,
  autoplay = false,
  autoplayDelay = 5000,
  loop = false,
  breakpoints,
  className,
  speed = 500,
}: CardSliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      centeredSlides={centerSlides}
      slidesPerView={slidesPerView}
      navigation={{
        prevEl: navigation.prevEl,
        nextEl: navigation.nextEl,
        enabled: navigation.enabled,
      }}
      pagination={{
        enabled: pagination,
        clickable: true,
        horizontalClass: "!bottom-0",
        bulletClass:
          "bg-rose-900 inline-block w-2 h-2 ml-4 cursor-pointer first:ml-0 rounded-full",
        bulletActiveClass: "!bg-accent",
      }}
      className={cn("h-full w-full", className)}
      style={{
        transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
      }}
      speed={speed}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }
          : false
      }
      loop={loop}
      breakpoints={breakpoints}
    >
      {children &&
        children.map((child, index) => (
          <SwiperSlide key={"swiper-slide-" + index} className="pb-16">
            {child}
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export const SliderContent = () => {}
