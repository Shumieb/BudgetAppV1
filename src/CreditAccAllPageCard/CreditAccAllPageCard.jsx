import styles from "./CreditAccAllPageCard.module.css"

function CreditAccAllPageCard() {
    return (
        <>
            <div>
                <p>Natwest</p>
                <p>Credit Limit: £5,000</p>
                <p>Amount Used: £2,000</p>
                <p>Amount Available to Spend: £3,000</p>
                <p>Interest Rate: 5%</p>
                <p>Monthly Payment due on: 25th of April</p>
                <p>Monthly Payment paid on: 5th of April</p>
            </div>
            <div>
                <button>More Info</button>
            </div>
        </>
    )
}

export default CreditAccAllPageCard