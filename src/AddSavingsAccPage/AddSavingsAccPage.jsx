import { Link } from "react-router-dom";

function AddSavingsAccPage() {
    return (
        <div>
            <section>
                <h2>Add Savings Account</h2>
                <form>
                    <div>
                        <label>Account Name: </label>
                        <input type="text" name="savingsAccName" id="savingsAccName" />
                    </div>
                    <div>
                        <label>Initial Balance: </label>
                        <input type="text" name="saningsInitBal" id="savingsInitBal" />
                    </div>
                    <div>
                        <label>Interest Rate: </label>
                        <input type="number" name="savingsInterestRate" id="savingsInterestRate" min="0" max="100" />
                    </div>
                    <div>
                        <label>Monthly Payment Amount: </label>
                        <input type="number" name="savingsMonthlyPayment" id="savingsMonthlyPayment" min="0" />
                    </div>
                    <div>
                        <label>Monthly Payment Date: </label>
                        <input type="number" name="savingsPaymentDate" id="savingsPaymentDate" min="1" max="31" />
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

export default AddSavingsAccPage