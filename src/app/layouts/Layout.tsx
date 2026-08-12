import { Outlet } from "react-router"
import { Footer, Icon } from "../../shared"

export const Layout = () => {
    return <div>
        <div>Шапка</div>
        <Icon.CheckIcon />
        <Outlet />
        <Footer />
    </div>
}