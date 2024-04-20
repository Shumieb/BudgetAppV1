import { useState } from "react"
import styles from "./HomePage.module.css"

import AccTypeToAddModal from "../AccTypeToAddModal/AccTypeToAddModal"
import AllAccCard from "../AllAccCard/AllAccCard"
import AllAccPage from "../AllAccPage/AllAccPage"
import CreditAccCard from "../CreditAccCard/CreditAccCard"
import CreditAccPage from "../CreditAccPage/CreditAccPage"
import DebitAccCard from "../DebitAccCard/DebitAccCard"
import DebitAccPage from "../DebitAccPage/DebitAccPage"
import InvestAccCard from "../InvestAccCard/InvestAccCard"
import InvestAccPage from "../InvestAccPage/InvestAccPage"
import SavingsAccCard from "../SavingsAccCard/SavingsAccCard"
import SavingsAccPage from "../SavingsAccPage/SavingsAccPage"


function Home() {

    const [showAllAccPage, setShowAllAccPage] = useState(true);
    const [showDebitAccPage, setShowDebitAccPage] = useState(false);
    const [showCreditAccPage, setShowCreditAccPage] = useState(false);
    const [showSavingsAccPage, setShowSavingsAccPage] = useState(false);
    const [showInvestAccPage, setShowInvestAccPage] = useState(false);

    return (
        <>
            <main className={styles.main_container}>
                <section className={styles.left_side_bar}>
                    <div className={styles.add_acc_btn_sect}>
                        <input type="button" value="Add New Account" className={styles.add_acc_btn} />
                    </div>
                    <div className={styles.left_side_card}>
                        <AllAccCard />
                    </div>
                    <div className={styles.left_side_card}>
                        <DebitAccCard />
                    </div>
                    <div className={styles.left_side_card}>
                        <SavingsAccCard />
                    </div>
                    <div className={styles.left_side_card}>
                        <CreditAccCard />
                    </div>
                    <div className={styles.left_side_card}>
                        <InvestAccCard />
                    </div>
                </section>

                <section className={styles.main_pages}>
                    <AllAccPage />
                    <DebitAccPage />
                    <SavingsAccPage />
                    <CreditAccPage />
                    <InvestAccPage />
                </section>
            </main>

            {/* modals */}
            <div>
                <AccTypeToAddModal />
            </div>
        </>
    )
}

export default Home