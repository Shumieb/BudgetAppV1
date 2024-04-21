import styles from "./CreditAccAllPageCard.module.css"
import { FaCoins, FaPercent, FaHandHolding, FaHourglassStart, FaHandHoldingDollar, FaWindowMaximize } from "react-icons/fa6";

function CreditAccAllPageCard() {
    return (
        <div className={styles.card_container}>
            <div>
                <p className={styles.card_heading}>Natwest</p>
                <span className={styles.card_heading_hr}><hr /></span>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaWindowMaximize /></span>
                    Credit Limit: £5,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaHandHolding /></span>
                    Amount Used: £2,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaCoins /></span>
                    Amount Available to Spend: £3,000
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaPercent /></span>
                    Interest Rate: 5%
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaHourglassStart /></span>
                    Monthly Payment due on: 25th of April
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaHandHoldingDollar /></span>
                    Monthly Payment paid on: 5th of April
                </p>
            </div>
            <div className={styles.btn_sect}>
                <button className={styles.btn}>More Info</button>
            </div>
        </div>
    )
}

export default CreditAccAllPageCard