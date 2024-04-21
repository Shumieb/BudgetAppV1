import styles from './AllAccPage.module.css'
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

import CreditAccAllPageCard from "../CreditAccAllPageCard/CreditAccAllPageCard"
import DebitAccAllPageCard from "../DebitAccAllPageCard/DebitAccAllPageCard"
import InvestAccAllPageCard from "../InvestAccAllPageCard/InvestAccAllPageCard"
import SavingsAccAllPageCard from "../SavingsAccAllPageCard/SavingsAccAllPageCard"
import { useState } from 'react';

function AllAccPage() {

    const [viewDebitAccCards, setViewDebitAccCards] = useState(true);
    const [viewSavingsAccCards, setViewSavingsAccCards] = useState(true);
    const [viewCreditAccCards, setViewCreditAccCards] = useState(true);
    const [viewInvestAccCards, setViewInvestAccCards] = useState(true);

    return (
        <div>
            <h1 className={styles.page_heading}>All Accounts</h1>
            <div className={styles.page_heading_hr}>
                <hr />
            </div>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2 className={styles.sect_heading}>
                        Debit Accounts
                        {!viewDebitAccCards && <span> - 3 Accounts</span>}
                    </h2>
                    <div className={styles.button_sect}>
                        {
                            viewDebitAccCards ?
                                <p className={styles.btn} onClick={() => setViewDebitAccCards(false)}>
                                    <FaAnglesUp />
                                </p> :
                                <p className={styles.btn} onClick={() => setViewDebitAccCards(true)}>
                                    <FaAnglesDown />
                                </p>
                        }
                    </div>
                </div>
                <hr />
                {viewDebitAccCards &&
                    (
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
                    )}
            </section>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2 className={styles.sect_heading}>
                        Savings Accounts
                        {!viewSavingsAccCards && <span> - 3 Accounts</span>}
                    </h2>
                    <div className={styles.button_sect}>
                        {
                            viewSavingsAccCards ?
                                <p className={styles.btn} onClick={() => setViewSavingsAccCards(false)}><FaAnglesUp /></p>
                                :
                                <p className={styles.btn} onClick={() => setViewSavingsAccCards(true)}><FaAnglesDown /></p>
                        }
                    </div>
                </div>
                <hr />
                {
                    viewSavingsAccCards &&
                    (
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
                    )
                }
            </section>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2 className={styles.sect_heading}>
                        Credit Accounts
                        {!viewCreditAccCards && <span> - 3 Accounts</span>}
                    </h2>
                    <div className={styles.button_sect}>
                        {viewCreditAccCards ?
                            <p className={styles.btn} onClick={() => setViewCreditAccCards(false)}><FaAnglesUp /></p>
                            :
                            <p className={styles.btn} onClick={() => setViewCreditAccCards(true)}><FaAnglesDown /></p>
                        }
                    </div>
                </div>
                <hr />
                {
                    viewCreditAccCards &&
                    (
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
                    )
                }
            </section>

            <section className={styles.sect_container}>
                <div className={styles.sect_header}>
                    <h2 className={styles.sect_heading}>
                        Investment Accounts
                        {!viewInvestAccCards && <span> - 3 Accounts</span>}
                    </h2>
                    <div className={styles.button_sect}>
                        {
                            viewInvestAccCards ?
                                <p className={styles.btn} onClick={() => setViewInvestAccCards(false)}><FaAnglesUp /></p>
                                :
                                <p className={styles.btn} onClick={() => setViewInvestAccCards(true)}><FaAnglesDown /></p>
                        }
                    </div>
                </div>
                <hr />
                {
                    viewInvestAccCards &&
                    (
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
                    )
                }
            </section>

        </div>
    )
}

export default AllAccPage