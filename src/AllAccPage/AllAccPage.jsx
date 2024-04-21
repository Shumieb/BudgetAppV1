import styles from './AllAccPage.module.css'
import CreditAccAllPageCard from "../CreditAccAllPageCard/CreditAccAllPageCard"
import DebitAccAllPageCard from "../DebitAccAllPageCard/DebitAccAllPageCard"
import InvestAccAllPageCard from "../InvestAccAllPageCard/InvestAccAllPageCard"
import SavingsAccAllPageCard from "../SavingsAccAllPageCard/SavingsAccAllPageCard"

function AllAccPage() {
    return (
        <div>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2>Debit Accounts <span> - 3 Accounts</span></h2>
                    <div>
                        <button>View</button>
                        <button>Hide</button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>
                            <DebitAccAllPageCard />
                        </li>
                        <li>
                            <DebitAccAllPageCard />
                        </li>
                        <li>
                            <DebitAccAllPageCard />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2>Savings Accounts <span> - 3 Accounts</span></h2>
                    <div>
                        <button>View</button>
                        <button>Hide</button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>
                            <SavingsAccAllPageCard />
                        </li>
                        <li>
                            <SavingsAccAllPageCard />
                        </li>
                        <li>
                            <SavingsAccAllPageCard />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2>Credit Accounts <span> - 3 Accounts</span></h2>
                    <div>
                        <button>View</button>
                        <button>Hide</button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>
                            <CreditAccAllPageCard />
                        </li>
                        <li>
                            <CreditAccAllPageCard />
                        </li>
                        <li>
                            <CreditAccAllPageCard />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2>Investment Accounts <span> - 3 Accounts</span></h2>
                    <div>
                        <button>View</button>
                        <button>Hide</button>
                    </div>
                </div>
                <hr />
                <div>
                    <ul>
                        <li>
                            <InvestAccAllPageCard />
                        </li>
                        <li>
                            <InvestAccAllPageCard />
                        </li>
                        <li>
                            <InvestAccAllPageCard />
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default AllAccPage