"use client"

import { useTheme } from "next-themes"

import { Icons } from "../lib/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icons.sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Icons.moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
