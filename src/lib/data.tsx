import { Icons } from "@/lib/icons"
import { ServicesMegaMenu } from "@/components/menu/services-megamenu"

interface NavLink {
  title: string
  link: string
  icon?: string | React.ReactNode
  children?: NavItem[]
}

export interface NavItem extends NavLink {
  isMegamenu?: boolean
  megamenuContent?: React.ReactNode
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
    isMegamenu: true,
    megamenuContent: <ServicesMegaMenu />,
  },
  {
    title: "Contact",
    link: "/case-studies",
  },
  {
    title: "Resources",
    link: "#",
    children: [
      {
        title: "FAQ",
        link: "/faq",
      },

      {
        title: "Blog",
        link: "/blogs",
      },
      {
        title: "Book A Consultation",
        link: "/book-a-consultation",
        children: [
          {
            title: "meeting",
            link: "/meeting",
          },
        ],
      },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
]

export const megamenu: NavLink[] = [
  {
    //Web Development Services
    title: "Web Development",
    link: "/web-development",
    icon: <Icons.webDevelopment />,
    children: [
      {
        title: "Wordpress Development",
        link: "/wordpress-development",
      },
      {
        title: "Ecommerce Development",
        link: "/ecommerce-development",
      },
      {
        title: "Shopify Development",
        link: "/shopify-development",
      },
      {
        title: "Custom Development",
        link: "/custom-development",
      },
    ],
  },
  {
    //SEO Services
    title: "SEO",
    link: "/search-engine-optimization",
    icon: <Icons.seo />,
    children: [
      {
        title: "Local SEO",
        link: "/local-seo",
      },
      {
        title: "National SEO",
        link: "/national-seo",
      },
      {
        title: "Ecommerce SEO",
        link: "/ecommerce-seo",
      },
      {
        title: "Content Marketing",
        link: "/content-marketing",
      },
    ],
  },
  {
    //SMM Services
    title: "SMM",
    link: "/social-media-marketing",
    icon: <Icons.smm />,
    children: [
      {
        title: "Facebook Marketing",
        link: "/facebook-marketing",
      },
      {
        title: "Google My Business",
        link: "/google-my-business",
      },
      {
        title: "Instagram Marketing",
        link: "/instagram-marketing",
      },
      {
        title: "Linkedin Marketing",
        link: "/linkedin-marketing",
      },
    ],
  },
  {
    //PPC Services
    title: "PPC",
    link: "/pay-per-click",
    icon: <Icons.ppc />,
    children: [
      {
        title: "Google Adwords",
        link: "/google-adwords",
      },
      {
        title: "Facebook Advertising",
        link: "/facebook-advertising",
      },
      {
        title: "Linkedin Advertising",
        link: "/linkedin-advertising",
      },
      {
        title: "Instagram Advertising",
        link: "/instagram-advertising",
      },
    ],
  },
]
