import { ThemeToggle } from "./theme/theme-toggle"

export default function Home() {
  return (
    <main className="grid h-screen w-full place-items-center">
      <div className="text-green-500 dark:text-red-500">Hello!</div>
      <ThemeToggle />
    </main>
  )
}
