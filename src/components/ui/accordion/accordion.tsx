"use client"

import { createContext, useContext } from "react"
import { ClassValue } from "clsx"

import { cn } from "@/lib/utils"

/* Accordion Context Start */
interface AccordionContext {
  expand: boolean
  toggleExpand(): void
}

const AccordionContext = createContext<AccordionContext>({
  expand: false,
  toggleExpand: () => {},
})

const { Provider: AccordionProvider } = AccordionContext

const useAccordion = () => {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      `Accordion compound components cannot be rendered outside the Accordion component`
    )
  }
  return context
}

/* Accordion Context End */

/* Accordion Trigger */
interface AccordionTriggerProps {
  children: React.ReactNode
  iconOpened?: React.ReactNode
  iconClosed?: React.ReactNode
  className?: ClassValue
}

const AccordionTrigger = ({
  children,
  iconOpened,
  iconClosed,
  className,
}: AccordionTriggerProps) => {
  const { toggleExpand, expand } = useAccordion()
  return (
    <button
      onClick={toggleExpand}
      className={cn("flex w-full items-center justify-between", `${className}`)}
    >
      {children}
      <span>{expand ? iconOpened : iconClosed}</span>
    </button>
  )
}

/* Accordion Content */

interface AccordionContentProps {
  children: React.ReactNode
  className?: ClassValue
}
const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { expand } = useAccordion()
  return (
    <div
      className={cn(
        `grid overflow-hidden transition-all duration-300 ease-in-out ${
          expand ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`
      )}
    >
      <div className={cn("overflow-hidden", `${className}`)}>{children}</div>
    </div>
  )
}

/* Accordion */
interface AccordionProps {
  children: React.ReactNode
  expand: boolean
  toggleExpand(): void
  className?: ClassValue
}

export const Accordion = ({
  children,
  expand,
  toggleExpand,
  className = "",
}: AccordionProps) => {
  return (
    <AccordionProvider value={{ expand, toggleExpand }}>
      <div className={cn(`${className}`)}>{children}</div>
    </AccordionProvider>
  )
}

export { AccordionProvider, useAccordion, AccordionTrigger, AccordionContent }
