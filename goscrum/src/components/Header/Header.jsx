import "./Header.styles.css"
import { useNavigate } from "react-router-dom"

export const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userName")
        navigate("/login", {replace: true})
    }

  return (
    <header>
        <span>Go Scrum</span>
        <div className="wrapper_right_header">
        <div>{localStorage.getItem("userName")}</div>
        <div onClick={handleLogout}>x</div>
        </div>
    </header>
  )
}
