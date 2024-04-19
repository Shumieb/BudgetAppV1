import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <p>My Budget App</p>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink> </li>
                    <li><NavLink to="/about">About</NavLink> </li>
                    <li><NavLink to="/contact">Contact</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header