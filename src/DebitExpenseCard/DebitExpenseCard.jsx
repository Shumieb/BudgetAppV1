import styles from "./DebitExpenseCard.module.css"

function DebitExpenseCard() {
    return (
        <div>
            <p>Expense</p>
            <p>Due: 25th</p>
            <p>-£2,500</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default DebitExpenseCard