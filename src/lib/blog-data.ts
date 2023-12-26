const content =
  "In an era where digital innovation is king, Augmented Reality (AR) and Virtual Reality (VR) are redefining the boundaries of marketing and customer engagement. Far from being futuristic concepts, these technologies are now at the forefront of creating immersive and transformative consumer experiences. In Canada, a land known for embracing technological advancements, AR and VR open new vistas for businesses to connect with their audience in unparalleled ways. This blog embarks on an explorative journey into AR and VR, showcasing how these cutting-edge technologies are not just the playthings of tech enthusiasts but powerful tools in the marketer’s arsenal."

const getExcerpt = (content: string) => {
  let sliced = content.slice(0, 200)
  let lastSpaceIndex = sliced.lastIndexOf(" ")
  return sliced.slice(0, lastSpaceIndex) + "..."
}

const excerpt = getExcerpt(content)

export const blogData = [
  {
    id: 1,
    title: "Augmented Reality and Virtual Reality: The Future of Marketing",
    content: content,
    featuredImage:
      "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/12/A-Deep-Dive-into-AR-and-VR-Marketing-Opportunities-in-Canada-Freelancers-Hub-Canada.jpg",
    excerpt: excerpt,
    category: "Web Development",
    publishedDate: "2021-09-25",
    slug: "blog-1",
  },
  {
    id: 2,
    title: "Augmented Reality and Virtual Reality: The Future of Marketing",
    content: content,
    featuredImage:
      "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/12/A-Deep-Dive-into-AR-and-VR-Marketing-Opportunities-in-Canada-Freelancers-Hub-Canada.jpg",
    excerpt: excerpt,
    category: "Web Development",
    publishedDate: "2021-09-25",
    slug: "blog-2",
  },
  {
    id: 3,
    title: "Augmented Reality and Virtual Reality: The Future of Marketing",
    content: content,
    featuredImage:
      "https://cdn-kdmof.nitrocdn.com/nxkBCvbCmIamkHApMKfmGOXcYTJUUtLR/assets/images/optimized/rev-8dca12d/freelancers-hub.ca/wp-content/uploads/2023/12/A-Deep-Dive-into-AR-and-VR-Marketing-Opportunities-in-Canada-Freelancers-Hub-Canada.jpg",
    excerpt: excerpt,
    category: "Web Development",
    publishedDate: "2021-09-25",
    slug: "blog-3",
  },
]
