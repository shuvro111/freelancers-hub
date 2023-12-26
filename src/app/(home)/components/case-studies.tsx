"use client"

import Image from "next/image"
import Link from "next/link"
import { ClassValue } from "clsx"
import { TbArrowUpRight } from "react-icons/tb"

import { cn } from "@/lib/utils"

const data = [
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/02/digital-experts.png",
    imageAlt: "Light House Pat Bus Limo",
    title: "Light House Pat Bus Limo",
    description:
      "User-friendly and mobile-optimized website design has helped to boost organic traffic and drive conversions, making it easier for customers to book limo rentals. It says how responsive web development can enhance the user experience and drive business success.",
    websiteUrl: "https://lighthousepartybuslimo.com",
  },
  {
    imageUrl: "https://freelancers-hub.ca/wp-content/uploads/2023/02/cs.jpg",
    imageAlt: "Light House Pat Bus Limo",
    title: "Pizza Bien",
    description:
      "User-friendly and mobile-optimized website design has helped to boost organic traffic and drive conversions, making it easier for customers to book limo rentals. It says how responsive web development can enhance the user experience and drive business success.",
    websiteUrl: "https://lighthousepartybuslimo.com",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/02/digital-experts.png",
    imageAlt: "Pizza Bien",
    title: "Light House Pat Bus Limo",
    description:
      "User-friendly and mobile-optimized website design has helped to boost organic traffic and drive conversions, making it easier for customers to book limo rentals. It says how responsive web development can enhance the user experience and drive business success.",
    websiteUrl: "https://lighthousepartybuslimo.com",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/02/digital-experts.png",
    imageAlt: "Light House Pat Bus Limo",
    title: "Light House Pat Bus Limo",
    description:
      "User-friendly and mobile-optimized website design has helped to boost organic traffic and drive conversions, making it easier for customers to book limo rentals. It says how responsive web development can enhance the user experience and drive business success.",
    websiteUrl: "https://lighthousepartybuslimo.com",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/02/digital-experts.png",
    imageAlt: "Light House Pat Bus Limo",
    title: "Light House Pat Bus Limo",
    description:
      "User-friendly and mobile-optimized website design has helped to boost organic traffic and drive conversions, making it easier for customers to book limo rentals. It says how responsive web development can enhance the user experience and drive business success.",
    websiteUrl: "https://lighthousepartybuslimo.com",
  },
]

export const CaseStudies = () => {
  return (
    <section className="bg-background-4 w-full">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Our Specialist Who Works For Your Business
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Meet our team of talented, dedicated professionals combining diverse
          expertise to create exceptional digital marketing solutions tailored
          to your success.
        </p>
        <div className="mt-16 grid w-full grid-cols-1 grid-rows-2 gap-8 md:grid-cols-1 lg:grid-cols-6">
          {data.map((item, index) => {
            const className =
              (index + 1) % 5 !== 0 && (index + 1) % 5 < 3
                ? "col-span-1 lg:col-span-3"
                : "col-span-1 lg:col-span-2"
            return (
              <CaseStudyCard
                className={className}
                key={item.title + index}
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                title={item.title}
                description={item.description}
                websiteUrl={item.websiteUrl}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

interface CaseStudyCardProps {
  imageUrl: string
  imageAlt: string
  title: string
  description: string
  websiteUrl?: string
  className?: ClassValue
}

const CaseStudyCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  websiteUrl,
  className,
}: CaseStudyCardProps) => {
  return (
    <Link
      href={websiteUrl ?? "#"}
      className={cn(
        "group/case-study relative flex h-[30rem] min-h-[20rem] flex-col gap-y-4 overflow-hidden rounded-lg md:h-full",
        className
      )}
    >
      <Image
        src={imageUrl}
        width={200}
        height={400}
        alt={imageAlt}
        className="absolute left-0 top-0 h-full w-full object-cover object-center transition-all duration-500 group-hover/case-study:scale-105 group-hover/case-study:brightness-110"
      />
      <div className="relative flex h-full w-full flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/80 p-8 ">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-semibold">{title}</h4>
          {websiteUrl ? (
            <div className="bg-accent group/vcs relative mr-4 -translate-x-4 translate-y-4 rounded-full p-3 text-xl text-white opacity-0 duration-500 group-hover/case-study:translate-x-0 group-hover/case-study:translate-y-0 group-hover/case-study:opacity-100 ">
              <span className="absolute -top-10 left-1/2 w-max -translate-x-1/2 rounded-md bg-slate-900 p-2 text-sm opacity-0 shadow-sm shadow-rose-500/20 transition-opacity duration-500 group-hover/vcs:opacity-100">
                View Case Study
              </span>
              <TbArrowUpRight strokeWidth={3} />
            </div>
          ) : null}
        </div>
        <p className="mt-4">{description}</p>
      </div>
    </Link>
  )
}
