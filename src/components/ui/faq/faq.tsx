"use client"

import { useState } from "react"
import Image from "next/image"
import { TbChevronDown, TbChevronRight } from "react-icons/tb"

import { accordionData } from "@/lib/data"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion"

export const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    accordionData.map(() => false)
  )

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    )
  }

  return (
    <div className="flex w-1/3 flex-col gap-y-4">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expand={expandedItems[index]}
          toggleExpand={() => toggleExpand(index)}
          className={cn(
            "bg-card flex flex-col rounded-lg p-4 shadow-md",
            `${expandedItems[index] && "gap-y-4"}`
          )}
        >
          <AccordionTrigger
            iconOpened={<TbChevronDown />}
            iconClosed={<TbChevronRight />}
            className={cn(
              "border-b border-transparent",
              `${expandedItems[index] && "border-slate-700 pb-4"}`
            )}
          >
            {item.title}
          </AccordionTrigger>
          <div className="flex">
            <AccordionContent>
              {item.content}
              <Image
                src="https://freelancers-hub.ca/wp-content/uploads/2023/02/FH-Logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </AccordionContent>
          </div>
        </Accordion>
      ))}
    </div>
  )
}
