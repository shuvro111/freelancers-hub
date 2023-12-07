import Link from "next/link"
import { TbChevronDown, TbChevronRight } from "react-icons/tb"

import { NavItem } from "@/lib/data"

import { Navbar } from "./navbar"

interface NavLinkProps {
  item: NavItem
  hasSubmenu: boolean
  depthlevel: number
}

export const NavLink = ({ item, hasSubmenu, depthlevel }: NavLinkProps) => {
  if (item.isMegamenu) {
    return (
      <div>
        <NavLinkContentWithMegamenu
          item={item}
          depthlevel={depthlevel}
          hasSubmenu={hasSubmenu}
        />
      </div>
    )
  } else {
    return (
      <NavLinkContent
        item={item}
        hasSubmenu={hasSubmenu}
        depthlevel={depthlevel}
      />
    )
  }
}

const NavLinkContent = ({
  hasSubmenu,
  depthlevel,
  item: { title, icon, link, children },
}: NavLinkProps) => {
  return (
    <li className="relative">
      <Link
        href={link}
        className={`hover:text-accent flex items-center gap-x-1 transition duration-300 ${
          depthlevel > 0 ? "px-4 py-3 transition duration-300" : "py-6"
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

const NavLinkContentWithMegamenu = ({
  depthlevel,
  item: { title, icon, link, megamenuContent },
}: NavLinkProps) => {
  return (
    <li className="">
      <Link
        href={link}
        className={`hover:text-accent flex items-center gap-x-1 transition ${
          depthlevel > 0 ? "px-4 py-3 transition" : "py-6"
        }`}
      >
        {icon}
        {title}
        <span>
          <TbChevronDown />
        </span>
      </Link>

      <div className="megamenu-content animate-in slide-in-from-bottom-2 absolute left-0 hidden w-full duration-300">
        <>{megamenuContent}</>
      </div>
    </li>
  )
}
