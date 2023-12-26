import {
  TbChevronRight,
  TbClick,
  TbCode,
  TbSpeakerphone,
  TbWorldSearch,
} from "react-icons/tb"

import { Button } from "@/components/ui/button/button"

const data = [
  {
    icon: <TbCode />,
    title: "Web Development",
    description:
      "Harness the power of web development to create visually stunning, user-friendly, and responsive websites. We will help you to captivate audiences and drive marketing success, elevating your online presence.",
    buttonTitle: "Learn More",
    buttonLink: "/web-development",
  },
  {
    icon: <TbWorldSearch />,
    title: "SEO",
    description:
      "Harness the power of web development to create visually stunning, user-friendly, and responsive websites. We will help you to captivate audiences and drive marketing success, elevating your online presence.",
    buttonTitle: "Learn More",
    buttonLink: "/web-development",
  },
  {
    icon: <TbSpeakerphone />,
    title: "Social Media Marketing",
    description:
      "Harness the power of web development to create visually stunning, user-friendly, and responsive websites. We will help you to captivate audiences and drive marketing success, elevating your online presence.",
    buttonTitle: "Learn More",
    buttonLink: "/web-development",
  },
  {
    icon: <TbClick />,
    title: "Pay Per Click",
    description:
      "Harness the power of web development to create visually stunning, user-friendly, and responsive websites. We will help you to captivate audiences and drive marketing success, elevating your online presence.",
    buttonTitle: "Learn More",
    buttonLink: "/web-development",
  },
]

export const Services = () => {
  return (
    <div className="bg-background-2">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Services We Provide
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Experience growth and success with our expert services: Web
          Development, SEO, SMM, and PPC. Unlock your website&apos;s potential,
          boost your online visibility, engage your audience, and drive targeted
          traffic to achieve your business goals.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => {
            return (
              <div
                className="flex flex-col items-center gap-y-4"
                key={item.title}
              >
                <div className="bg-accent flex items-center justify-center rounded-full p-4 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-center text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-center font-light leading-relaxed">
                  {item.description}
                </p>
                <Button
                  type="link"
                  variant="ghost"
                  href={item.buttonLink}
                  className="mt-4"
                >
                  {item.buttonTitle} <TbChevronRight strokeWidth="3" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
