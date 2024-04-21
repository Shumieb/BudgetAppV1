import styles from "./InvestAccAllPageCard.module.css"
import { FaCoins, FaHandHoldingDollar, FaCircleExclamation, FaMoneyBillWave } from "react-icons/fa6";

function InvestAccAllPageCard() {
    return (
        <div className={styles.card_container}>
            <div>
                <p className={styles.card_heading}>Natwest</p>
                <span className={styles.card_heading_hr}><hr /></span>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaCoins /></span>
                    Current Balance: £5,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaHandHoldingDollar /></span>
                    Amount Invested: £6,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaMoneyBillWave /></span>
                    Amount Earned: £3,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaCircleExclamation /></span>
                    Amount Lost: £3,000
                </p>
            </div>
            <div className={styles.btn_sect}>
                <button className={styles.btn}>More Info</button>
            </div>
        </div>
    )
}

export default InvestAccAllPageCard