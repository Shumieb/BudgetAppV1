import styles from "./CreditAccCard.module.css"

function CreditAccCard({ DisplayCreditAccPage }) {
    return (
        <div className={styles.credit_card_container} onClick={DisplayCreditAccPage}>
            <h3 className={styles.card_heading}>Natwest</h3>
            <p className={styles.card_italic_text}>Credit Account</p>
            <p className={styles.card_text}>Credit Limit: £10,000</p>
            <p className={styles.card_text}>Amount Available to Spend: £3,000</p>
            <p className={styles.card_text}>Monthly Payment due on: 5th of April</p>
            <p className={styles.card_text}>Monthly Payment paid on: 5th of April</p>
            <p className={styles.card_text}>Interest Rate: 5%</p>
        </div>
    )
}

export default CreditAccCard