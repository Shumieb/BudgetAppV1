import { Link } from "react-router-dom"
import styles from "./menu.module.css"
import { FaCoins } from "react-icons/fa6"

function Menu() {
    return (
        <div className={styles.container}>
            <p className={styles.menuItem}>
                <Link to="/all/all-accounts">All Accounts</Link>
            </p>
            <div>
                <p className={styles.menuHeading}>
                    <Link to="/all/current-accounts">Current Accounts</Link>
                </p>
                <ul>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Natwest Current Account</Link>
                    </li>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Halifax Current Account</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className={styles.menuHeading}>
                    <Link to="/all/savings-account">Savings Accounts</Link>
                </p>
                <ul>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Natwest Savings Account</Link>
                    </li>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Halifax Savings Account</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className={styles.menuHeading}>
                    <Link to="/all/credit-card-accounts">Credit Card Accounts</Link>
                </p>
                <ul>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Natwest Credit Card Account</Link>
                    </li>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Halifax Credit Card Account</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className={styles.menuHeading}>
                    <Link to="/all/loan-accounts">Loan Accounts</Link>
                </p>
                <ul>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Natwest Loan Account</Link>
                    </li>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Halifax Loan Account</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p className={styles.menuHeading}>
                    <Link to="/all/investment-accounts">Investment Accounts</Link>
                </p>
                <ul>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Natwest Investment Account</Link>
                    </li>
                    <li className={styles.listItem}>
                        <span><FaCoins /></span>
                        <Link to="/">Halifax Investment Account</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu