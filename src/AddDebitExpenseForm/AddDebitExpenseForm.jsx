import styles from "./AddDebitExpenseForm.module.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { FaCalendarDays } from "react-icons/fa6";

function AddDebitExpenseForm() {
    return (
        <>
            <form>
                <h2>Add New Expense</h2>
                <div>
                    <label>Expense Name: </label>
                    <input type="text" name="debitExpenseName" id="debitExpenseName" />
                </div>
                <div>
                    <label>Expense Amount: </label>
                    <input type="number" name="debitExpenseAmount" id="debitExpenseAmount" min="0" />
                </div>
                <div>
                    <label>Expense Frequency: </label>
                    <select name="expenseFrequency" id="expenseFrequency">
                        <option value="once_only">Once Only</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <div>
                    <label>Start Date: </label>
                    <select name="debitExpenseStartDate" id="debitExpenseStartDate">
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
                    <input type="submit" value="Add Expense" />
                </div>
            </form>
        </>
    )
}

export default AddDebitExpenseForm