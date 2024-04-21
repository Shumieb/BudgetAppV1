import styles from "./DebitAccAllPageCard.module.css"
import { FaCoins, FaHandHoldingDollar, FaHourglassStart, FaMoneyBillWave } from "react-icons/fa6";

function DebitAccAllPageCard() {
    return (
        <div className={styles.card_container}>
            <div>
                <p className={styles.card_heading}>Natwest</p>
                <span className={styles.card_heading_hr}><hr /></span>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaCoins /></span>
                    Current Balance: £10,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaHandHoldingDollar /></span>
                    Paid Monthly Expenses: £5,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaHourglassStart /></span>
                    Outstanding Monthly Expenses: £2,000</p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaMoneyBillWave /></span>
                    Balance After All Monthly Expenses: £8,000
                </p>
            </div>
            <div className={styles.btn_sect}>
                <button className={styles.btn}>More Info</button>
            </div>
        </div>
    )
}

export default DebitAccAllPageCard