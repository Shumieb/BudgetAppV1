import { Link } from "react-router-dom"

function AddInvestAccPage() {
    return (
        <div>
            <section>
                <h2>Add Investment Account</h2>
                <form>
                    <div>
                        <label>Account Name: </label>
                        <input type="text" name="investAccName" id="investAccName" />
                    </div>
                    <div>
                        <label>Initial Investment: </label>
                        <input type="text" name="initInvest" id="initInvest" />
                    </div>
                    <div>
                        <label>Account Type: </label>
                        <select name="accountType">
                            <option value="investmentAccount">Investment Account</option>
                        </select>
                    </div>
                    <input type="submit" value="Add Investment Account" />
                </form>
            </section>
            <Link to="/">Back to Home Page</Link>
        </div>
    )
}

export default AddInvestAccPage