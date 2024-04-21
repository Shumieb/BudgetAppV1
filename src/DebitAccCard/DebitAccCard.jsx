import styles from "./DebitAccCard.module.css"

function DebitAccCard({ DisplayDebitAccPage }) {
    return (
        <div className={styles.debit_card_container} onClick={DisplayDebitAccPage}>
            <h3 className={styles.card_heading}>Natwest</h3>
            <p className={styles.card_italic_text}>Debit Account</p>
            <p className={styles.card_text}>Current Balance: £10,000</p>
            <p className={styles.card_text}>Outstanding Monthly Expenses: £10,000</p>
            <p className={styles.card_text}>Balance After Monthly Expenses: £10,000 </p>
        </div>
    )
}

export default DebitAccCard