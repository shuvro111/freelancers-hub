import Image from "next/image"
import Link from "next/link"

import { blogData } from "@/lib/blog-data"

export const Blog = () => {
  return (
    <div className="bg-background-3">
      <div className="container flex flex-col items-center gap-y-4 py-16 lg:py-28">
        <h2 className="text-center text-4xl font-medium lg:text-5xl">
          Blogs And Articles
        </h2>
        <p className="w-full text-center font-light leading-relaxed lg:w-1/2">
          Explore our informative blog, featuring industry insights, tips, and
          trends to help you stay ahead in the digital marketing landscape.
        </p>

        <div className="mt-8 flex w-full flex-col justify-center gap-8 md:flex-row  md:gap-4 lg:mt-16 xl:gap-16">
          {blogData.map((item) => (
            <BlogCard
              key={item.id}
              featuredImage={item.featuredImage}
              title={item.title}
              excerpt={item.excerpt}
              category={item.category}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface BlogCardProps {
  featuredImage: string
  title: string
  excerpt: string
  category: string
  slug: string
}

export const BlogCard = ({
  featuredImage,
  title,
  excerpt,
  category,
  slug,
}: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-card-2 group/blog relative flex h-full flex-1 flex-col items-center overflow-hidden rounded-xl shadow-none transition-shadow duration-500 hover:shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden">
        <Image
          src={featuredImage}
          width={400}
          height={400}
          alt={title + "By Freelancers Hub Digital Marketing Agency"}
          className="w-full transition-all duration-500 group-hover/blog:scale-105 group-hover/blog:brightness-110"
        />
      </div>
      <span className="bg-accent absolute right-2 top-2 rounded-full px-4 py-1 text-sm font-medium text-white lg:text-base">
        {category}
      </span>
      <div className="p-4 lg:p-8">
        <h3 className="text-2xl font-medium sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl">
          {title}
        </h3>
        <p className="mt-4">{excerpt}</p>
      </div>
    </Link>
  )
}
