"use client"

import { ClassValue } from "clsx"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

import { Icons } from "../lib/icons"

interface ThemeToggleProps {
  className?: ClassValue
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(className)}
    >
      <Icons.sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Icons.moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
