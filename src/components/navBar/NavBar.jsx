import { NavLink } from "react-router-dom"
import styles from "./navBar.module.css"

function NavBar() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>My Budget App</h1>
            <nav className={styles.nav}>
                <span className={styles.navLink}>
                    <NavLink to="/" >Home</NavLink>
                </span>
                <span className={styles.navLink}>
                    <NavLink to="/about" >About</NavLink>
                </span>
                <span className={styles.navLink}>
                    <NavLink to="/contact" >Contact</NavLink>
                </span>
                <span className={styles.navLink}>
                    <NavLink to="/login" >Log In</NavLink>
                </span>
                <span className={styles.navLink}>
                    <NavLink to="/" >Log Out</NavLink>
                </span>
                <div className={styles.user}>
                    <img src="/images/noavatar.png" alt="" />
                    <span>Jane</span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar