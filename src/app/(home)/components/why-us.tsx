import Image from "next/image"
import { TbUsers } from "react-icons/tb"

const whyUsData = [
  {
    icon: <TbUsers />,
    title: "Expertise",
    description:
      "Our team has vast expertise in SEO, PPC, SMM, and content development. We stay ahead of industry trends to deliver customized strategies that drive results.",
  },
  {
    icon: <TbUsers />,
    title: "Customizeable",
    description:
      "We provide customized strategies tailored to each client’s specific needs and goals, ensuring maximum ROI and delivering measurable results.",
  },
  {
    icon: <TbUsers />,
    title: "Result Driven",
    description:
      "Our result-driven approach leverages the latest technologies and tools to track progress and analyze data, ensuring our clients achieve real results online.",
  },
  {
    icon: <TbUsers />,
    title: "Customer Support",
    description:
      "Our team is dedicated to providing excellent customer support, working closely with clients to ensure their needs are met, and goals are exceeded.",
  },
]

const WhyUs: React.FC = () => {
  return (
    <section className="bg-background-2 w-full">
      <div className="container flex flex-col items-center gap-y-8 py-16 lg:flex-row-reverse lg:py-28 xl:gap-x-16">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://freelancers-hub.ca/wp-content/uploads/2023/04/why-us-new.png"
            alt="Image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-y-4 lg:w-1/2">
          <h2 className="text-4xl font-medium lg:text-5xl">Why Choose Us</h2>
          <p className="w-full font-light leading-relaxed">
            Choose us for expert digital marketing services that deliver
            measurable results. We customize strategies to meet your specific
            needs and goals.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-y-16">
            {whyUsData.map((item) => {
              return (
                <div key={item.title} className="flex flex-col gap-y-4">
                  <div className="flex items-center gap-x-4">
                    <span className="text-accent text-4xl">{item.icon}</span>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
