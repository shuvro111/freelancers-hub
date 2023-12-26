import Image from "next/image"
import { TbCheck } from "react-icons/tb"

import { whatWeDoData } from "@/lib/home-tab-data"
import {
  TabContent,
  TabList,
  TabPanel,
  Tabs,
  TabTitle,
} from "@/components/ui/tabs/tabs"

export const WhatWeDo = () => {
  return (
    <section className="bg-background-4 w-full">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Our Specialist Who Works For Your Business
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Meet our team of talented, dedicated professionals combining diverse
          expertise to create exceptional digital marketing solutions tailored
          to your success.
        </p>
        <Tabs
          defaultValue={whatWeDoData[0].id}
          className="mt-10 flex w-full flex-col items-center gap-y-8 lg:flex-row xl:mt-16"
        >
          <TabList className="flex w-full justify-between gap-0 md:flex-col lg:w-1/3 lg:gap-x-12 xl:flex-col xl:gap-x-16">
            {whatWeDoData.map((item) => {
              return (
                <TabTitle
                  value={item.id}
                  key={item.id}
                  className="flex-1 justify-start rounded-lg p-4 text-left text-lg font-medium md:text-xl lg:px-8 xl:text-2xl"
                  activeClassName="text-accent border-l border-accent shadow-none lg:shadow-2xl shadow-rose-500/30 rounded-none"
                >
                  <h4 className="">{item.title.heading}</h4>
                </TabTitle>
              )
            })}
          </TabList>
          <TabPanel className="w-full lg:w-2/3">
            {whatWeDoData.map((item) => {
              return (
                <TabContent
                  value={item.id}
                  key={item.id}
                  className="bg-card-2 w-full overflow-hidden rounded-lg"
                >
                  <div className="flex flex-col items-stretch">
                    <Image
                      src={item.content.imgUrl}
                      alt={item.title.heading}
                      width={300}
                      height={300}
                      className="max-h-64 w-full flex-1 overflow-hidden object-cover"
                    />
                    <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
                      {item.content.bulletPoints.map((content) => (
                        <h6
                          className="flex items-center gap-x-2 text-lg"
                          key={content}
                        >
                          <span>
                            <TbCheck
                              strokeWidth={5}
                              className="rounded-full bg-green-600 p-1 text-2xl text-white"
                            />
                          </span>
                          <span>{content}</span>
                        </h6>
                      ))}
                    </div>
                  </div>
                </TabContent>
              )
            })}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  )
}
