import { Outlet } from "react-router"
import { Footer, Icon } from "@/shared/ui"

export const Layout = () => {
    return <div>
        <div>Шапка</div>
        <Icon.CheckIcon />
        <Outlet />
        <Footer />
    </div>
}