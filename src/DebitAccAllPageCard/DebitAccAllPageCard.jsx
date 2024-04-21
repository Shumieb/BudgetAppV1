import styles from "./DebitAccAllPageCard.module.css"

function DebitAccAllPageCard() {
    return (
        <>
            <div>
                <p>Natwest</p>
                <p>Current Balance: £10,000</p>
                <p>Paid Monthly Expenses: £5,000</p>
                <p>Outstanding Monthly Expenses: £2,000</p>
                <p>Balance After All Monthly Expenses: £8,000</p>
            </div>
            <div>
                <button>More Info</button>
            </div>
        </>
    )
}

export default DebitAccAllPageCard