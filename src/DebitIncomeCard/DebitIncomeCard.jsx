import style from "./DebitIncomeCard.module.css"

function DebitIncomeCard() {
    return (
        <div>
            <p>Income</p>
            <p>Paid: 25th</p>
            <p>-£2,500</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default DebitIncomeCard