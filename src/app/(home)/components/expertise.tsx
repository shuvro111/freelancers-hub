import { expertiseData } from "@/lib/home-tab-data"
import {
  TabContent,
  TabList,
  TabPanel,
  Tabs,
  TabTitle,
} from "@/components/ui/tabs/tabs"

import { TabHeader } from "./tab-header"
import { TabItem } from "./tab-item"

export const Expertise = () => {
  return (
    <section className="container py-16 lg:py-28">
      <Tabs defaultValue={expertiseData[0].id}>
        <TabList className="flex justify-between lg:gap-x-12 xl:gap-x-16">
          {expertiseData.map((item) => {
            return (
              <TabTitle
                value={item.id}
                key={item.id}
                className="bg-background-2 text-accent flex-1 rounded-lg p-4 font-medium lg:px-8"
                activeClassName="bg-accent text-white shadow-lg lg:shadow-2xl shadow-rose-500/30 font-semibold"
              >
                <TabHeader
                  heading={item.title.heading}
                  subheading={item.title.subheading}
                />
              </TabTitle>
            )
          })}
        </TabList>
        <TabPanel>
          {expertiseData.map((item) => {
            return (
              <TabContent value={item.id} key={item.id} className="">
                <TabItem
                  heading={item.content.heading}
                  description={item.content.description}
                  buttonTitle={item.content.butttonTitle}
                  buttonLink={item.content.buttonLink}
                  imageUrl={item.content.imgUrl}
                />
              </TabContent>
            )
          })}
        </TabPanel>
      </Tabs>
    </section>
  )
}
