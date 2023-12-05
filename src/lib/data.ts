export interface NavItem {
  title: string
  link: string
  icon?: string | React.ReactNode
  children?: NavItem[]
}

export const menu: NavItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
    children: [
      {
        title: "Web Development",
        link: "/web-development",
      },
      {
        title: "SEO",
        link: "/seo",
        children: [
          {
            title: "Custom Development",
            link: "/custom-dev",
            children: [
              {
                title: "NextJS",
                link: "/next",
              },
            ],
          },
        ],
      },
      {
        title: "SMM",
        link: "/smm",
      },
      {
        title: "PPC",
        link: "/ppc",
      },
    ],
  },
]
