import Link from "next/link"

import { megamenu } from "@/lib/data"

export const ServicesMegaMenu = () => {
  return (
    <div className="bg-background-2 dark:bg-background-2 container mx-auto mt-4 grid grid-cols-4 place-items-stretch gap-x-6 rounded-md p-4">
      {megamenu.map((item, index) => (
        <div
          className="bg-background dark:bg-background-3 grid grid-cols-1 gap-y-6 rounded-lg p-8"
          key={index}
        >
          <Link
            href={item.link}
            className="hover:text-accent flex items-center gap-x-2 text-2xl font-semibold transition duration-300"
          >
            <span className="text-accent text-3xl">{item.icon}</span>
            {item.title}
          </Link>
          <div className="flex flex-col gap-y-4">
            {item.children?.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="hover:text-accent text-lg transition duration-300"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
