import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <header>
            <h1>My Budget App</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink> </li>|
                    <li><NavLink to="/about">About</NavLink> </li>|
                    <li><NavLink to="/contact">Contact</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header