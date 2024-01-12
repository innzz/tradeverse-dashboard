import { Outlet } from "react-router-dom"
import Sidebar from "../components/shared/Sidebar"
import Topbar from "../components/shared/Topbar"


const RootLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <section className="flex flex-col h-[100vh] py-[35px] pl-[55px] pr-[25px] gap-[20px] flex-1">
                <Topbar />
                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default RootLayout