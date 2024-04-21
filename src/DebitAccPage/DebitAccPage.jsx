import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarDays } from "react-icons/fa6";
import AddDebitExpenseForm from '../AddDebitExpenseForm/AddDebitExpenseForm';
import AddDebitIncomeForm from '../AddDebitIncomeForm/AddDebitIncomeForm';

function DebitAccPage() {
    return (
        <div>
            <h1>Debit Account - Natwest</h1>
            <div>
                Chart
            </div>
            <div>
                <p>Year - 2024</p>
                <div>
                    <button>All</button>
                    <button>January</button>
                    <button>February</button>
                    <button>March</button>
                    <button>April</button>
                    <button>May</button>
                    <button>June</button>
                    <button>July</button>
                    <button>August</button>
                    <button>September</button>
                    <button>October</button>
                    <button>November</button>
                    <button>December</button>
                </div>
                <span><hr /></span>
                <div>
                    <button>Add New Expense</button>
                    <button>Add New Income</button>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>Expense</p>
                            <p>Due: 25th</p>
                            <p>-£2,500</p>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <p>Income</p>
                            <p>Paid: 25th</p>
                            <p>-£2,500</p>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <p>Expense</p>
                            <p>Due: 25th</p>
                            <p>-£2,500</p>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                        <li>
                            <p>Income</p>
                            <p>Paid: 25th</p>
                            <p>-£2,500</p>
                            <div>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* modals*/}
            <div>
                <AddDebitExpenseForm />
            </div>

            <div>
                <AddDebitIncomeForm />
            </div>
        </div>
    )
}

export default DebitAccPage