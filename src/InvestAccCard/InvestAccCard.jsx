import styles from "./InvestAccCard.module.css"

function InvestAccCard({ DisplayInvestAccPage }) {
    return (
        <div className={styles.invest_card_container} onClick={DisplayInvestAccPage}>
            <h3 className={styles.card_heading}>Natwest</h3>
            <p className={styles.card_italic_text}>Investment Account</p>
            <p className={styles.card_text}>Current Balance: £10,000</p>
            <p className={styles.card_text}>Amount Invested: £10,000</p>
            <p className={styles.card_text}>Amount Earned: £3,000</p>
            <p className={styles.card_text}>Amount Lost: £3,000</p>
        </div>
    )
}

export default InvestAccCard