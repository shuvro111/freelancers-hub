import Image from "next/image"

import { Button } from "@/components/ui/button/button"

export const Banner = () => {
  return (
    <div className="bg-background relative z-[0] w-full">
      <div className="container flex h-full w-full flex-col items-center gap-4 pb-16 lg:h-[80vh] lg:flex-row-reverse lg:pb-0">
        <div className="relative mt-28 flex h-full flex-col justify-end lg:mt-0 xl:px-24 xl:pt-24">
          <Image
            className="w-full -scale-x-100"
            src="https://freelancers-hub.ca/wp-content/uploads/2023/03/Your-Digital-Success-Starts-Here-In-Canada.png"
            width={400}
            height={400}
            alt="banner-image"
          />
          <Image
            className="animate-fade-in-up repeat-infinite duration-6000 lg:left[300px] absolute left-[100px] top-[200px] hidden h-auto w-auto lg:left-[20px] lg:block"
            src="https://freelancers-hub.ca/wp-content/uploads/2023/03/Frame-3431.png"
            width={150}
            height={150}
            alt="group-1"
          />
          <Image
            className="animate-fade-in-up repeat-infinite duration-6000 delay-2000 absolute right-0 top-[250px] hidden h-auto w-auto lg:block"
            src="https://freelancers-hub.ca/wp-content/uploads/2023/03/Group-2840.png"
            width={150}
            height={150}
            alt="group-2"
          />
          <Image
            className="animate-fade-in-up repeat-infinite duration-6000 delay-4000 absolute bottom-[150px] right-10 hidden h-auto w-auto lg:block"
            src="https://freelancers-hub.ca/wp-content/uploads/2023/03/4.png"
            width={150}
            height={150}
            alt="group-3"
          />
        </div>
        <div className="flex w-full flex-col gap-y-6 lg:w-1/2 xl:w-2/5">
          <h1 className="text-4xl font-medium lg:text-5xl xl:text-6xl">
            Your Digital Success Starts Here In Canada
          </h1>
          <p className="">
            We Specialize In Creating Customized Solutions Tailored To Your
            Specific Goals. With Our Expert Team, You Can Expect Innovative
            Strategies And Cutting-Edge Tactics Designed To Deliver The Results
            You Need To Succeed In Today&apos;s Digital Landscape.
          </p>
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-lg md:flex-row md:items-center xl:pr-10">
            <input
              type="url"
              name="website"
              id="website"
              className="bg-background-2 dark:bg-background-3 ring-background-3 inset-0 flex-1 rounded px-6 py-3 ring-2 focus:outline-none dark:ring-slate-800"
              placeholder="Enter Your Website..."
            />
            <Button type="link" variant="primary" href="/get-a-quote">
              Get A Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
