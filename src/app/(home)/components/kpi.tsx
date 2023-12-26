import { TbCheck } from "react-icons/tb"

import { kpiData } from "@/lib/kpi-data"

export const KPI = () => {
  return (
    <div className="bg-background-3">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Digital Marketing KPIs We Track
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Implement crucial digital marketing KPIs, driving campaign success and
          maximizing impact, with tailored strategies to achieve your goals.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-8 md:flex-row  md:gap-4 lg:mt-16 xl:gap-16">
          {kpiData.map((item) => (
            <KPICard
              key={item.title}
              icon={item.icon}
              title={item.title}
              bulletPoints={item.bulletPoints}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface KPICardProps {
  icon: React.ReactNode
  title: string
  bulletPoints: string[]
}

export const KPICard = ({ icon, title, bulletPoints }: KPICardProps) => {
  return (
    <div className="bg-card-2 flex flex-1 flex-col items-center overflow-hidden rounded-xl">
      <div className="flex w-full flex-col items-center justify-center gap-y-4 bg-slate-800 px-4 py-8">
        <span className="text-accent text-5xl">{icon}</span>
        <h3 className="text-center text-2xl font-medium md:text-xl lg:text-2xl">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col gap-y-8 p-8 md:px-4 lg:px-8">
        {bulletPoints.map((item) => (
          <li key={item} className="flex items-center gap-x-4">
            <span className="">
              <TbCheck
                strokeWidth={5}
                className="rounded-full bg-green-600 p-1 text-xl text-white md:text-xl lg:text-2xl"
              />
            </span>
            <span className="text-lg md:text-base lg:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
