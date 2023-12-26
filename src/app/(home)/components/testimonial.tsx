import Image from "next/image"
import { TbChevronLeft, TbChevronRight } from "react-icons/tb"

import { CardSlider } from "@/components/ui/slider/card-slider"

export const data = [
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/04/Shovon-Joarder.png",
    name: "Jason Vawter",
    designation: "Owner, Light House Party Bus & Limo",
    content:
      "Excellent SEO Service provider with whom I work for more than a year and I am extremely satisfied with the hard work and good results we have since this time. Now Keep it up and let's continue to rumbleeeee!",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/04/Shovon-Joarder.png",
    name: "Jason Vawter",
    designation: "Owner, Light House Party Bus & Limo",
    content:
      "Excellent SEO Service provider with whom I work for more than a year and I am extremely satisfied with the hard work and good results we have since this time. Now Keep it up and let's continue to rumbleeeee!",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/04/Shovon-Joarder.png",
    name: "Jason Vawter",
    designation: "Owner, Light House Party Bus & Limo",
    content:
      "Excellent SEO Service provider with whom I work for more than a year and I am extremely satisfied with the hard work and good results we have since this time. Now Keep it up and let's continue to rumbleeeee!",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/04/Shovon-Joarder.png",
    name: "Jason Vawter",
    designation: "Owner, Light House Party Bus & Limo",
    content:
      "Excellent SEO Service provider with whom I work for more than a year and I am extremely satisfied with the hard work and good results we have since this time. Now Keep it up and let's continue to rumbleeeee!",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/04/Shovon-Joarder.png",
    name: "Jason Vawter",
    designation: "Owner, Light House Party Bus & Limo",
    content:
      "Excellent SEO Service provider with whom I work for more than a year and I am extremely satisfied with the hard work and good results we have since this time. Now Keep it up and let's continue to rumbleeeee!",
  },
  {
    imageUrl:
      "https://freelancers-hub.ca/wp-content/uploads/2023/04/Shovon-Joarder.png",
    name: "Jason Vawter",
    designation: "Owner, Light House Party Bus & Limo",
    content:
      "Excellent SEO Service provider with whom I work for more than a year and I am extremely satisfied with the hard work and good results we have since this time. Now Keep it up and let's continue to rumbleeeee!",
  },
]

export const Testimonial = () => {
  return (
    <section className="bg-background-2 flex flex-col items-center gap-y-4 px-8 py-16  sm:px-0 lg:py-28">
      <h2 className="text-center text-4xl font-medium lg:text-5xl">
        What Our Satisfied Clients Think
      </h2>
      <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
        Discover our satisfied client&apos;s testimonials, showcasing the
        transformative<br></br> impact of our digital marketing solutions on
        their businesses.
      </p>

      <div className="mt-4 w-full">
        <div className="flex w-full flex-col gap-y-8">
          <div className="flex justify-center gap-x-4">
            <button
              id="testimonial-arrow-left"
              className="bg-accent rounded-full p-2 text-lg text-white"
            >
              <TbChevronLeft strokeWidth={3} />
            </button>
            <button
              id="testimonial-arrow-right"
              className="bg-accent rounded-full p-2 text-lg text-white"
            >
              <TbChevronRight strokeWidth={3} />
            </button>
          </div>

          <CardSlider
            navigation={{
              enabled: true,
              prevEl: "#testimonial-arrow-left",
              nextEl: "#testimonial-arrow-right",
            }}
            pagination
            autoplay
            slidesPerView={1}
            spaceBetween={20}
            loop
            centerSlides
            className="testimonial-slider-gradient mt-8"
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((item) => (
              <TestimonialCard
                key={item.name}
                imageUrl={item.imageUrl}
                name={item.name}
                designation={item.designation}
                content={item.content}
              />
            ))}
          </CardSlider>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  imageUrl: string
  name: string
  designation: string
  content: string
}

export const TestimonialCard = ({
  imageUrl,
  name,
  designation,
  content,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card-2 flex flex-col justify-center gap-y-4 rounded-xl p-8 shadow-md shadow-rose-500/50">
      <div className="flex flex-wrap items-center gap-x-4">
        <Image
          src={imageUrl}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover object-center"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-medium">{name}</h3>
          <p className="text-base text-slate-200">{designation}</p>
        </div>
      </div>
      <p className="">{content}</p>
    </div>
  )
}
