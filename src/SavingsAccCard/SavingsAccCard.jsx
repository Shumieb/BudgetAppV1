import styles from "./SavingsAccCard.module.css"

function SavingsAccCard() {
    return (
        <div className={styles.savings_card_container}>
            <h3 className={styles.card_heading}>Natwest</h3>
            <p className={styles.card_italic_text}>Savings Account</p>
            <p className={styles.card_text}>Current Balance: £10,000</p>
            <p className={styles.card_text}>Interest Rate: 5%</p>
        </div>
    )
}

export default SavingsAccCard