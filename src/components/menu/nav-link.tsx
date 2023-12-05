import Link from "next/link"
import { TbChevronDown, TbChevronRight } from "react-icons/tb"

import { NavItem } from "@/lib/data"

import { Navbar } from "./navbar"

interface NavLinkProps {
  item: NavItem
  hasSubmenu: boolean
  depthlevel: number
}

export const NavLink = ({
  hasSubmenu,
  depthlevel,
  item: { title, icon, link, children },
}: NavLinkProps) => {
  return (
    <li className="relative">
      <Link
        href={link}
        className={`hover:text-accent flex items-center gap-x-1 transition ${
          depthlevel > 0
            ? "hover:bg-background-2 dark:bg-background-3 mr-1 px-4 py-3 transition"
            : "py-6"
        }`}
      >
        {icon}
        {title}
        {hasSubmenu && children && children.length > 0 ? (
          depthlevel > 0 ? (
            <span>
              <TbChevronRight />
            </span>
          ) : (
            <span>
              <TbChevronDown />
            </span>
          )
        ) : null}
      </Link>
      {hasSubmenu ? (
        <Navbar
          menu={children as NavItem[]}
          depthlevel={depthlevel + 1}
          type={depthlevel > 0 ? "nested" : "submenu"}
        />
      ) : null}
    </li>
  )
}
