import "./Header.styles.css"
import { useNavigate } from "react-router-dom"

export const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("logged", "yes")
        navigate("/login", {replace: true})
    }

  return (
    <header>
        <span>Go Scrum</span>
        <div onClick={handleLogout}>x</div>
    </header>
  )
}
