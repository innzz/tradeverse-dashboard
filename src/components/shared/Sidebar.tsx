import { NavLink, useLocation } from "react-router-dom"
import { sidebarLinks } from "../../constants"
import { INavLink } from "../../types"

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <section className="w-[330px] shadow-[5px_0px_35px_-10px_rgba(0,0,0,0.3)] h-[100vh]">
      <img src="/logos/7252830.jpg" alt="company logo" className="w-[240px] h-[140px]" />
      <div className="p-[20px] flex flex-col gap-[10px]">
        <p className="gray-text px-[15px]">MAIN MENU</p>
        <div>
          {sidebarLinks.map(({ Logo, route, label }: INavLink) => {
            const isActive = pathname === route;
            return <NavLink className={`${isActive ? "text-black bg-[#dff3ff] " : "text-gray-400 "} nav-link`} to={route}><Logo size={25} color={isActive ? "#40b7d5" : "#bfbfbf"} /> <p>{label}</p> </NavLink>
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default Sidebar