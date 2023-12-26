import Ticker from "react-fast-marquee"

interface MarqueeProps {
  children: string[] | React.ReactNode
}

export const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="bg-background-2 relative py-4">
      <div className="container flex gap-x-2">
        <h4 className="min-w-max flex-1 font-semibold text-green-500">
          Real Results:
        </h4>
        <Ticker
          pauseOnHover
          gradient
          gradientColor="var(--background-2)"
          gradientWidth="4rem"
        >
          <div className="flex items-center gap-x-8 last:mr-8">{children}</div>
        </Ticker>
      </div>
    </div>
  )
}
