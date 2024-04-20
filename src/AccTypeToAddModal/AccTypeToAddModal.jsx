import { Link } from "react-router-dom"

function AccTypeToAddModal() {
    return (
        <div>
            <h3>Select Account Type To Add</h3>
            <div>
                <Link to="/AddDebitAccount">
                    Add Debit Account
                </Link>
            </div>
            <div>
                <Link to="/AddSavingsAccount">
                    Add Savings Account
                </Link>
            </div>
            <div>
                <Link to="/AddCreditAccount">
                    Add Credit Account
                </Link>
            </div>
            <div>
                <Link to="/AddInvestmentAccount">
                    Add Investment Account
                </Link>
            </div>

        </div>
    )
}

export default AccTypeToAddModal