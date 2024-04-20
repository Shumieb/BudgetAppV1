import { Link } from "react-router-dom"

function AddCreditAccPage() {
    return (
        <div>
            <section>
                <h2>Add Credit Account</h2>
                <form>
                    <div>
                        <label>Account Name: </label>
                        <input type="text" name="creditAccName" id="creditAccName" />
                    </div>
                    <div>
                        <label>Initial Balance: </label>
                        <input type="text" name="creditInitBal" id="creditInitBal" />
                    </div>
                    <div>
                        <label>Interest Rate: </label>
                        <input type="number" name="creditInterestRate" id="creditInterestRate" min="0" max="100" />
                    </div>
                    <div>
                        <label>Monthly Payment Due Date: </label>
                        <input type="number" name="creditDueDate" id="creditDueDate" min="1" max="31" />
                        <p>Day of the month the payment is due.</p>
                    </div>
                    <div>
                        <label>Account Type: </label>
                        <select name="accountType">
                            <option value="creditAccount">Credit Account</option>
                        </select>
                    </div>
                    <input type="submit" value="Add Credit Account" />
                </form>
            </section>
            <Link to="/">Back to Home Page</Link>
        </div>

    )
}

export default AddCreditAccPage