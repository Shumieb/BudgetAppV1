import { Link } from "react-router-dom"

function AddDebitAccPage() {
    return (
        <div>
            <section>
                <h2>Add Debit Account</h2>
                <form>
                    <div>
                        <label>Account Name: </label>
                        <input type="text" name="debitAccName" id="debitAccName" />
                    </div>
                    <div>
                        <label>Initial Balance: </label>
                        <input type="text" name="debitInitBal" id="debitInitBal" />
                    </div>
                    <div>
                        <label>Interest Rate: </label>
                        <input type="number" name="debitInterestRate" id="debitInterestRate" min="0" max="100" />
                    </div>
                    <div>
                        <label>Account Type: </label>
                        <select name="accountType">
                            <option value="debitAccount">Debit Account</option>
                        </select>
                    </div>
                    <input type="submit" value="Add Debit Account" />
                </form>
            </section>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}

export default AddDebitAccPage