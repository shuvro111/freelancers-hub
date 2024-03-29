import Image from "next/image"

import { Button } from "@/components/ui/button/button"

export const CallToActionV1 = () => {
  return (
    <section className="bg-background-3 pb-28">
      <div className="container">
        <div className="flex flex-col items-center xl:flex-row xl:items-center xl:justify-between">
          <div className="flex w-full flex-col items-center gap-y-4 xl:w-2/3 xl:items-start">
            <h2 className="text-center text-4xl font-medium leading-tight xl:text-left">
              <span className="inline">👋</span>
              <span className="ml-2 inline">
                Supercharge Your Brand&apos;s Online Brilliance!
              </span>
            </h2>
            <p className="text-rose w-5/6 text-center text-base text-gray-300 xl:w-2/3 xl:text-left">
              Our mastery in digital solutions ensures your brand&apos;s success
              journey is guided by expert strategies, driving impactful results
              and sustained excellence.
            </p>
          </div>

          <Button
            href="#"
            className="mt-8 w-max md:mt-12 xl:mt-0"
            as="anchor"
            variant="primary"
            name="book-a-consultation"
          >
            Book A Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

export const CallToActionV2 = () => {
  return (
    <section className="bg-card-2 relative overflow-hidden">
      <Image
        src="/bg.svg"
        width={100}
        height={100}
        alt="bg"
        className="to-bottom-48 absolute -bottom-10 left-1/2 w-[640px] -translate-x-1/2 opacity-30 blur-3xl"
      />
      <div className="container relative flex flex-col items-center gap-y-8 py-16 lg:py-28">
        <h4 className="text-center text-4xl font-medium lg:text-5xl">
          Get Proven Results
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:mt-8">
          <div className="flex flex-col items-center pb-8 text-center md:px-4 md:py-0 lg:px-8">
            <h4 className="text-2xl font-light lg:text-3xl">
              Discover New Ideas for Business
            </h4>
            <p className="w-60 pt-4 text-gray-400 md:w-full lg:w-60">
              Amet minim mollit non deserunt ullamco est sit aliqua.
            </p>
          </div>

          <div className="flex flex-col items-center border-y border-slate-700 py-8 text-center md:border-x md:border-y-0 md:px-4 md:py-0 lg:px-8">
            <h4 className="text-2xl font-light lg:text-3xl">
              Discover New Ideas for Business
            </h4>
            <p className="w-60 pt-4 text-gray-400 md:w-full lg:w-60">
              Amet minim mollit non deserunt ullamco est sit aliqua.
            </p>
          </div>

          <div className="flex flex-col items-center py-8 text-center md:px-4 md:py-0 lg:px-8">
            <h4 className="text-2xl font-light lg:text-3xl">
              Discover New Ideas for Business
            </h4>
            <p className="w-60 pt-4 text-gray-400 md:w-full lg:w-60">
              Amet minim mollit non deserunt ullamco est sit aliqua.
            </p>
          </div>
        </div>
        <hr className="border-accent w-[80%] border-t-2 md:mt-8"></hr>
        <h3 className="mt-4 w-full text-center text-2xl font-normal md:w-3/4 lg:text-3xl">
          We have very limited seats for booking calls. If you don&apos;t want
          to miss the chance, get a seat right now.
        </h3>
        <Button
          href="#"
          className="mt-8 min-w-max"
          as="anchor"
          variant="primary"
          name="book-a-consultation"
        >
          Book A Consultation
        </Button>
      </div>
    </section>
  )
}
