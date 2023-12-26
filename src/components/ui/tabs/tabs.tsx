"use client"

import React, { createContext } from "react"
import { ClassValue } from "clsx"

import { cn } from "@/lib/utils"

interface BaseProps {
  children: React.ReactNode
  className?: ClassValue
}

interface TabsProps extends BaseProps {
  defaultValue: string
}
interface TabTitleProps extends BaseProps {
  value: string
  activeClassName?: ClassValue
}
interface TabContentProps extends BaseProps {
  value: string
}

interface TabsContextProps {
  onClick(value: string): void
  activeValue: string
  defaultValue: string
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined)

export const useTabs = () => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error(
      `Tabs compound components cannot be rendered outside the Tabs component`
    )
  }
  return context
}

export const Tabs = ({ children, className, defaultValue }: TabsProps) => {
  {
    const [activeValue, setActiveValue] = React.useState(defaultValue)
    const value = {
      onClick: (value: string) => {
        setActiveValue(value)
      },
      activeValue,
      defaultValue,
    }
    return (
      <div className={cn("tabs", className)}>
        <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
      </div>
    )
  }
}

export const TabList = ({ children, className }: BaseProps) => {
  return (
    <div className={cn("tab-list flex flex-col gap-4 md:flex-row", className)}>
      {children}
    </div>
  )
}
export const TabPanel = ({ children, className }: BaseProps) => {
  return (
    <div className={cn("tab-panel flex gap-x-4", className)}>{children}</div>
  )
}

export const TabTitle = ({
  children,
  className,
  value,
  activeClassName,
}: TabTitleProps) => {
  const { onClick, activeValue } = useTabs()
  return (
    <button
      className={cn(
        "tab-title ",
        className,
        `${value === activeValue ? cn("", activeClassName) : ""}`
      )}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  )
}

export const TabContent = ({ children, className, value }: TabContentProps) => {
  const { activeValue } = useTabs()
  return (
    <div
      className={cn(
        "tab-content animate-in fade-in-0 duration-1000",
        `${value === activeValue ? "block opacity-100" : "hidden opacity-0"}`,
        className
      )}
    >
      {children}
    </div>
  )
}
