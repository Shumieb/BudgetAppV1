import styles from "./AddDebitIncomeForm.module.css"
import 'react-calendar/dist/Calendar.css';
import { FaCalendarDays } from "react-icons/fa6";
import Calendar from 'react-calendar';

function AddDebitIncomeForm() {
    return (
        <div>
            <form>
                <h2>Add New Income</h2>
                <div>
                    <label>Income Name: </label>
                    <input type="text" name="debitIncomeName" id="debitIncomeName" />
                </div>
                <div>
                    <label>Income Amount: </label>
                    <input type="number" name="debitIncomeAmount" id="debitIncomeAmount" min="0" />
                </div>
                <div>
                    <label>Income Frequency: </label>
                    <select name="incomeFrequency" id="incomeFrequency">
                        <option value="once_only">Once Only</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <label>Start Date: </label>
                    <select name="debitIncomeStartDate" id="debitIncomeStartDate">
                        <option value="today">Today</option>
                        <option value="chooseDate">Select Date</option>
                    </select>
                    <div>
                        <button><FaCalendarDays /></button>
                    </div>
                    <Calendar />
                </div>
                <div>
                    <label>Account Name: </label>
                    <input type="text" name="debitAccName" id="debitAccName" disabled value="Natwest" />
                </div>
                <div>
                    <label>Account Type: </label>
                    <input type="text" name="debitAccType" id="debitAccType" disabled value="Debit Account" />
                </div>
                <div>
                    <input type="submit" value="Add Income" />
                </div>
            </form>
        </div>
    )
}

export default AddDebitIncomeForm