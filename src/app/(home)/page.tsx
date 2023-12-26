import { TbCircleCheck } from "react-icons/tb"

import { marqueeData } from "@/lib/marquee-data"
import { Marquee } from "@/components/ui/marquee/marquee"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import { Banner } from "./components/banner"
import { Blog } from "./components/blog"
import { CaseStudies } from "./components/case-studies"
import { CallToActionV1, CallToActionV2 } from "./components/cta"
import { Expertise } from "./components/expertise"
import { KPI } from "./components/kpi"
import { Services } from "./components/services"
import { Team } from "./components/team"
import { TechnologiesWeUse } from "./components/techonologies-we-use"
import { Testimonial } from "./components/testimonial"
import { WhatWeDo } from "./components/what-we-do"
import WhyUs from "./components/why-us"

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Marquee>
        {marqueeData.map((item, index) => {
          return (
            <div key={"marquee " + index} className="flex items-center gap-x-2">
              <TbCircleCheck size={24} className="text-green-400" />
              <span>{item}</span>
            </div>
          )
        })}
      </Marquee>
      <Expertise />
      <KPI />
      <Services />
      <CaseStudies />
      <CallToActionV1 />
      <WhyUs />
      <WhatWeDo />
      <TechnologiesWeUse />
      <Testimonial />
      <CallToActionV2 />
      <Team />
      <Blog />
      <Footer />
    </main>
  )
}
