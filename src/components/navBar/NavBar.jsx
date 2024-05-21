import { NavLink } from "react-router-dom"
import styles from "./navBar.module.css"

function NavBar() {
    return (
        <div>
            <h1>My Budget App</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink> </li>|
                    <li><NavLink to="/about">About</NavLink> </li>|
                    <li><NavLink to="/contact">Contact</NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar