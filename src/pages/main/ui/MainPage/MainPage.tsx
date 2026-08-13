import { Link } from "react-router"
import { ROUTES } from "@/shared/routes"

export const Main = () => {
    return <div>
        Главная
        <Link to={ROUTES.profile.index}>Профиль</Link> 
        </div>
}