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

export const mobileMenu: NavItem[] = menu.map((item) =>
  item.title === "Services" ? { ...item, children: megamenu } : { ...item }
)

//Accordion Data

interface AccordionItem {
  title: string
  content: string
}

export const accordionData: AccordionItem[] = [
  {
    title: "What is SEO?",
    content:
      "SEO stands for Search Engine Optimization. It is the process of optimizing your website to get organic, or un-paid, traffic from the search engine results page.",
  },
  {
    title: "How long does SEO take?",
    content:
      "It depends on the competitiveness of your industry and the popularity of your keywords. For example, ranking for a keyword like “shoes” is going to take longer than ranking for a more specific keyword like “red high-heeled shoes with bows”.",
  },
  {
    title: "What is the difference between SEO and SEM?",
    content:
      "SEO is the process of optimizing your website to get organic, or un-paid, traffic from the search engine results page. SEM is the process of getting traffic from purchasing ads on search engines.",
  },
  {
    title: "What is the difference between SEO and PPC?",
    content:
      "SEO is the process of optimizing your website to get organic, or un-paid, traffic from the search engine results page. PPC is the process of getting traffic from purchasing ads on search engines.",
  },
  {
    title: "What's the benefit of SEO?",
    content:
      "SEO is the process of optimizing your website to get organic, or un-paid, traffic from the search engine results page.",
  },
  {
    title: "Why Choose Freelancers Hub For SEO?",
    content:
      "We are a team of SEO experts with years of experience in the field. We have helped many businesses grow their online presence and increase their revenue through our SEO services. Our team is always up-to-date with the latest trends in SEO so we can provide you with the best possible service. If you want to learn more about how we can help your business, contact us today!",
  },
]
