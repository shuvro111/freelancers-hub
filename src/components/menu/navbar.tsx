import { cva, VariantProps } from "class-variance-authority"

import { NavItem } from "@/lib/data"

import { NavLink } from "./nav-link"

const NavbarVariants = cva("", {
  variants: {
    type: {
      default: "flex gap-x-8",
      submenu:
        "bg-background dark:bg-background-2 shadow absolute left-0 bg-background flex flex-col w-max rounded hidden animate-in slide-in-from-bottom-2 duration-300",
      nested:
        "bg-background dark:bg-background-2 shadow absolute top-0 left-[100%] w-max hidden rounded animate-in slide-in-from-bottom-2 duration-300",
    },
  },
})

interface NavbarProps extends VariantProps<typeof NavbarVariants> {
  menu: NavItem[]
  depthlevel: number
}

export const Navbar = ({ type, depthlevel, menu }: NavbarProps) => {
  return (
    <ul className={`level-${depthlevel} ${NavbarVariants({ type })}`}>
      {menu.map((item, index) => {
        return (
          <NavLink
            key={index}
            item={item}
            hasSubmenu={
              item.children && item.children.length > 0 ? true : false
            }
            depthlevel={depthlevel}
          />
        )
      })}
    </ul>
  )
}
