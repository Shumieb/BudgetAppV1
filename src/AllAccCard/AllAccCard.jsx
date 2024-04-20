import styles from "./AllAccCard.module.css"

function AllAccCard() {
    return (
        <div className={styles.all_card_container}>
            <h3 className={styles.card_heading}>All Accounts</h3>
            <p className={styles.card_text}>Debit Account Total: £20,000 </p>
            <p className={styles.card_text}>Savings Account Total: £20,000 </p>
            <p className={styles.card_text}>Credit Account Total: £20,000 </p>
            <p className={styles.card_text}>Investment Account Total: £20,000 </p>
        </div>
    )
}

export default AllAccCard