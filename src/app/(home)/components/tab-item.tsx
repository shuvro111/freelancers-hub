import Image from "next/image"
import { TbArrowRight } from "react-icons/tb"

import { Button } from "@/components/ui/button/button"

type TabItemProps = {
  heading: string
  description: string
  buttonTitle: string
  buttonLink: string
  imageUrl: string
  alt?: string
}

export const TabItem = ({
  heading,
  description,
  buttonTitle,
  buttonLink,
  imageUrl,
  alt = "",
}: TabItemProps) => {
  return (
    <div className="mt-10 flex flex-col gap-8 md:items-center lg:flex-row-reverse lg:gap-x-16 xl:mt-16">
      <Image
        src={imageUrl}
        alt={alt}
        width={300}
        height={300}
        className="w-full flex-1 overflow-hidden rounded object-cover lg:w-1/2"
      />
      <div className="border-accent flex w-full flex-1 flex-col items-start justify-center gap-4 border-l py-4 pl-8 lg:w-1/2 xl:pl-12">
        <h1 className="text-2xl font-medium lg:text-4xl">{heading}</h1>
        <p className="font-light leading-relaxed">{description}</p>
        <Button
          type="link"
          variant="primary"
          href={buttonLink}
          className="mt-4"
        >
          {buttonTitle} <TbArrowRight strokeWidth="3" />
        </Button>
      </div>
    </div>
  )
}
