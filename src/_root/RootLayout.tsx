import { Outlet } from "react-router-dom"
import Sidebar from "../components/shared/Sidebar"
import Topbar from "../components/shared/Topbar"


const RootLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div>
                <Topbar />
                <section>
                    <Outlet />
                </section>
            </div>
        </div>
    )
}

export default RootLayout