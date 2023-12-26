import Image from "next/image"

import { cn } from "@/lib/utils"

const data = [
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231891-goodfirms-1024x153.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231940-hubstaff-1024x219.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231928-google-partner.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231948-moz-1024x300.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231841-facebook-marketing-partner.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231978-upwork-1024x304.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231932-hubspot-partner.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231971-semrush.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231804-ahrefs.png",
  "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/04/489231825-clutch-firms-that-deliver-1024x405.png",
]

const getClassName = (index: number) => {
  let className = ""

  if ((index - 3) % 5 === 0 || (index - 3) % 5 === 1) {
    className += "col-span-2 md:col-span-3 justify-center "
  } else {
    className += "col-span-2 "
    if (index % 5 === 0) {
      className += "md:justify-start md:pl-0 justify-center"
    } else if (index % 5 === 1) {
      className += "justify-center"
    } else {
      className += "md:justify-end md:pr-0 justify-center"
    }
  }
  return className
}

export const TechnologiesWeUse = () => {
  return (
    <div className="bg-background-2">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Digital Marketing KPIs We Track
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Implement crucial digital marketing KPIs, driving campaign success and
          maximizing impact, with tailored strategies to achieve your goals.
        </p>

        <div className="mt-8 grid w-full grid-cols-4 place-items-center md:grid-cols-6 lg:mt-16">
          {data.map((item, index) => {
            const className = getClassName(index)

            return (
              <div
                key={index}
                className={cn(
                  "flex h-full w-full items-center px-8 py-6 lg:py-8",
                  className
                )}
              >
                <Image
                  src={item}
                  width={200}
                  height={50}
                  className="h-full w-40 object-contain xl:w-48"
                  alt={"technology" + index}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
