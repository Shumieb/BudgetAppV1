import 'react-calendar/dist/Calendar.css';
import AddDebitExpenseForm from '../AddDebitExpenseForm/AddDebitExpenseForm';
import AddDebitIncomeForm from '../AddDebitIncomeForm/AddDebitIncomeForm';
import DebitExpenseCard from '../DebitExpenseCard/DebitExpenseCard';
import DebitIncomeCard from '../DebitIncomeCard/DebitIncomeCard';

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
                            <DebitExpenseCard />
                        </li>
                        <li>
                            <DebitIncomeCard />
                        </li>
                        <li>
                            <DebitExpenseCard />
                        </li>
                        <li>
                            <DebitIncomeCard />
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