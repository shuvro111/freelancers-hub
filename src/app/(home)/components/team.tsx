import Image from "next/image"
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb"

import { teamData } from "@/lib/team-data"
import { CardSlider } from "@/components/ui/slider/card-slider"

export const Team = () => {
  return (
    <div className="bg-background-3">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Our Specialist Who Works For Your Business
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Meet our team of talented, dedicated professionals combining diverse
          expertise to create exceptional digital marketing solutions tailored
          to your success.
        </p>

        <div className="mt-16 w-full">
          <div className="flex gap-x-4">
            <button className="arrow-left text-accent text-2xl disabled:text-rose-900">
              <TbArrowNarrowLeft />
            </button>
            <CardSlider
              navigation={{
                enabled: true,
                prevEl: ".arrow-left",
                nextEl: ".arrow-right",
              }}
              pagination
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {teamData.map((item) => (
                <TeamMemberCard
                  key={item.name}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  designation={item.designation}
                />
              ))}
            </CardSlider>
            <button className="arrow-right text-accent text-2xl disabled:text-rose-900">
              <TbArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface TeamMemberCardProps {
  imageUrl: string
  name: string
  designation: string
}

export const TeamMemberCard = ({
  imageUrl,
  name,
  designation,
}: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full lg:h-48 lg:w-48">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-8 text-2xl font-medium">{name}</h3>
      <p className="text-lg font-light">{designation}</p>
    </div>
  )
}
