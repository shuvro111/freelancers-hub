"use client"

import { useState } from "react"
import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"
import { TbArrowRight, TbChevronDown } from "react-icons/tb"

import { mobileMenu, NavItem } from "@/lib/data"

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "./accordion/accordion"

export const MobileMenu = () => {
  return (
    <nav className="px-8 py-4">
      <MobileNavbar items={mobileMenu} />
      <Link
        href="/book-a-consultation"
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        className="bg-accent hover:bg-accent-hover text-accent-foreground -ml-4 mt-16 flex w-max items-center gap-x-2 rounded-full px-6 py-3 font-semibold transition"
      >
        Book A Consultation <TbArrowRight strokeWidth="3" />
      </Link>
    </nav>
  )
}

const MobileNavbarVariants = cva("w-full flex flex-col gap-y-6", {
  variants: {
    type: {
      submenu: "pl-4 pt-4",
    },
  },
})

interface MobileNavbarProps extends VariantProps<typeof MobileNavbarVariants> {
  items: NavItem[]
}

const MobileNavbar = ({ items, type }: MobileNavbarProps) => {
  return (
    <ul className={MobileNavbarVariants({ type })}>
      {items?.map((item, index) => {
        if (item.children) {
          return <SubMenu item={item} key={index} />
        } else {
          return (
            <li
              key={index}
              className="hover:text-accent w-full transition duration-300"
            >
              <Link href={item.link} className="flex items-center text-lg">
                {item.title}
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}

const SubMenu = ({ item }: { item: NavItem }) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleExpand = () => {
    setExpanded((prev) => !prev)
  }
  return (
    <Accordion expand={expanded} toggleExpand={() => toggleExpand()}>
      <div className="hover:text-accent flex items-center justify-start gap-x-1 transition duration-300">
        <li className="w-max ">
          <Link href={item.link} className="flex items-center text-lg">
            {item.title}
          </Link>
        </li>
        <AccordionTrigger className="block w-max flex-1 ">
          <span>
            <TbChevronDown />
          </span>
        </AccordionTrigger>
      </div>
      <AccordionContent>
        <MobileNavbar items={item.children as NavItem[]} type="submenu" />
      </AccordionContent>
    </Accordion>
  )
}

// const MobileNavbar = ({ items }: { items: NavItem[] }) => {
//   const [expanded, setExpanded] = useState<boolean>(false)

//   const toggleExpand = () => {
//     setExpanded((prev) => !prev)
//   }
//   return (
//     <ul className="flex flex-col gap-y-4">
//       {items.map((item, index) => {
//         if (item.children || item.isMegamenu) {
//           return (
//             <Accordion
//               expand={expanded}
//               toggleExpand={() => toggleExpand()}
//               key={index}
//             >
//               <li key={index}>
//                 <Link href={item.link} className="text-lg flex items-center">
//                   {item.title}
//                 </Link>
//               </li>
//               <AccordionTrigger>
//                 <span>
//                   <TbChevronDown />
//                 </span>
//               </AccordionTrigger>
//               <AccordionContent>
//                 <MobileNavbar items={item.children as NavItem[]} key={index} />
//               </AccordionContent>
//             </Accordion>
//           )
//         } else {
//           return (
//             <li key={index}>
//               <Link href={item.link} className="text-lg flex items-center">
//                 {item.title}
//               </Link>
//             </li>
//           )
//         }
//       })}
//     </ul>
//   )
// }
