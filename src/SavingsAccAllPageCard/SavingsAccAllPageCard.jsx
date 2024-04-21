import styles from "./SavingsAccAllPageCard.module.css"
import { FaCoins, FaPercent, FaHandHolding } from "react-icons/fa6";

function SavingsAccAllPageCard() {
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
                    <span className={styles.text_icon}><FaHandHolding /></span>
                    Monthly Contribution: £250
                </p>
                <p className={styles.card_text}>
                    <span className={styles.text_icon}><FaPercent /></span>
                    Interest: 5%
                </p>
            </div>
            <div className={styles.btn_sect}>
                <button className={styles.btn}>More Info</button>
            </div>
        </div>
    )
}

export default SavingsAccAllPageCard