import { cva, VariantProps } from "class-variance-authority"

import { NavItem } from "@/lib/data"

import { NavLink } from "./nav-link"

const NavbarVariants = cva("", {
  variants: {
    type: {
      default: "",
      submenu:
        "sub-menu border-red-500 absolute hidden flex flex-col w-max animate-in slide-in-from-bottom-2 duration-300",
      nested:
        "nested-sub-menu hidden absolute top-0 left-[100%] w-max animate-in slide-in-from-bottom-2 duration-300",
    },
  },
})

const NavListVariants = cva("", {
  variants: {
    type: {
      default: "flex gap-x-8",
      submenu: "mt-4 bg-background dark:bg-background-2 shadow rounded-md",
      nested: "ml-1 bg-background dark:bg-background-2 shadow rounded-md",
    },
  },
})

interface NavbarProps extends VariantProps<typeof NavbarVariants> {
  menu: NavItem[]
  depthlevel: number
}

export const Navbar = ({ type, depthlevel, menu }: NavbarProps) => {
  return (
    <div className={`level-${depthlevel} ${NavbarVariants({ type })}`}>
      <ul className={`${NavListVariants({ type })}`}>
        {menu.map((item, index) => {
          return (
            <NavLink
              key={index}
              item={item}
              hasSubmenu={
                item.children && item.children?.length > 0 ? true : false
              }
              depthlevel={depthlevel}
            />
          )
        })}
      </ul>
    </div>
  )
}
