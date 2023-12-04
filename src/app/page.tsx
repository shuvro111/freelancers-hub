import { ThemeToggle } from "../theme/theme-toggle"

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center space-y-2">
      <h1 className="text-5xl font-semibold text-red-500">Freelancers Hub</h1>
      <p className="text-center text-lg">
        Top-Notch Web Design and Digital Marketing Agency
      </p>
      <ThemeToggle className="fixed right-8 top-8" />
    </main>
  )
}
