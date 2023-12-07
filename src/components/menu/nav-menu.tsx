import { menu } from "@/lib/data"

import { Navbar } from "./navbar"

export const NavMenu = ({ depthlevel = 0 }) => {
  return (
    <nav className="menu hidden flex-1 items-center justify-center xl:flex">
      <Navbar depthlevel={depthlevel} menu={menu} type="default" />
    </nav>
  )
}
